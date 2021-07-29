import { Component, HostListener, OnInit } from '@angular/core';
import { LayoutSettingsService } from '../../services/layout-settings/layout-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private layoutSettingsService: LayoutSettingsService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.layoutSettingsService.setDeviceMode();
  }

  ngOnInit(): void {
    this.layoutSettingsService.setDeviceMode();
  }
}
