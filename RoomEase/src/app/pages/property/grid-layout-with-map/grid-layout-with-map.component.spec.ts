import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutWithMapComponent } from './grid-layout-with-map.component';

describe('GridLayoutWithMapComponent', () => {
  let component: GridLayoutWithMapComponent;
  let fixture: ComponentFixture<GridLayoutWithMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutWithMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLayoutWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
