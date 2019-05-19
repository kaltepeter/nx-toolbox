import { async, TestBed } from '@angular/core/testing';
import { ChangeDetectorShellModule } from './change-detector-shell.module';

describe('ChangeDetectorShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChangeDetectorShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ChangeDetectorShellModule).toBeDefined();
  });
});
