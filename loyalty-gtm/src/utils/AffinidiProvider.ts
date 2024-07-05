import { OAuthConfig, OAuthUserConfig } from "next-auth/providers";
import { providerIssuer } from "./env";


export interface AffinidiProfile extends Record<string, any> {
  id: string;
  userId: string;
  name: string;
  email: string;
  image: string;
}

export default function Affinidi<P extends AffinidiProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "affinidi",
    name: "affinidi",
    wellKnown: `${providerIssuer}/.well-known/openid-configuration`,
    type: "oauth",
    authorization: { params: { scope: "openid offline_access" } },
    idToken: true,
    client: {
      token_endpoint_auth_method: "client_secret_post",
    },
    profile(profile, tokens) {
      //decode Affinidi ID token 
      
      const idToken = tokens.id_token && JSON.parse(Buffer.from(tokens.id_token.split('.')[1], 'base64').toString());
      console.log('Email direct from toekn', idToken.email);
      //and get claims from custom attribute
      const custom = idToken?.["custom"];
      const email = idToken.email || custom?.find((i: any) => typeof i.email === "string")?.email;
      const phoneNumber = idToken.phone_number || custom?.find((i: any) => typeof i.phoneNumber === "string")?.phoneNumber;
      const PAN = custom?.find((i: any) => typeof i.documentId === "string")?.documentId;
      const givenName = idToken.given_name || custom?.find((i: any) => typeof i.givenName === "string")?.givenName 
                        || custom?.find((i: any) => typeof i.displayName === "string")?.displayName
                        || '';
      const familyName = idToken.family_name || custom?.find((i: any) => typeof i.familyName === "string")?.familyName || '';
      const picture = idToken.picture || custom?.find((i: any) => typeof i.picture === "string")?.picture;

      return {
        id: profile.sub,
        userId: profile.sub,
        name: `${givenName} ${familyName}`.trim(),
        email: email || phoneNumber || PAN,
        image: picture,
      };
    },
    style: {
      logo: "../../images/logo-affinidi.svg",
      bg: "#1d58fc",
      text: "#fff",
      logoDark: "../../images/logo-affinidi.svg",
      bgDark: "#1d58fc",
      textDark: "#fff",
    },
    options,
  };
}
