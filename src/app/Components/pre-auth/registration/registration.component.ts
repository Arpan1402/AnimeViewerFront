import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //initializing Form in ts file
  regForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  //Form description with validators
  private initForm(){
    this.regForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'confirmPassword':new FormControl(null,[Validators.required])
    },
    {validators:this.passwordConfirming});

    if(this.regForm.errors){

    }
  }

  //function for submission of the form
  onSubmit(){
    if(this.regForm.errors){
      prompt("password dont match");
      return console.log(this.regForm.errors);
    }
    console.log(this.regForm);
  }


  //password vs confirm passsword function
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  }


}

