import { Component, OnInit, ViewChild } from '@angular/core';
import {GuideService} from '../../service/guide/guide.service';
import { GuideRequest } from '../../model/guide-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {

  guides : Array<any>;

  constructor(private guideService : GuideService, private router: Router) { }

  ngOnInit() {
    this.getAllGuides();
  }

  getAllGuides(){
    this.guideService.getAll().subscribe(data => {
      this.guides = data;
    })
  }

  addGuide(name : string, description : string){
    let request = new GuideRequest(name,description);
    this.guideService.add(request);
    this.getAllGuides();
  }

  goToGuide(selectedGuide){
    this.router.navigate(['/guide'], {state: {data: selectedGuide}});
  }


}
