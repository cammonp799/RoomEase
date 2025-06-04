import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayoutWithMapComponent } from './list-layout-with-map.component';

describe('ListLayoutWithMapComponent', () => {
  let component: ListLayoutWithMapComponent;
  let fixture: ComponentFixture<ListLayoutWithMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLayoutWithMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLayoutWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
