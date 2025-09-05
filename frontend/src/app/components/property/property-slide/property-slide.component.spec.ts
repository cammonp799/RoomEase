import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySlideComponent } from './property-slide.component';

describe('PropertySlideComponent', () => {
  let component: PropertySlideComponent;
  let fixture: ComponentFixture<PropertySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertySlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
