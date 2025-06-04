import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicalLayoutWithMapComponent } from './classical-layout-with-map.component';

describe('ClassicalLayoutWithMapComponent', () => {
  let component: ClassicalLayoutWithMapComponent;
  let fixture: ComponentFixture<ClassicalLayoutWithMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicalLayoutWithMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicalLayoutWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
