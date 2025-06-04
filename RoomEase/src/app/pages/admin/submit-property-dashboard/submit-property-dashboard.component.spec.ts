import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPropertyDashboardComponent } from './submit-property-dashboard.component';

describe('SubmitPropertyDashboardComponent', () => {
  let component: SubmitPropertyDashboardComponent;
  let fixture: ComponentFixture<SubmitPropertyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitPropertyDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitPropertyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
