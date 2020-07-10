import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutContractListComponent } from './without-contract-list.component';

describe('WithoutContractListComponent', () => {
  let component: WithoutContractListComponent;
  let fixture: ComponentFixture<WithoutContractListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutContractListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
