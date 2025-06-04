import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOneComponent } from './map-one.component';

describe('MapOneComponent', () => {
  let component: MapOneComponent;
  let fixture: ComponentFixture<MapOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
