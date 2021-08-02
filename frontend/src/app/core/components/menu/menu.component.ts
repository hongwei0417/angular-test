import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutSettings } from 'src/app/core/services/layout-settings/layout-settings.service';
import { MenuItem } from 'src/app/core/services/menu-settings/menu-settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menu: MenuItem[] = [];
  @Input() layoutSettings!: LayoutSettings;
  @Output() updateLayout = new EventEmitter<{ name: keyof LayoutSettings; value: any }>();

  constructor() {}

  ngOnInit(): void {}
}
