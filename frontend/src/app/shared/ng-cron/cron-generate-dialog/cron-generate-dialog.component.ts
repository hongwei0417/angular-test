import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cron-generate-dialog',
  templateUrl: './cron-generate-dialog.component.html',
  styleUrls: ['./cron-generate-dialog.component.scss'],
})
export class CronGenerateDialogComponent implements OnInit {
  @Input() set show(s: boolean) {
    console.log(s);
    this.showDialog = s;
    this.showChange.emit(s);
  }
  get show(): boolean {
    return this.showDialog;
  }
  @Input() set value(v: string) {
    this.cronValue = v;
    this.valueChange.emit(v);
  }
  get value(): string {
    return this.cronValue;
  }
  @Output() showChange = new EventEmitter<boolean>();
  @Output() valueChange = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<string>();

  constructor() {}

  cronValue = '';
  showDialog = false;

  ngOnInit(): void {}

  submit(): void {
    this.submitEvent.emit(this.cronValue);
  }
}
