import express, { Request, Response } from "express";
import Path, { PathType } from "./models/Path";

export const redirectRouter = express.Router();

let pathList: Path[] = [
  new Path("get", "/message", "https://google.ca"),
  new Path("get", "/another", "https://senecacollege.ca"),
];

function redirect(req: Request, res: Response, pathObj: Path) {
  if (pathObj.routeTarget === "/authentication")
    throw new URIError("Invalid Target Path.");
  res.redirect(pathObj.routeTarget);
}

for (let x in pathList) {
  if (pathList[x].type === PathType.get) {
    redirectRouter.get(
      pathList[x].routePath,
      async (req: Request, res: Response) => {
        redirect(req, res, pathList[x]);
      }
    );
  } else if (pathList[x].type === PathType.post) {
    redirectRouter.post(
      pathList[x].routePath,
      async (req: Request, res: Response) => {
        redirect(req, res, pathList[x]);
      }
    );
  } else if (pathList[x].type === PathType.put) {
    redirectRouter.put(
      pathList[x].routePath,
      async (req: Request, res: Response) => {
        redirect(req, res, pathList[x]);
      }
    );
  } else if (pathList[x].type === PathType.delete) {
    redirectRouter.delete(
      pathList[x].routePath,
      async (req: Request, res: Response) => {
        redirect(req, res, pathList[x]);
      }
    );
  }
}
