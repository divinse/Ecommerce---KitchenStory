import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpgComponent } from './cartpg.component';

describe('CartpgComponent', () => {
  let component: CartpgComponent;
  let fixture: ComponentFixture<CartpgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartpgComponent]
    });
    fixture = TestBed.createComponent(CartpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
