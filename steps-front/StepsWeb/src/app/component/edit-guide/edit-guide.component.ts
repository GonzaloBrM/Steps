import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewGuideFormComponent } from '../new-guide-form/new-guide-form.component';
import { GuideRequest } from '../../model/guide-request';
import { Guide } from '../../model/guide';

@Component({
  selector: 'app-edit-guide',
  templateUrl: './edit-guide.component.html',
  styleUrls: ['./edit-guide.component.css']
})
export class EditGuideComponent extends NewGuideFormComponent{

  private default_guide : Guide;
  
  ngOnInit() {
    this.default_guide = history.state.data;
    this.guideForm = new FormGroup({
      id : new FormControl(this.default_guide.id),
      name: new FormControl(this.default_guide.name),
      description: new FormControl( this.default_guide.description)
    });
    console.log(this.guideForm);
  }

  onSubmit(guideData : GuideRequest) {
    // Process checkout data here
    console.warn('Your order has been submitted', guideData);
    this.guideService.update(guideData);
  }

}
