import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
   msg='';

  constructor(private _service:RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
loginUser(){
  this._service.loginUserFromRemote(this.user).subscribe(
    data =>{

     console.log("response recieved");
     this._router.navigate(['/loginsuccess'])
     
    },
    error => {
      console.log("exception occured");
     this.msg="bad  credentials, Please enter valid emailId and Password"

    }
  )

}
gotoregistration(){
  this._router.navigate(['/registration'])}
}
