import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProductorsComponent } from './auth-productors.component';

describe('AuthProductorsComponent', () => {
  let component: AuthProductorsComponent;
  let fixture: ComponentFixture<AuthProductorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthProductorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProductorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
