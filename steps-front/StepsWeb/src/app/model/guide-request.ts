export class GuideRequest {
    name : string;
    description : string;
    id : Number;

    constructor(name: string, description : string,id?: number){
        this.name = name;
        this.description = description;

        if (id){
            this.id = id;
        }
    }

}
