import AuthReq from "./models/AuthReq";
import DbInterface from "./models/DbInterface";
import DummyDb from "./models/DummyDb";

export enum DaoType {
  dummy,
}

export default class DataAccess {
  type: DaoType;
  db: DbInterface;
  constructor(type: keyof typeof DaoType, connectString: string){
    this.type = DaoType[type];
    if (this.type === DaoType.dummy){
      this.db = new DummyDb();
    }
  };
}
