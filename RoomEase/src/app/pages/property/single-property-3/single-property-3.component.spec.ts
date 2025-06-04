import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProperty3Component } from './single-property-3.component';

describe('SingleProperty3Component', () => {
  let component: SingleProperty3Component;
  let fixture: ComponentFixture<SingleProperty3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProperty3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProperty3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
