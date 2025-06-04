import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexElevenComponent } from './index-eleven.component';

describe('IndexElevenComponent', () => {
  let component: IndexElevenComponent;
  let fixture: ComponentFixture<IndexElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexElevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
