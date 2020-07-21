import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateProviderComponent } from './evaluate-provider.component';

describe('EvaluateProviderComponent', () => {
  let component: EvaluateProviderComponent;
  let fixture: ComponentFixture<EvaluateProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
