import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThreeComponent } from './list-three.component';

describe('ListThreeComponent', () => {
  let component: ListThreeComponent;
  let fixture: ComponentFixture<ListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
