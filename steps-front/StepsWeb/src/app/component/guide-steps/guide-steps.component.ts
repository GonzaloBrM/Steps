import { Component, OnInit } from '@angular/core';
import { Guide } from '../../model/guide';
import { GuideService } from '../../service/guide/guide.service';
import { Step } from '../../model/step';
import { FormGroup, FormControl } from '@angular/forms';
import { StepRequest } from '../../model/step-request';

@Component({
  selector: 'app-guide-steps',
  templateUrl: './guide-steps.component.html',
  styleUrls: ['./guide-steps.component.css']
})
export class GuideStepsComponent implements OnInit {

  protected stepForm : FormGroup;

  private guide : Guide;

  private current_step : Step;
  private current_step_index : number;
  
  constructor(private guideService : GuideService) { }

  ngOnInit() {
    this.guide = history.state.data;
    this.current_step_index = -1;
    this.nextStep();

    this.stepForm = new FormGroup({
      text: new FormControl(this.current_step.text),
      imgUrl: new FormControl(this.current_step.imgUrl)
    });
  }

  onSubmit(stepData : StepRequest) {
    // Process checkout data here
    console.warn('Your order has been submitted', stepData);
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

  getCurrentImg() : string{
    return this.current_step.imgUrl;
  }

  setCurrentStep(step : Step){
    this.current_step = step;
    if (step != null){
      this.stepForm = new FormGroup({
        text: new FormControl(this.current_step.text),
        imgUrl: new FormControl(this.current_step.imgUrl)
      });
    }
  }


}
