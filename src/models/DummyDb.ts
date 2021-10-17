import AuthReq from "./AuthReq";
import DbInterface from "./DbInterface";

export default class DummyDb implements DbInterface {
  dummyId: string = "very";
  dummyPass: string = "cool";
  dummyToken: string = "tinkywinky";
  constructor (){}
  authenticate (auth: AuthReq): boolean {
    auth.valid = (auth.id === this.dummyId && auth.pass === this.dummyPass) || auth.token === this.dummyToken;
    return auth.valid;
  }
}
