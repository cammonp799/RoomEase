import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItsWorkComponent } from './how-its-work.component';

describe('HowItsWorkComponent', () => {
  let component: HowItsWorkComponent;
  let fixture: ComponentFixture<HowItsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItsWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
