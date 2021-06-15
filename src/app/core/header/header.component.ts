import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  user: User;

  ngOnInit() {
  }

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
