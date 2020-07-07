import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthTypeComponent } from './auth-type.component';

describe('AuthTypeComponent', () => {
  let component: AuthTypeComponent;
  let fixture: ComponentFixture<AuthTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
