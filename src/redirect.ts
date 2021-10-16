import express from "express";

var router = express.Router();

var pathList = [
  { type : "get", path : "/message", target : "https://google.ca"},
  { type : "get", path : "/another", target : "https://senecacollege.ca"},
];

for ( let x in pathList ){
  if (pathList[x].type === "get"){
    router.get(pathList[x].path, (req, res) => {
        res.send("Redirect to " + pathList[x].target);
    });
  }
  else if (pathList[x].type === "post") {
    router.post(pathList[x].path, (req, res) => {
        res.send("Redirect to " + pathList[x].target);
    });
  }
  else if (pathList[x].type === "put") {
    router.put(pathList[x].path, (req, res) => {
        res.send("Redirect to " + pathList[x].target);
    });
  }
  else if (pathList[x].type === "delete") {
    router.delete(pathList[x].path, (req, res) => {
        res.send("Redirect to " + pathList[x].target);
    });
  }
}

module.exports = router;
