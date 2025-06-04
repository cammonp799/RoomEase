import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySidebarComponent } from './property-sidebar.component';

describe('PropertySidebarComponent', () => {
  let component: PropertySidebarComponent;
  let fixture: ComponentFixture<PropertySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertySidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
