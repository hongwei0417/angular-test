import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutSettingsService {
  private layoutSettings = new BehaviorSubject<LayoutSettings>(defaultSetting);

  layoutSettings$ = this.layoutSettings.asObservable();

  constructor() {}

  setLayoutSetting(name: keyof LayoutSettings, value: LayoutSettings[keyof LayoutSettings]): void {
    const updatedSettings: any = Object.assign({}, this.layoutSettings.getValue());
    if (typeof updatedSettings[name] !== 'undefined') {
      updatedSettings[name] = value;
      this.layoutSettings.next(updatedSettings);
    }
  }

  setDeviceMode(): void {
    let mode: LayoutSettings['deviceMode'];
    if (this.isDesktop()) {
      mode = 'desktop';
    } else if (this.isTablet()) {
      mode = 'tablet';
    } else {
      mode = 'mobile';
    }
    this.setLayoutSetting('deviceMode', mode);
  }

  private isDesktop(): boolean {
    return window.innerWidth > 1024;
  }

  private isTablet(): boolean {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  private isMobile(): boolean {
    return window.innerWidth <= 640;
  }
}

export interface LayoutSettings {
  layoutMode: 'static' | 'overlay' | 'horizontal' | 'slim';
  deviceMode: 'desktop' | 'tablet' | 'mobile';
  profileMode: 'top' | 'inline';
  menuHoverActive: boolean;
  overlayMenuActive: boolean;
  staticMenuMobileActive: boolean;
  staticMenuDesktopInactive: boolean;
  rotateMenuButton: boolean;
  topbarMenuActive: boolean;
  activeTopbarItem: string | null; // TODO: 定義重新
}

const defaultSetting: LayoutSettings = {
  layoutMode: 'horizontal',
  deviceMode: 'desktop',
  profileMode: 'inline',
  menuHoverActive: false,
  overlayMenuActive: false,
  staticMenuMobileActive: false,
  staticMenuDesktopInactive: false,
  rotateMenuButton: false,
  topbarMenuActive: false,
  activeTopbarItem: null,
};
