export class StepRequest {
    private position: number;
    private guide_id : number;
    private text: string;
    private imgUrl : string;

    constructor(position : number, guide_id: number, text: string, imgUrl: string){
        this.position = position;
        this.guide_id = guide_id;
        this.text = text;
        this.imgUrl = imgUrl;
    }
}
