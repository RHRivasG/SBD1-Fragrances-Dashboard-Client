import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutContractComponent } from './without-contract.component';

describe('WithoutContractComponent', () => {
  let component: WithoutContractComponent;
  let fixture: ComponentFixture<WithoutContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
