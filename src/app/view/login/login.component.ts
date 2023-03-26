import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authenticationService :AuthenticationService, private router: Router) { }

  ngOnInit(): void {}

  onSubmitForm(){
    console.log(this.loginForm.value);
    const user = this.authenticationService.authenticate(this.loginForm.value);
    if(user && user.name=='user'){
      this.router.navigateByUrl("products");
    }
  }

}
