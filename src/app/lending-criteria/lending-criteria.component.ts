import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lending-criteria',
  templateUrl: './lending-criteria.component.html',
  styleUrls: ['./lending-criteria.component.scss']
})
export class LendingCriteriaComponent implements OnInit {
  trades = [
    {'value': "all",
    'name': 'Wszystkie'},
    {'value': "IT",
    'name' : "IT"},
    {'value': "culture",
    'name' : "Kultura"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
