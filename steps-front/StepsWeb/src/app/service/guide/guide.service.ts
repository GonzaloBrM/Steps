import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuideRequest} from '../../model/guide-request';
import { GlobalService } from '../global/global.service';

@Injectable({providedIn: 'root'})
export class GuideService {

  private path : string = 'guide/';
  private getAllUrl : string;
  private addUrl : string;
  private removeUrl : string;
  private updateUrl : string;
  private getByNameUrl : string;


  constructor(private globalService : GlobalService) {
    this.getAllUrl = this.path + 'all';
    this.addUrl = this.path + 'save';
    this.removeUrl = this.path + 'remove';
    this.updateUrl = this.path + 'update';
    this.getByNameUrl = this.path + 'name';
   }

  getAll(): Observable<any>{
    return this.globalService.get(this.getAllUrl);
  }

  add(guideRequest : GuideRequest){
    this.globalService.post(GuideRequest,this.addUrl,guideRequest).subscribe;
  }

  update(guideRequest : GuideRequest){
    this.globalService.post(GuideRequest,this.updateUrl,guideRequest).subscribe;
  }
  
  remove(id){
    let params = new HttpParams().set('id',id);
    this.globalService.get(this.removeUrl,params).subscribe();
  }


  getByName(name: string) : Observable<any>{
    let params = new HttpParams().set('name',name);
    return this.globalService.get(this.getByNameUrl,params);
  }


}
