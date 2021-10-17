import AuthReq from "./AuthReq";
import DbInterface from "./DbInterface";

export default class DummyDb implements DbInterface {
  dummyId: string = "very";
  dummyPass: string = "cool";
  dummyToken: string = "tinkywinky";
  constructor (){}
  authenticate (auth: AuthReq): boolean {
    auth.valid = (auth.id === dummyId && auth.pass === dummyPass) || auth.token === dummyToken;
    return auth.valid;
  }
}
