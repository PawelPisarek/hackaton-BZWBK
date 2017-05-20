import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingCriteriaComponent } from './lending-criteria.component';

describe('LendingCriteriaComponent', () => {
  let component: LendingCriteriaComponent;
  let fixture: ComponentFixture<LendingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
