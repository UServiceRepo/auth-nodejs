var express = require('express')
var router = express.Router()

var pathList = [
  { type : "get", path : "/message", target : "https://google.ca"},
  { type : "get", path : "/another", target : "https://senecacollege.ca"},
]

for ( let x in pathList ){
  if (pathList[x].type === "get"){
    router.get(path.path, (req, res) => {
        res.send("Redirect to " + path.target)
      }
    )
  }
  else if (pathList[x].type === "post") {
    router.post(path.path, (req, res) => {
        res.send("Redirect to " + path.target)
      }
    )
  }
  else if (pathList[x].type === "put") {
    router.put(path.path, (req, res) => {
        res.send("Redirect to " + path.target)
      }
    )
  }
  else if (pathList[x].type === "delete") {
    router.delete(path.path, (req, res) => {
        res.send("Redirect to " + path.target)
      }
    )
  }
}

