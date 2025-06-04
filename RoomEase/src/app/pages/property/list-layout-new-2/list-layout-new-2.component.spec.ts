import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayoutNew2Component } from './list-layout-new-2.component';

describe('ListLayoutNew2Component', () => {
  let component: ListLayoutNew2Component;
  let fixture: ComponentFixture<ListLayoutNew2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLayoutNew2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLayoutNew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
