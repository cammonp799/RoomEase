import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicalLayoutWithSidebarComponent } from './classical-layout-with-sidebar.component';

describe('ClassicalLayoutWithSidebarComponent', () => {
  let component: ClassicalLayoutWithSidebarComponent;
  let fixture: ComponentFixture<ClassicalLayoutWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicalLayoutWithSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicalLayoutWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
