export default class AuthReq {
    id: string;
    pass: string;
    token: string;
    valid: boolean;
    constructor(json: {id: string, pass: string, token: string, valid: boolean}) {
      if (typeof(json.id) == "string")
        this.id = json.id;
      else
        throw new TypeError(`"id" is not of type ${typeof(this.id)}`);
      
      if (typeof(json.pass) == "string")
        this.pass = json.pass;
      else
        throw new TypeError(`"pass" is not of type ${typeof(this.pass)}`);
      
      if (typeof(json.token) == "string")
        this.token = json.token;
      else
        throw new TypeError(`"token" is not of type ${typeof(this.token)}`); 
      
      if (typeof(json.valid) == "boolean")
        this.valid = json.valid;
      else 
        throw new TypeError(`"valid" is not of type ${typeof(this.valid)}`); 
    }
};