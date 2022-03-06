import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { alphanumerics } from 'src/app/common/alphanumerics';
import { oneCharacter } from 'src/app/common/oneCharacters';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public error: string = '';

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(225)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24), oneCharacter.format, alphanumerics.format],],
    });

    // 既にログイン済みの場合は、mypage-topに移動する。
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['mypagetop']);
    }
  }

  //ログインフォームコントロールにアクセスする。
  get form() {
    return this.loginForm?.controls;
  }

  submit() {}

  /**
   * ログイン成功時はreturnUrlに画面遷移する。失敗した時はエラー表示される。
   * @params なし
   * @returns
   */
  onSubmit(): any {
    this.submitted = true;
    if (this.loginForm?.invalid) {
      return false;
    }

    this.loading = true;
    this.authenticationService
      .login(this.form?.username.value, this.form?.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['mypagetop']);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }

  /**
   * バリデーションエラーが効いている間はsubmitボタンをクリックできない。
   * @param error
   * @returns boolean
   */
  disabled(): boolean {
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
  userErrorMessage(errors: any): any {
    if (errors?.required) {
      return 'ユーザー名の入力は必須です。';
    } else if (errors?.maxLength) {
      return `${errors?.maxLength.requiredLength}以内で入力してください。`;
    }
  }

  /**
   * passwordのエラーハンドリング
   * @param errors
   * @returns { ValidationErrors | null }
   */
  passwordErrorMessage(errors: any): any {
    if (errors?.required) {
      return 'パスワードの入力は必須です';
    } else if (errors?.maxlength) {
      return `${errors.maxlength.requiredLength}文字以内で入力してください。`;
    } else if (errors?.minlength) {
      return `${errors?.minlength.requiredLength}文字以上で入力してください。`;
    } else if (errors?.oneCharacters) {
      return '半角英数字を1文字以上含んで入力してください。';
    } else if (errors?.alphanumerics) {
      return '半角英数字で入力してください。';
    }
  }
}
