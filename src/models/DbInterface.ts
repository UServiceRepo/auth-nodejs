import AuthReq from "./models/AuthReq";

interface DbInterface {
  authenticate(auth: AuthReq): bool;
}
