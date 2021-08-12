import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencySettingTableComponent } from './frequency-setting-table.component';

describe('FrequencySettingTableComponent', () => {
  let component: FrequencySettingTableComponent;
  let fixture: ComponentFixture<FrequencySettingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencySettingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencySettingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
