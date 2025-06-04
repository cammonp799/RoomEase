import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySidebarTwoComponent } from './property-sidebar-two.component';

describe('PropertySidebarTwoComponent', () => {
  let component: PropertySidebarTwoComponent;
  let fixture: ComponentFixture<PropertySidebarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertySidebarTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySidebarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
