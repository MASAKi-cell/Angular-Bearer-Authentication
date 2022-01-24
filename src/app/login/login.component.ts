import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ValidationErrors, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { alphanumerics } from 'src/app/common/alphanumerics';
import { oneCharacter } from 'src/app/common/oneCharacters';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(225)]],
      password: ['', [Validators.minLength(8), Validators.maxLength(24), oneCharacter.format, alphanumerics.format]]
    })

    // 既にログイン済みの場合は、mypage-topに移動する。
    if(this.service.currentUserValue){
      this.router.navigate(['/'])
    }
  }

  //ログインフォームコントロールにアクセスする。
  get form(){
    return this.loginForm.controls;
  }

  submit(): any{
    if(this.loginForm.invalid){
      return false;
    }

  }
  
  /**
   * リセット機能
   * @param form 
   */
  reset(form: any): void{
    form.resetForm();
  }

  /**
   * バリデーションエラーが効いている間はsubmitボタンをクリックできない。
   * @param error 
   * @returns boolean
   */
  disabled(): boolean{
    if(this.loginForm.invalid === true){
      return true;
    }
    return false;
  }

  /**
   * Usernameのエラーハンドリング
   * @param errors 
   * @returns { ValidationErrors | null }
   */
  userErrorMessage(errors: ValidationErrors | null): any{
    if(errors?.required){
      return 'ユーザー名の入力は必須です。';
    } else if(errors?.maxLength){
      return `${errors?.maxLength.requiredLength}以内で入力してください。`;
    }
  } 

  /**
   * passwordのエラーハンドリング
   * @param errors 
   * @returns { ValidationErrors | null }
   */
  passwordErrorMessage(errors: ValidationErrors | null): any{
    if(errors?.required){
      return 'パスワードの入力は必須です';
    } else if(errors?.minLength){
      return `${errors.min.min}文字以上で入力してください。`
    } else if(errors?.maxLength){
      return `${errors?.maxlength.requiredLength}文字以内で入力してください。`
    } else if(errors?.oneCharacters){
      return '半角で入力してください。';
    } else if(errors?.alphanumerics){
      return '半角英数字で入力してください。';
    }
  }

}
