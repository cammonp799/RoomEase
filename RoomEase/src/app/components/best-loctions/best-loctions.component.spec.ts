import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLoctionsComponent } from './best-loctions.component';

describe('BestLoctionsComponent', () => {
  let component: BestLoctionsComponent;
  let fixture: ComponentFixture<BestLoctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestLoctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestLoctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
