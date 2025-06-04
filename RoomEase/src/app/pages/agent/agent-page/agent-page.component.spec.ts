import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPageComponent } from './agent-page.component';

describe('AgentPageComponent', () => {
  let component: AgentPageComponent;
  let fixture: ComponentFixture<AgentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
