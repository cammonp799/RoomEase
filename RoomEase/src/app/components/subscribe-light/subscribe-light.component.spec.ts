import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeLightComponent } from './subscribe-light.component';

describe('SubscribeLightComponent', () => {
  let component: SubscribeLightComponent;
  let fixture: ComponentFixture<SubscribeLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
