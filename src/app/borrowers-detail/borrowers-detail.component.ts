import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {User, USERS} from "../borrowers-list/exampleData/data";

@Component({
  selector: 'app-borrowers-detail',
  templateUrl: './borrowers-detail.component.html',
  styleUrls: ['./borrowers-detail.component.scss']
})
export class BorrowersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  user: User;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.user = USERS.filter(user => {
        return user.id == data.id;
      })[0];
    })
  }

}
