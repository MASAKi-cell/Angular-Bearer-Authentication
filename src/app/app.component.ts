import { Component } from '@angular/core';
import { User } from './_models/user';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  public currentUser?: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
