import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user'
import { Userservice } from 'src/app/_service/user.service';

@Component({
  selector: 'app-mypage-top',
  templateUrl: './mypage-top.component.html',
  styleUrls: ['./mypage-top.component.scss']
})
export class MypageTopComponent implements OnInit {
  public loading: boolean = false;
  public users: User[] = [];

  constructor(
    private usersrvice: Userservice,
  ) {}

  ngOnInit(): void {
    //serviceからUser情報を取得
    this.loading = true;
    this.usersrvice.getAll().pip(first()).subscribe((users: User[]) => {
      this.loading = false;
      this.users = users;
    });
  }

}
