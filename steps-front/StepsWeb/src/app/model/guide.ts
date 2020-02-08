import { Step } from './step';

export class Guide {

    public id : Number;
    public name : string;
    public description : string;
    public steps : Array<Step>;

    static getTestGuide(): Guide{
        let guide = new Guide();
        guide.name = "How to create a guide";
        guide.description = "This guide's purpose is to teach of to create a guide";
        guide.steps = new Array<Step>();
        
        let step = new Step();
        step.text = "In the top bar there are 4 buttons. The first one shows you your guides, the second one lets you create a new one, the third one brings you back here and the last one lets you search for guides";
        step.imgUrl = "../assets/images/1.png"
        guide.steps.push(step)

        step = new Step();
        step.text = "After click on the add(+) button you can set the name and description of your new guide. When you are done, hit Save";
        step.imgUrl = "../assets/images/2.png"
        guide.steps.push(step)

        step = new Step();
        step.text = "After saving you guide you can manage it from the guide list";
        step.imgUrl = "../assets/images/3.png"
        guide.steps.push(step)

        return guide;
    }
}
