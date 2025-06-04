import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayoutNew3Component } from './list-layout-new-3.component';

describe('ListLayoutNew3Component', () => {
  let component: ListLayoutNew3Component;
  let fixture: ComponentFixture<ListLayoutNew3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLayoutNew3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLayoutNew3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
