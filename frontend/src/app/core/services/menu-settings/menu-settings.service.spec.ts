import { TestBed } from '@angular/core/testing';

import { MenuSettingsService } from './menu-settings.service';

describe('MenuSettingsService', () => {
  let service: MenuSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
