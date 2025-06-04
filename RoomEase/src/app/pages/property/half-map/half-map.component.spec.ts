import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfMapComponent } from './half-map.component';

describe('HalfMapComponent', () => {
  let component: HalfMapComponent;
  let fixture: ComponentFixture<HalfMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
