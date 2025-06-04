import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlaceComponent } from './best-place.component';

describe('BestPlaceComponent', () => {
  let component: BestPlaceComponent;
  let fixture: ComponentFixture<BestPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
