import express from "express";
const app = express();
const port = 8080;

app.get("*", (req, res) => {
  res.status(500).send("Unimplemented Feature");
});

app.listen(port, () => {
  console.log(`server started. Listening at ${port}`);
});
