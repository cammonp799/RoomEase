import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlaceComponent } from './explore-place.component';

describe('ExplorePlaceComponent', () => {
  let component: ExplorePlaceComponent;
  let fixture: ComponentFixture<ExplorePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
