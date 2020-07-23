import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateProviderFormulaComponent } from './evaluate-provider-formula.component';

describe('EvaluateProviderFormulaComponent', () => {
  let component: EvaluateProviderFormulaComponent;
  let fixture: ComponentFixture<EvaluateProviderFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateProviderFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateProviderFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
