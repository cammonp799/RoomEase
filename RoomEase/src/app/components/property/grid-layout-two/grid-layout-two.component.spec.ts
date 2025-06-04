import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutTwoComponent } from './grid-layout-two.component';

describe('GridLayoutTwoComponent', () => {
  let component: GridLayoutTwoComponent;
  let fixture: ComponentFixture<GridLayoutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLayoutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
