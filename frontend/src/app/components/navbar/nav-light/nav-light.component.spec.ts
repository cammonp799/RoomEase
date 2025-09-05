import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLightComponent } from './nav-light.component';

describe('NavLightComponent', () => {
  let component: NavLightComponent;
  let fixture: ComponentFixture<NavLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
