import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email,Validators.maxLength(225)]),
      password: new FormControl('',[
        Validators.minLength(8),
        Validators.maxLength(24),
        this.oneCharacters as any,
        this.alphanumerics as any
      ])
    })
  }
  oneCharacters(form: FormGroup): ValidationErrors | null{
    const oneCharacter = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/;
    if (oneCharacter.test(form.value)) {
      return null;
    } else {
      return { oneCharacters: { valid: true } };
    }
  }

  alphanumerics(form: FormGroup): ValidationErrors | null{
    const alphanumeric = /^[0-9a-zA-Z]*$/;
    if (alphanumeric.test(form.value)) {
      return null;
    } else {
      return { alphanumeric: { valid: true } };
    }
  }


  disabled(): boolean{
    if(this.loginForm.invalid === true){
      return true;
    }
    return false;
  }

}
