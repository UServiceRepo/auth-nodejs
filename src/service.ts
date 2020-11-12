import express from "express";
import AuthReq from "./models/AuthReq";
const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(express.json());



app.get("/authorization", (req, res) => {
  let body: AuthReq;
  
  try {
    body = new AuthReq(req.body);
  } catch (error) {
    console.log(`Invalid body ${error.message}`);
    res.status(406).send(`Invalid body ${error.message}`);
    return 406;
  }

  if (databaseAuthInteraction(body)) {
    res.send(JSON.stringify({token:"tinkywinky"}));
  } else {
    res.status(405).send("Authorization failed invalid id or pass");
  }
});

app.get("*", (req, res) => {
  res.status(500).send("Unimplemented Feature");
});

app.listen(port, () => {
  console.log(`server started. Listening at ${port}`);
});

function databaseAuthInteraction(authReq: AuthReq): boolean {
  return authReq.id === "very" && authReq.pass === "cool"
}
