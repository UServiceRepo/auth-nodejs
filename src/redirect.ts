import express, { Request, Response } from "express";
import Path, { PathType } from "./models/Path";
import fs from 'fs';
import yaml from 'js-yaml';

export const redirectRouter = express.Router();

const PATH_LIST_FILE = './pathList.yaml'

function createPathList(path: string): Path[] {
  let pathList: Path[] = [] 

  try {
      const paths = yaml.load(fs.readFileSync(path, 'utf8')) as Path[];
      const typeKeys = Object.keys(PathType).filter(x => !(parseInt(x) >= 0));
      pathList = paths.map(path => {
        if(!typeKeys.includes(String(path.type))) {
          throw new Error(`Invalid path type -> ${path.type}`)
        }

        const { type, routePath, routeTarget } = path
        return new Path(type as unknown as keyof typeof PathType, routePath, routeTarget)
      })
  } catch (e) {
      console.log('It was not possible to load the path list. Check the yaml file\n', e);
  }

  return pathList
}

const pathList: Path[] = createPathList(PATH_LIST_FILE)

function redirect(req: Request, res: Response, pathObj: Path) {

  if (pathObj.routeTarget === "/authentication")
    throw new URIError("Invalid Target Path.");

  let body: AuthReq;
  let dbAccess: DataAccess;
  let dbType: keyof typeof DaoType = "dummy";
  let connStr: string = "";

  dbAccess = new DataAccess(dbType,connStr);
  body = new AuthReq(req.body);

  if (!dbAccess.db.authenticate(body))
    throw new Error("Authentication Failed.");

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
