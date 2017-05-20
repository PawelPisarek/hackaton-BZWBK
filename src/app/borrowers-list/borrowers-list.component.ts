import { Component, OnInit } from '@angular/core';
import {USERS} from "./exampleData/data";

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.scss']
})
export class BorrowersListComponent implements OnInit {

  users = USERS;
  constructor() { }

  ngOnInit() {
  }

}
