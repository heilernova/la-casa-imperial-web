import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerShoppingCardComponent } from './drawer-shopping-card.component';

describe('DrawerShoppingCardComponent', () => {
  let component: DrawerShoppingCardComponent;
  let fixture: ComponentFixture<DrawerShoppingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerShoppingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
