import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowersDetailComponent } from './borrowers-detail.component';

describe('BorrowersDetailComponent', () => {
  let component: BorrowersDetailComponent;
  let fixture: ComponentFixture<BorrowersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
