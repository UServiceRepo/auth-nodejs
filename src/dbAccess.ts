export enum DaoType {
  dummy,
}
export default DataAccess {
  type: DaoType;
  constructor(type: keyof typeof DaoType){
    this.type = DaoType[type];
  }
}
