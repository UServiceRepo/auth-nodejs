export default class AuthReq {
    id: string;
    pass: string;
    token: string;
    constructor(json: {id: string, pass: string, token: string}) {
      if (typeof(json.id) == "string")
        this.id = json.id;
      else
        throw new TypeError('"id" is not of type string');
      if (typeof(json.pass) == "string")
        this.pass = json.pass;
      else
        throw new TypeError('"pass" is not of type string');
      if (typeof(json.token) == "string")
        this.token = json.token;
      else
        throw new TypeError('"token" is not of type string'); 
    }
};