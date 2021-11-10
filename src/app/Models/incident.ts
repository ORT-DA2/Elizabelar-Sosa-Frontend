export class Incident{
    constructor(public id:string, public name:string,public domain:string, 
        public description:string,public version:string,public status:string, public projectId:string){
    }
}