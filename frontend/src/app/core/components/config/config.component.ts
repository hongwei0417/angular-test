import { ThemeSettings } from './../../../core/services/theme-settings/theme-settings.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutSettings } from 'src/app/core/services/layout-settings/layout-settings.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  @Input() layoutSettings!: LayoutSettings;
  @Input() themeSettings!: ThemeSettings;
  @Input() configActive!: boolean;
  @Output() configToggle = new EventEmitter<boolean>();
  @Output() configChange = new EventEmitter<LayoutItem | ThemeItem>();

  themes: { name: string; file: string; color: string }[] = [];
  flatLayoutColors: { name: string; file: string; color: string }[] = [];
  specialLayoutColors: { name: string; file: string; color1: string; color2: string }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.flatLayoutColors = [
      { name: 'Blue', file: 'blue', color: '#146fd7' },
      { name: 'Cyan', file: 'cyan', color: '#0A616F' },
      { name: 'Indigo', file: 'indigo', color: '#470EA2' },
      { name: 'Purple', file: 'purple', color: '#391F68' },
      { name: 'Teal', file: 'teal', color: '#136E52' },
      { name: 'Pink', file: 'pink', color: '#771340' },
      { name: 'Lime', file: 'lime', color: '#407916' },
      { name: 'Green', file: 'green', color: '#1F8E38' },
      { name: 'Amber', file: 'amber', color: '#7A5E06' },
      { name: 'Brown', file: 'brown', color: '#593E22' },
      { name: 'Orange', file: 'orange', color: '#904100' },
      { name: 'Deep Purple', file: 'deeppurple', color: '#341A64' },
      { name: 'Light Blue', file: 'lightblue', color: '#14569D' },
      { name: 'Light Green', file: 'lightgreen', color: '#2E8942' },
      { name: 'Dark Grey', file: 'darkgrey', color: '#343A40' },
    ];
    this.specialLayoutColors = [
      { name: 'Influenza', file: 'influenza', color1: '#a83279', color2: '#f38e00' },
      { name: 'Calm', file: 'calm', color1: '#5f2c82', color2: '#0DA9A4' },
      { name: 'Crimson', file: 'crimson', color1: '#521c52', color2: '#c6426e' },
      { name: 'Night', file: 'night', color1: '#2c0747', color2: '#6441a5' },
      { name: 'Skyline', file: 'skyline', color1: '#2b32b2', color2: '#1488cc' },
      { name: 'Sunkist', file: 'sunkist', color1: '#ee8a21', color2: '#f2c94c' },
      { name: 'Little Leaf', file: 'littleleaf', color1: '#4DB865', color2: '#80D293' },
      { name: 'Joomla', file: 'joomla', color1: '#1e3c72', color2: '#2a5298' },
      { name: 'Firewatch', file: 'firewatch', color1: '#cb2d3e', color2: '#ef473a' },
      { name: 'Suzy', file: 'suzy', color1: '#834d9b', color2: '#d04ed6' },
    ];
    this.themes = [
      { name: 'Amber', file: 'amber', color: '#F8BD0C' },
      { name: 'Blue', file: 'blue', color: '#007bff' },
      { name: 'Cyan', file: 'cyan', color: '#17A2B8' },
      { name: 'Indigo', file: 'indigo', color: '#6610F2' },
      { name: 'Purple', file: 'purple', color: '#883cae' },
      { name: 'Teal', file: 'teal', color: '#20C997' },
      { name: 'Orange', file: 'orange', color: '#FD7E14' },
      { name: 'Deep Purple', file: 'deeppurple', color: '#612FBE' },
      { name: 'Light Blue', file: 'lightblue', color: '#4DA3FF' },
      { name: 'Green', file: 'green', color: '#28A745' },
      { name: 'Light Green', file: 'lightgreen', color: '#61CC79' },
      { name: 'Brown', file: 'brown', color: '#986839' },
      { name: 'Dark Grey', file: 'darkgrey', color: '#6C757D' },
      { name: 'Pink', file: 'pink', color: '#E83E8C' },
      { name: 'Lime', file: 'lime', color: '#74CD32' },
    ];
  }

  onToggleConfig(e: MouseEvent): void {
    this.configToggle.next(!this.configActive);
  }

  openConfig(isOpen: boolean): void {
    this.configToggle.next(isOpen);
  }

  configEvent(changedItem: LayoutItem | ThemeItem): void {
    this.configChange.next(changedItem);
  }

  layoutModeChange(value: LayoutSettings['layoutMode']): void {
    this.configEvent({
      configType: 'layout',
      name: 'layoutMode',
      value,
    });
    if (this.layoutSettings.layoutMode === 'horizontal' && this.layoutSettings.profileMode !== 'top') {
      this.configEvent({
        configType: 'layout',
        name: 'profileMode',
        value: 'top',
      });
    }
  }

  profileModeChange(value: LayoutSettings['profileMode']): void {
    this.configEvent({
      configType: 'layout',
      name: 'profileMode',
      value,
    });
  }

  menuColorChange(value: ThemeSettings['darkMenu']): void {
    this.configEvent({
      configType: 'theme',
      name: 'darkMenu',
      value,
    });
  }

  inputStyleChange(value: ThemeSettings['inputStyle']): void {
    this.configEvent({
      configType: 'theme',
      name: 'inputStyle',
      value,
    });
  }

  rippleChange(value: ThemeSettings['ripple']): void {
    this.configEvent({
      configType: 'theme',
      name: 'ripple',
      value,
    });
  }

  layoutColorChange(value: string, special?: boolean): void {
    if (special) {
      this.configEvent({
        configType: 'theme',
        name: 'darkMenu',
        value: special,
      });
    }
    this.configEvent({
      configType: 'theme',
      name: 'layoutColor',
      value,
    });
  }

  componentThemeChange(value: string): void {
    this.configEvent({
      configType: 'theme',
      name: 'themeColor',
      value,
    });
  }
}

export type LayoutItem = { configType: 'layout'; name: keyof LayoutSettings; value: any };
export type ThemeItem = { configType: 'theme'; name: keyof ThemeSettings; value: any };
