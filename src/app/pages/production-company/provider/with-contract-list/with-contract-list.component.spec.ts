import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithContractListComponent } from './with-contract-list.component';

describe('WithContractListComponent', () => {
  let component: WithContractListComponent;
  let fixture: ComponentFixture<WithContractListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithContractListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
