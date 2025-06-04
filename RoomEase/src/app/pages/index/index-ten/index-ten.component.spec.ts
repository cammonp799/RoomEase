import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTenComponent } from './index-ten.component';

describe('IndexTenComponent', () => {
  let component: IndexTenComponent;
  let fixture: ComponentFixture<IndexTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
