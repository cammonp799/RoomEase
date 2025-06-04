import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayoutNewComponent } from './list-layout-new.component';

describe('ListLayoutNewComponent', () => {
  let component: ListLayoutNewComponent;
  let fixture: ComponentFixture<ListLayoutNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLayoutNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLayoutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
