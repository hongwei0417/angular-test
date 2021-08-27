import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronGenerateDialogComponent } from './cron-generate-dialog.component';

describe('CronGenerateDialogComponent', () => {
  let component: CronGenerateDialogComponent;
  let fixture: ComponentFixture<CronGenerateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronGenerateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronGenerateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
