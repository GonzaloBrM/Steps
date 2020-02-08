import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/model/guide';
import { Step } from '../../model/step';

@Component({
  selector: 'app-view-guide',
  templateUrl: './view-guide.component.html',
  styleUrls: ['./view-guide.component.css']
})
export class ViewGuideComponent implements OnInit {

  private guide : Guide;
  private current_step : Step;
  private current_step_index : number;

  private textGuide : Guide;

  constructor() { }

  ngOnInit() {
    this.guide = Guide.getTestGuide();
    this.current_step_index = -1;
    this.nextStep();
  }


  nextStep(){
    this.current_step_index ++;
    this.goToStep(this.current_step_index);
  }

  goToStep(position : number){
    if (this.guide.steps == null || this.guide.steps.length <= position) 
      this.setCurrentStep(null);
    else{
      this.setCurrentStep(this.guide.steps[position]);
    }
  }

  getImg() : string{
    return this.current_step.imgUrl;
  }

  getText() : string{
    return this.current_step.text;
  }

  setCurrentStep(step : Step){
    this.current_step = step;
  }

}
