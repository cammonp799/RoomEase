import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfMap2Component } from './half-map-2.component';

describe('HalfMap2Component', () => {
  let component: HalfMap2Component;
  let fixture: ComponentFixture<HalfMap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfMap2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfMap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
