export default class AuthReq {
    id: string = "";
    pass: string = "";
    token: string = "";
    valid: boolean = false;
    constructor(json: {id: string, pass: string, token: string, valid: boolean}) {

      Object.keys(json).forEach((key: string) => {
        if(typeof((this as any)[key]) == typeof((json as any)[key])) {
          (this as any)[key] = (json as any)[key];
        } else {
          throw new TypeError(`"${key}" is not of type ${typeof((this as any)[key])}`);
        }
      });
    }
};
