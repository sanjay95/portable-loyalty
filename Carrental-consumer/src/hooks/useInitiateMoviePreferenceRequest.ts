import { useEffect, useState } from "react";
import { presentationDefinitions } from "../utils/presentation-definitions";
import useInitiateRequest, { VaultRequestType } from "@affinidi/affinidi-react-auth/dist/hooks/useInitiateRequest";
import { useCompleteRequest } from "@affinidi/affinidi-react-auth";

export default function useInitiateMoviePreferenceRequest({
  callbackUrl,
  doVerification,
  useVerifyVpMutation,
}: VaultRequestType) {
  const [data, setData] = useState<any>();

  //Creating request using PEX
  const vaultRequest: VaultRequestType = {
    presentationDefinition: presentationDefinitions.moviePreference,
    callbackUrl,
    doVerification,
    useVerifyVpMutation,
  };

  //Initalizing request
  const { isInitializing, isExtensionInstalled, handleInitiate } =
    useInitiateRequest(vaultRequest);

  //Completing the request
  const { vpToken, error, errorDescription, isLoading, isCompliant } =
    useCompleteRequest(vaultRequest);

  useEffect(() => {
    if (vpToken && !isLoading && isCompliant) {
      //received vp token and its valid
      const moviePreferencesVC = vpToken.verifiableCredential.find(
        (vc: any) => vc.type.indexOf("MoviePreferencesVC") > -1
      );

      if (moviePreferencesVC) {
        const credentialSubject = Array.isArray(
          moviePreferencesVC.credentialSubject
        )
          ? moviePreferencesVC.credentialSubject[0]
          : moviePreferencesVC.credentialSubject;
        setData((state: any) => ({ ...state, ...credentialSubject }));
      }
    }
  }, [vpToken, isLoading, isCompliant]);

  return {
    isInitializing,
    isExtensionInstalled,
    handleInitiate,
    isLoading: vpToken && isLoading,
    error,
    errorDescription,
    data,
  };
}
