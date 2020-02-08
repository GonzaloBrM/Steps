import { Injectable } from '@angular/core';
import {User} from '../../model/user';
import {HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from 'src/app/model/user-request';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser : User;
  private logged : Boolean;

  private path : string = 'user/';
  private loginUrl : string;
  private registerUrl : string;


  constructor(private globalService : GlobalService) { 
    this.logged = false;
    this.loginUrl = this.path + 'login';
    this.registerUrl = this.path + 'register';
  }

  public login(request: UserRequest){
    

    if (this.logged){
      return;
    }

    this.globalService.post(User,this.loginUrl,request).subscribe(
      data =>{
        this.currentUser = data;
      }
    );

    if (this.currentUser){
      this.logged = true;
    }
    
  } 


  public register(userName: string, password: string){
    
    if (this.logged){
      return;
    }

    let request = new UserRequest(userName,password);

    this.globalService.post(User,this.registerUrl,request).subscribe(
      data =>{
        this.currentUser = data;
      }
    );


    if (this.currentUser){
      this.logged = true;
    }
  } 

  public getCurrentUserId() : Number{
    if (!this.logged){
      return null;
    }
    return this.currentUser.id;
  }


  public getCurrentUserName() : string{
    if (!this.logged){
      return null;
    }
    return this.currentUser.userName;
  }
  
}
