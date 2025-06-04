import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePropertyComponent } from './compare-property.component';

describe('ComparePropertyComponent', () => {
  let component: ComparePropertyComponent;
  let fixture: ComponentFixture<ComparePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparePropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
