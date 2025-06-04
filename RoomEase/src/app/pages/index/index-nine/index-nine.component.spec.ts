import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNineComponent } from './index-nine.component';

describe('IndexNineComponent', () => {
  let component: IndexNineComponent;
  let fixture: ComponentFixture<IndexNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexNineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
