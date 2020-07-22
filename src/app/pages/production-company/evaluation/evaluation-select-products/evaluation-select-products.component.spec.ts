import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSelectProductsComponent } from './evaluation-select-products.component';

describe('EvaluationSelectProductsComponent', () => {
  let component: EvaluationSelectProductsComponent;
  let fixture: ComponentFixture<EvaluationSelectProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationSelectProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationSelectProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
