import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeDarkComponent } from './subscribe-dark.component';

describe('SubscribeDarkComponent', () => {
  let component: SubscribeDarkComponent;
  let fixture: ComponentFixture<SubscribeDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
