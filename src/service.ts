import express from "express";
import AuthReq from "./models/AuthReq";
import { redirectRouter } from "./redirect";
import DataAccess from "./dbAccess";

const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(express.json());

app.get("/authorization", (req, res) => {
  let body: AuthReq;
  let dbAccess: DataAccess;
  let db: string = "dummy";

  try {
    dbAccess = new DataAccess(db);
    body = new AuthReq(req.body);
  } catch (error) {
    console.log(`Invalid body ${error.message}`);
    res.status(406).send(`Invalid body ${error.message}`);
    return 406;
  }

  if (dbAccess.db.authenticate(body)) {
    res.send(JSON.stringify({ token: body.token }));
  } else {
    res.status(405).send("Authorization failed invalid id or pass");
  }
});

app.use("/", redirectRouter);

app.get("*", (req, res) => {
  res.status(500).send("Unimplemented Feature");
});

app.listen(port, () => {
  console.log(`server started. Listening at ${port}`);
});
