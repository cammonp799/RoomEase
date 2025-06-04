import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProperty4Component } from './single-property-4.component';

describe('SingleProperty4Component', () => {
  let component: SingleProperty4Component;
  let fixture: ComponentFixture<SingleProperty4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProperty4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProperty4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
