import { Component, OnInit } from '@angular/core';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    navigateToUrl('auth/users/fruits');
  }

}
