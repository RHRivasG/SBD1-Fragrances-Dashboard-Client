import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RusuerDialogComponent } from './rusuer-dialog.component';

describe('RusuerDialogComponent', () => {
  let component: RusuerDialogComponent;
  let fixture: ComponentFixture<RusuerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RusuerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RusuerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
