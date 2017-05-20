import { Component, OnInit } from '@angular/core';
import {User, USERS} from "../borrowers-list/exampleData/data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

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
