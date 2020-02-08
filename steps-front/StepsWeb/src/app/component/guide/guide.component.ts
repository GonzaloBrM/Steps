import { Component, OnInit } from '@angular/core';
import { Guide } from '../../model/guide';
import { GuideService } from '../../service/guide/guide.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {


  private guide : Guide;
  
  constructor(private guideService : GuideService, private router: Router) { }

  ngOnInit() {
    this.guide = history.state.data;
    console.log(this.guide);
  }


  removeGuide(){
    this.guideService.remove(this.guide.id);
  }

  goToEditGuide(){
    this.router.navigate(['/editGuide'], {state: {data: this.guide}});
  }

  goToGuideSteps(){
    this.router.navigate(['/guideSteps'],{state: {data:this.guide}});
  }


}
