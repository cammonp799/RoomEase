import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertyComponent } from './my-property.component';

describe('MyPropertyComponent', () => {
  let component: MyPropertyComponent;
  let fixture: ComponentFixture<MyPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
