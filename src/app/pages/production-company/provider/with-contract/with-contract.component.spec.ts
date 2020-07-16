import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithContractComponent } from './with-contract.component';

describe('WithContractComponent', () => {
  let component: WithContractComponent;
  let fixture: ComponentFixture<WithContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
