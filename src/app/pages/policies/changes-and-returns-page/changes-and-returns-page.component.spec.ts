import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesAndReturnsPageComponent } from './changes-and-returns-page.component';

describe('ChangesAndReturnsPageComponent', () => {
  let component: ChangesAndReturnsPageComponent;
  let fixture: ComponentFixture<ChangesAndReturnsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangesAndReturnsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesAndReturnsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
