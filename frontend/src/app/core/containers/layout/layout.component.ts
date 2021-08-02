import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LayoutItem, ThemeItem } from '../../components/config/config.component';
import { MenuService } from '../../services/app.menu.service';
import { LayoutSettings, LayoutSettingsService } from '../../services/layout-settings/layout-settings.service';
import { MenuItem, MenuSettingsService } from '../../services/menu-settings/menu-settings.service';
import { ThemeSettings, ThemeSettingsService } from '../../services/theme-settings/theme-settings.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  layoutMenuScroller: HTMLDivElement | any;
  menuClick = false;
  topbarItemClick = false;
  // configClick = false;
  // configActive = false;

  menu$!: Observable<MenuItem[]>;
  layoutSettings!: LayoutSettings;
  themeSettings!: ThemeSettings;

  subscriptions = new Subscription();

  constructor(
    private menuService: MenuService,
    private menuSettingsService: MenuSettingsService,
    private layoutSettingsService: LayoutSettingsService,
    private themeSettingsService: ThemeSettingsService
  ) {}

  ngOnInit(): void {
    this.menu$ = this.menuSettingsService.menu$;
    this.subscriptions = this.layoutSettingsService.layoutSettings$.subscribe(
      (settings) => (this.layoutSettings = settings)
    );
    this.subscriptions = this.themeSettingsService.currTheme$.subscribe((settings) => (this.themeSettings = settings));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /* #region  layout */
  onLayoutClick(): void {
    if (!this.topbarItemClick) {
      this.layoutSettingsService.setLayoutSetting('activeTopbarItem', null);
      this.layoutSettingsService.setLayoutSetting('topbarMenuActive', false);
    }

    if (!this.menuClick) {
      if (this.layoutSettings.layoutMode === 'horizontal' || this.layoutSettings.layoutMode === 'slim') {
        this.menuService.reset();
      }

      if (this.layoutSettings.overlayMenuActive || this.layoutSettings.staticMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.layoutSettingsService.setLayoutSetting('menuHoverActive', false);
    }

    // if (this.configActive && !this.configClick) {
    //   this.configActive = false;
    // }

    // this.configClick = false;
    this.topbarItemClick = false;
    this.menuClick = false;
  }
  /* #endregion */

  /* #region  menu */

  onMenuClick($event: MouseEvent): void {
    this.menuClick = true;
  }
  /* #endregion */

  /* #region  topbar */
  onMenuButtonClick(event: MouseEvent): void {
    this.menuClick = true;
    this.layoutSettingsService.setLayoutSetting('rotateMenuButton', !this.layoutSettings.rotateMenuButton);
    this.layoutSettingsService.setLayoutSetting('topbarMenuActive', false);

    if (this.layoutSettings.layoutMode === 'overlay') {
      this.layoutSettingsService.setLayoutSetting('overlayMenuActive', !this.layoutSettings.overlayMenuActive);
    } else {
      if (this.layoutSettings.deviceMode === 'desktop') {
        this.layoutSettingsService.setLayoutSetting(
          'staticMenuDesktopInactive',
          !this.layoutSettings.staticMenuDesktopInactive
        );
      } else {
        this.layoutSettingsService.setLayoutSetting(
          'staticMenuMobileActive',
          !this.layoutSettings.staticMenuMobileActive
        );
      }
    }
    event.preventDefault();
  }

  onTopbarMenuButtonClick(event: MouseEvent): void {
    this.topbarItemClick = true;
    this.layoutSettingsService.setLayoutSetting('topbarMenuActive', !this.layoutSettings.topbarMenuActive);

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onTopbarItemClick(event: MouseEvent, item: any): void {
    this.topbarItemClick = true;

    if (this.layoutSettings.activeTopbarItem === item) {
      this.layoutSettingsService.setLayoutSetting('activeTopbarItem', null);
    } else {
      this.layoutSettingsService.setLayoutSetting('activeTopbarItem', item);
    }

    event.preventDefault();
  }

  onTopbarSubItemClick(event: MouseEvent): void {
    event.preventDefault();
  }

  /* #endregion */

  /* #region  config */

  // onConfigClick(): void {
  //   this.configClick = true;
  // }

  // configToggle(e: boolean): void {
  //   this.configActive = e;
  // }

  // configChange(changedItem: LayoutItem | ThemeItem): void {
  //   if (changedItem.configType === 'layout') {
  //     this.updateLayout({ name: changedItem.name, value: changedItem.value });
  //   }
  //   if (changedItem.configType === 'theme') {
  //     this.updateTheme({ name: changedItem.name, value: changedItem.value });
  //   }
  // }
  /* #endregion */

  updateLayout(e: { name: keyof LayoutSettings; value: any }): void {
    const { name, value } = e;
    this.layoutSettingsService.setLayoutSetting(name, value);
  }

  updateTheme(e: { name: keyof ThemeSettings; value: any }): void {
    const { name, value } = e;
    this.themeSettingsService.setThemeSetting(name, value);
  }

  hideOverlayMenu(): void {
    this.layoutSettingsService.setLayoutSetting('rotateMenuButton', false);
    this.layoutSettingsService.setLayoutSetting('overlayMenuActive', false);
    this.layoutSettingsService.setLayoutSetting('staticMenuMobileActive', false);
  }
}
