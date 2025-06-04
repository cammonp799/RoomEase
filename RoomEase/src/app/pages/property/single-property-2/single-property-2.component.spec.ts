import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProperty2Component } from './single-property-2.component';

describe('SingleProperty2Component', () => {
  let component: SingleProperty2Component;
  let fixture: ComponentFixture<SingleProperty2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProperty2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProperty2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
