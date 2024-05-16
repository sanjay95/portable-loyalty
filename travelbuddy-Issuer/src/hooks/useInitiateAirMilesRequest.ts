import { useEffect, useState } from "react";
import { presentationDefinitions } from "../utils/presentation-definitions";
import useInitiateRequest, { VaultRequestType } from "@affinidi/affinidi-react-auth/dist/hooks/useInitiateRequest";
import { useCompleteRequest } from "@affinidi/affinidi-react-auth";

export default function useInitiateAirMilesRequest({
  callbackUrl,
  doVerification,
  useVerifyVpMutation,
}: VaultRequestType) {
  const [data, setData] = useState<any>();

  //Creating request using PEX
  const vaultRequest: VaultRequestType = {
    presentationDefinition: presentationDefinitions.airMilesVC,
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
      const airMilesVC = vpToken.verifiableCredential.find(
        (vc: any) => vc.type.indexOf("TAirLineMilesV1R0") > -1
      );

      if (airMilesVC) {
        const credentialSubject = Array.isArray(
          airMilesVC.credentialSubject
        )
          ? airMilesVC.credentialSubject[0]
          : airMilesVC.credentialSubject;
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
