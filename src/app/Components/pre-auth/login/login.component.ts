import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm:FormGroup;

  ngOnInit(): void {

    this.loginForm=new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })

  }

  onSubmit(){
    console.log(this.loginForm);
  }

}
