import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSixComponent } from './index-six.component';

describe('IndexSixComponent', () => {
  let component: IndexSixComponent;
  let fixture: ComponentFixture<IndexSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
