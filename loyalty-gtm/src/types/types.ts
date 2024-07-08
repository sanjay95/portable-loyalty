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
  passtype: string;
  passAmount: string;
  email: string | null | undefined;
  name: string | null | undefined;
  phoneNumber?: string;
  dob?: string;
  gender?: string;
  address?: string;
  postcode?: string;
  city?: string;
  country?: string;
};
