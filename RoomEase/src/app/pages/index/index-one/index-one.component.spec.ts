import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOneComponent } from './index-one.component';

describe('IndexOneComponent', () => {
  let component: IndexOneComponent;
  let fixture: ComponentFixture<IndexOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
