import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutSettings } from 'src/app/core/services/layout-settings/layout-settings.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Input() layoutSettings!: LayoutSettings;
  @Output() menuBtn = new EventEmitter<MouseEvent>();
  @Output() topMenuBtn = new EventEmitter<MouseEvent>();
  @Output() topItemBtn = new EventEmitter<{ event: MouseEvent; item: any }>();
  @Output() subItemBtn = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  onMenuButtonClick(e: MouseEvent): void {
    this.menuBtn.next(e);
  }

  onTopbarMenuButtonClick(e: MouseEvent): void {
    this.topMenuBtn.next(e);
  }

  onTopbarItemClick(event: MouseEvent, item: any): void {
    this.topItemBtn.next({ event, item });
  }

  onTopbarSubItemClick(e: MouseEvent): void {
    this.subItemBtn.next(e);
  }
}
