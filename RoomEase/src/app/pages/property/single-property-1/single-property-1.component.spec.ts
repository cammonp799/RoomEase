import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProperty1Component } from './single-property-1.component';

describe('SingleProperty1Component', () => {
  let component: SingleProperty1Component;
  let fixture: ComponentFixture<SingleProperty1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProperty1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProperty1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
