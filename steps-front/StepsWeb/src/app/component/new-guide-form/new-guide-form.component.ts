import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GuideRequest } from '../../model/guide-request';
import { GuideService } from '../../service/guide/guide.service';

@Component({
  selector: 'app-new-guide-form',
  templateUrl: './new-guide-form.component.html',
  styleUrls: ['./new-guide-form.component.css']
})
export class NewGuideFormComponent implements OnInit {

  protected guideForm : FormGroup;

  constructor(protected guideService : GuideService) {

  }
  
  onSubmit(guideData : GuideRequest) {
    // Process checkout data here
    console.warn('Your order has been submitted', guideData);
    this.guideService.add(guideData);
  }

  ngOnInit(){
    this.guideForm = new FormGroup({
      id : new FormControl(''),
      name: new FormControl(''),
      description: new FormControl('')
    });
  }

}
