export class TracksComponentModel {
  path: string;
  name: string;
  description: string;




  public constructor(path:string, name:string, description: string){
    this.path = path;
    this.name = name;
    this.description = description;
  }

}
