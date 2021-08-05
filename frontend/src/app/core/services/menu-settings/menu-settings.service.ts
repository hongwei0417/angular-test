import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuSettingsService {
  private menu = new BehaviorSubject<MenuItem[]>(defualtMenu);

  menu$ = this.menu.asObservable();

  constructor() {}

  setMenuItem(menuItems: MenuItem[]): void {
    this.menu.next(menuItems);
  }
}

export interface MenuItem {
  label?: string;
  icon?: string;
  url?: string[] | string;
  routerLink?: any;
  queryParams?: {
    [k: string]: any;
  };
  items?: MenuItem[];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  routerLinkActiveOptions?: any;
  separator?: boolean;
  badge?: string;
  badgeStyleClass?: string;
  style?: any;
  styleClass?: string;
  title?: string;
  id?: string;
  automationId?: any;
  class?: string;
}

const defualtMenu: MenuItem[] = [
  {
    label: 'Transaction',
    routerLink: ['/transaction'],
  },
  {
    label: 'Schedule',
    items: [
      {
        label: 'scheduler',
        routerLink: ['/schedule'],
      },
      {
        label: 'Job',
        routerLink: ['/schedule'],
      },
      {
        label: 'Monitor',
        routerLink: ['/schedule'],
      },
    ],
  },
  {
    label: 'Parameter',
    items: [
      {
        label: 'Mail Group',
        routerLink: ['/schedule'],
      },
      {
        label: 'DLL',
        routerLink: ['/schedule'],
      },
    ],
  },
];
