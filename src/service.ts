import express from "express";
const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(express.json());

class auth {
  id: string;
  pass: string;
  token: string;
  constructor(json: {id: string, pass: string, token: string}) {
    if (typeof(json.id) == "string")
      this.id = json.id;
    else
      throw new Error("seg fault core dumped");
    if (typeof(json.pass) == "string")
      this.pass = json.pass;
    else
      throw new Error("seg fault core dumped");
    if (typeof(json.token) == "string")
      this.token = json.token;
    else
      throw new Error("seg fault core dumped");
      
  }
};

app.get("/authorization", (req, res) => {
  const body = new auth(req.body);
  console.log(body);
  res.send("moicrosorev!!")
});

app.get("*", (req, res) => {
  res.status(500).send("Unimplemented Feature");
});

app.listen(port, () => {
  console.log(`server started. Listening at ${port}`);
});
