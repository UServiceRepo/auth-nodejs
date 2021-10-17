import AuthReq from "./models/AuthReq";

export interface DbInterface {
  authenticate(auth: AuthReq): bool;
}
