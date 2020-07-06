import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStep1Component } from './auth-step1.component';

describe('AuthStep1Component', () => {
  let component: AuthStep1Component;
  let fixture: ComponentFixture<AuthStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
