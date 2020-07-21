import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCriteriaManagementComponent } from './evaluation-criteria-management.component';

describe('EvaluationCriteriaManagementComponent', () => {
  let component: EvaluationCriteriaManagementComponent;
  let fixture: ComponentFixture<EvaluationCriteriaManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationCriteriaManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationCriteriaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
