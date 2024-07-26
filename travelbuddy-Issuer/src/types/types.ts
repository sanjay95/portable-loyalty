import { IotaRequest, IotaResponse, OpenMode } from "@affinidi-tdk/iota-browser";

export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  email: string;
  familyName: string;
  givenName: string;
  middleName: string;
  picture: string;
  country: string;
  nickname: string;
  phoneNumber: string;
  gender: string;
  birthdate: string;
  postalCode: string;
  city: string;
  address: string;
  verified: boolean;
  shopping: any;
};

export type ResponseError = {
  message: string;
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


export type IotaRequestType = {
  configurationId: string
  queryId: string;
  openMode?: OpenMode
};

export type IotaDataRequest = {
  request: IotaRequest;
  response?: IotaResponse;
};

export type issuanceResponse = {
  credentialOfferUri: string
  expiresIn: number
  issuanceId: string
  txCode?: string
};