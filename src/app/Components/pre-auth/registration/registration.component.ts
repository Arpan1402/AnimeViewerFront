import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.regForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'confirmPassword':new FormControl(null,[Validators.required,this.cPassValidator.bind(this)])
    });

  }

  onSubmit(){
    console.log(this.regForm);
  }

  cPassValidator(control:FormControl):{[s:string]:boolean}{
    let pass=this.regForm.value;
    if(control.value!==pass.password){
      return{"PassowrdMatchFailed":true}
    }
  }

}

