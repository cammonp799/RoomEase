import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOneComponent } from './sidebar-one.component';

describe('SidebarOneComponent', () => {
  let component: SidebarOneComponent;
  let fixture: ComponentFixture<SidebarOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
