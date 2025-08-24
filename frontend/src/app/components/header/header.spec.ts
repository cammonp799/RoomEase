import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
