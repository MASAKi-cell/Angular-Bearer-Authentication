import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, ValidationErrors } from '@angular/forms';

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
      username: new FormControl('',[Validators.required,Validators.maxLength(225)]),
      password: new FormControl('',[Validators.minLength(8),Validators.maxLength(24),this.oneCharacters as any,this.alphanumerics as any])
    })
  }
  //カスタムバリデータ
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

  userErrorMessage(errors: ValidationErrors): any{
    if(errors.required){
      return 'ユーザー名の入力は必須です。';
    } else if(errors.maxLength){
      return `${errors.maxLength.requiredLength}以内で入力してください。`;
    }
  } 

  passwordErrorMessage(errors: ValidationErrors): any{
    if(errors.required){
      return 'パスワードの入力は必須です';
    } else if(errors.minLength){
      return `${errors.min.min}文字以上で入力してください。`
    } else if(errors.maxLength){
      return `${errors.maxlength.requiredLength}文字以内で入力してください。`
    } else if(errors.oneCharacters){
      return '半角で入力してください。';
    } else if(errors.alphanumerics){
      return '半角英数字で入力してください。';
    }
  }

}
