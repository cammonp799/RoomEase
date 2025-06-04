import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayoutFullComponent } from './list-layout-full.component';

describe('ListLayoutFullComponent', () => {
  let component: ListLayoutFullComponent;
  let fixture: ComponentFixture<ListLayoutFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLayoutFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLayoutFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
