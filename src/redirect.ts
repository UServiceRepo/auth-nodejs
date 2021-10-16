import express, { Request, Response } from "express";
import Path from './models/Path';

export const redirectRouter = express.Router();

let pathList: Path[] = [
  { type: "get", routePath: "/message", routeTarget: "https://google.ca"},
  { type: "get", routePath: "/another", routeTarget: "https://senecacollege.ca"},
];

function redirect (req: Request, res: Response, pathObj: Path) {
  res.redirect(pathObj.routeTarget);
}

for ( let x in pathList ){
  if (pathList[x].type === "get"){
    redirectRouter.get(pathList[x].routePath, async (req: Request, res: Response) => {redirect(req, res, pathList[x])});
  }
  else if (pathList[x].type === "post") {
    redirectRouter.post(pathList[x].routePath, async (req: Request, res: Response) => {redirect(req, res, pathList[x])});
  }
  else if (pathList[x].type === "put") {
    redirectRouter.put(pathList[x].routePath, async (req: Request, res: Response) => { redirect(req, res, pathList[x])});
  }
  else if (pathList[x].type === "delete") {
    redirectRouter.delete(pathList[x].routePath, async (req: Request, res: Response) => { redirect(req, res, pathList[x])});
  }
}
