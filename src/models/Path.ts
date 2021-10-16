export default class Path {
    type: string = "";
    routePath: string = "";
    routeTarget: string = "";
    constructor( type: string, path: string, target:string ){
        this.type = type;
        this.routePath = path;
        this.routeTarget = target;
    }
}
