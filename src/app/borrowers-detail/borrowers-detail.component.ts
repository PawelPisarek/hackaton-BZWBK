import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {User, USERS} from "../borrowers-list/exampleData/data";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-borrowers-detail',
  templateUrl: './borrowers-detail.component.html',
  styleUrls: ['./borrowers-detail.component.scss']
})
export class BorrowersDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.user = USERS.filter(user => {
        return user.id === data.id;
      })[0];
    });
  }

}
