import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeSettingsService {
  currTheme = new BehaviorSubject(defualtTheme);

  currTheme$ = this.currTheme.asObservable();
  constructor() {}

  setThemeSetting(name: keyof ThemeSettings, value: any): void {
    const updatedSettings: any = Object.assign({}, this.currTheme.getValue());
    if (typeof updatedSettings[name] !== 'undefined') {
      updatedSettings[name] = value;

      if (name === 'layoutColor') {
        this.changeLayout(value);
      }

      if (name === 'themeColor') {
        this.changeComponentTheme(value);
      }

      this.currTheme.next(updatedSettings);
    }
  }

  changeComponentTheme(theme: string): void {
    this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
  }

  // changeVersion(version: string) {
  //   // this.changeStyleSheetsColor('theme-css', 'theme-' + this.currTheme.themeColor + '.css');
  //   // this.changeStyleSheetsColor('layout-css', 'layout-' + this.currTheme.layout + '.css');
  // }

  changeLayout(layout: string, special?: boolean): void {
    this.changeStyleSheetsColor('layout-css', 'layout-' + layout + '.css');
  }

  private changeStyleSheetsColor(id: string, value: string): void {
    const element = document.getElementById(id);
    if (element) {
      const path = element.getAttribute('href');
      if (path) {
        const urlTokens = path.split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
      }
    }
  }

  private replaceLink(linkElement: HTMLElement, href: string): void {
    if (this.isIE()) {
      linkElement.setAttribute('href', href);
    } else {
      const id = linkElement.getAttribute('id');
      if (id) {
        const cloneLinkElement = linkElement.cloneNode(true) as HTMLElement;

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        (linkElement.parentNode as HTMLElement).insertBefore(cloneLinkElement, linkElement.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
          linkElement.remove();
          cloneLinkElement.setAttribute('id', id);
        });
      }
    }
  }

  private isIE(): boolean {
    return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }
}

export interface ThemeSettings {
  darkMenu: boolean;
  ripple: boolean;
  inputStyle: 'outlined' | 'filled';
  themeColor: string;
  layoutColor: string;
}

const defualtTheme: ThemeSettings = {
  themeColor: 'blue',
  layoutColor: 'blue',
  darkMenu: false,
  ripple: false,
  inputStyle: 'outlined',
};
