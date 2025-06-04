import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFourComponent } from './index-four.component';

describe('IndexFourComponent', () => {
  let component: IndexFourComponent;
  let fixture: ComponentFixture<IndexFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
