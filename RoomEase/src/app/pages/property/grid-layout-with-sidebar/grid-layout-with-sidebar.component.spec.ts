import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutWithSidebarComponent } from './grid-layout-with-sidebar.component';

describe('GridLayoutWithSidebarComponent', () => {
  let component: GridLayoutWithSidebarComponent;
  let fixture: ComponentFixture<GridLayoutWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutWithSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLayoutWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
