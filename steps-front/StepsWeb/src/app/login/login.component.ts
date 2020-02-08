import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserRequest } from '../model/user-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected userForm : FormGroup;

  constructor(protected userService : UserService) {

  }
  
  onSubmit(userData : UserRequest) {
    // Process checkout data here
    console.warn('Your order has been submitted', userData);
    this.userService.login(userData);
  }

  ngOnInit(){
    this.userForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });
  }

}
