import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingsComponent } from './pricings.component';

describe('PricingsComponent', () => {
  let component: PricingsComponent;
  let fixture: ComponentFixture<PricingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
