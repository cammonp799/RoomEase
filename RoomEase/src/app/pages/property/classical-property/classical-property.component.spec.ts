import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicalPropertyComponent } from './classical-property.component';

describe('ClassicalPropertyComponent', () => {
  let component: ClassicalPropertyComponent;
  let fixture: ComponentFixture<ClassicalPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicalPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
