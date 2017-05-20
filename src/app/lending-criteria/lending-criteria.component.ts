import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lending-criteria',
  templateUrl: './lending-criteria.component.html',
  styleUrls: ['./lending-criteria.component.scss']
})
export class LendingCriteriaComponent implements OnInit {
  foods = ["aaaa", "bbbbb"]
  constructor() { }

  ngOnInit() {
  }

}
