export enum PathType {
  get,
  post,
  put,
  delete,
}

export default class Path {
  type: PathType;
  routePath: string;
  routeTarget: string;
  constructor(type: keyof typeof PathType, path: string, target: string) {
    this.type = PathType[type];
    this.routePath = path;
    this.routeTarget = target;
  }
}
