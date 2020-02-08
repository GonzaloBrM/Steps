import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {GuideService} from '../../service/guide/guide.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  guides : Array<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, 
              private guideService: GuideService,
              private router : Router) {}

  ngOnInit() {

  }
  goToNewGuide(){
    this.router.navigate(['/newGuide']);
  }

  goToMyGuides(){
    this.router.navigate(['/myGuides']);
  }

  goToSearchGuides(){
    this.router.navigate(['/searchGuides']);
  }


  goToHome(){
    this.router.navigate(['/']);
  }

  goToGuide(selectedGuide){
    this.router.navigate(['/viewGuide'], {state: {data: selectedGuide}});
  }
  
}
