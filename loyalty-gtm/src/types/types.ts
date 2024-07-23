export type ResponseError = {
  message: string;
};

export type UserInfo = {
  email?: string;
  country?: string;
  image?:string;

};

export type OfferPayload = {
  credentialOfferUri: string;
  expiresIn: number;
  issuanceId: string;
  txCode?: string;
};

export type MessagePayload = {
  message: string;
  type: "success" | "error";
};

export type IotaConfigurationProp = {
  name: string;
  configurationId: string;
};

export type RegistrationProps = {
  email: string | null | undefined;
  givenName: string | null | undefined;
  familyName: string | null | undefined;
  phoneNumber?: string;
  birthdate?: string;
  gender?: string;
  locality?: string;
  postcode?: string;
  city?: string;
  country?: string;
};
