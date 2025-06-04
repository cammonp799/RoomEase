import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTwoComponent } from './index-two.component';

describe('IndexTwoComponent', () => {
  let component: IndexTwoComponent;
  let fixture: ComponentFixture<IndexTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
