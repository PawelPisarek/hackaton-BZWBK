import { LendingCriteriaComponent } from './lending-criteria/lending-criteria.component';
import { LenderComponent } from './lender/lender.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {BorrowersListComponent} from "./borrowers-list/borrowers-list.component";
import {BorrowersDetailComponent} from "./borrowers-detail/borrowers-detail.component";
import {RatingComponent} from "./rating/rating.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  // { path: 'user/edit/:id', component: UserEditComponent, resolve: { user: UserResolve }},
  { path: 'pozyczkobiorca', component: BorrowerComponent },
  { path: 'pozyczkodawca', component: LenderComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'borrowers-list', component: BorrowersListComponent },
  { path: 'borrowers-list/:id', component: BorrowersDetailComponent },
  { path: 'borrowers-list/:id/rating/:id', component: RatingComponent },
  { path: 'lending-criteria', component: LendingCriteriaComponent },

  { path: '', redirectTo: '/main-page', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule { }
