import AuthReq from "./AuthReq";

export default interface DbInterface {
  authenticate(auth: AuthReq): boolean;
}
