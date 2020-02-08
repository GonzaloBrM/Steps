import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/service/guide/guide.service';
import { Guide } from 'src/app/model/guide';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-guides',
  templateUrl: './search-guides.component.html',
  styleUrls: ['./search-guides.component.css']
})
export class SearchGuidesComponent implements OnInit {

  guides : Array<any>;
  
  constructor(private guideService : GuideService, private router : Router) { }

  ngOnInit() {
  }

  onKey(event) {
    const inputValue = event.target.value;
    this.search(inputValue);
  }

  search(value: string){
    this.guideService.getByName(value).subscribe(data => {
      this.guides = data;
    });
  }

  clear(event){
    event.target.value="";
  }

  goToGuide(selectedGuide){
    this.router.navigate(['/viewGuide'], {state: {data: selectedGuide}});
  }

  showResult() : boolean{
    return this.guides != null && this.guides != undefined;
  }

  foundGuides() : boolean{
    return this.guides && this.guides.length != 0;
  }

}
