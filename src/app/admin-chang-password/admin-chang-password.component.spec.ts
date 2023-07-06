import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangPasswordComponent } from './admin-chang-password.component';

describe('AdminChangPasswordComponent', () => {
  let component: AdminChangPasswordComponent;
  let fixture: ComponentFixture<AdminChangPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminChangPasswordComponent]
    });
    fixture = TestBed.createComponent(AdminChangPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
