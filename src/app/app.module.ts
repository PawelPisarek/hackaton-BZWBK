import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { LenderComponent } from './lender/lender.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FirstScreenComponent } from './borrower/first-screen/first-screen.component';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    LenderComponent,
    FirstScreenComponent,


    BorrowersListComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
