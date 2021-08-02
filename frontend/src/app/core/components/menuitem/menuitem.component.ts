import { LayoutSettings } from './../../../core/services/layout-settings/layout-settings.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from '../../services/app.menu.service';

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
  host: {
    '[class.layout-root-menuitem]': 'root',
    '[class.active-menuitem]': 'active',
  },
  animations: [
    trigger('children', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          'z-index': 100,
        })
      ),
      state(
        'hidden',
        style({
          height: '0px',
          'z-index': '*',
        })
      ),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class MenuitemComponent implements OnInit, OnDestroy {
  @Input() layoutSettings!: LayoutSettings;
  @Output() updateLayout = new EventEmitter<{ name: keyof LayoutSettings; value: any }>();

  @Input() item: any;
  @Input() index!: number;
  @Input() root!: boolean;
  @Input() parentKey!: string;

  active = false;
  key!: string;

  subscriptions = new Subscription();

  constructor(public router: Router, private menuService: MenuService) {}

  ngOnInit(): void {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);

    this.subscriptions.add(
      this.menuService.menuSource$.subscribe((clickedKey) => {
        if (this.active && this.isCurrMenu(clickedKey, this.key)) {
          this.active = false;
        }
      })
    );

    this.subscriptions.add(
      this.menuService.resetSource$.subscribe(() => {
        this.active = false;
      })
    );

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.layoutSettings.layoutMode === 'horizontal' || this.layoutSettings.layoutMode === 'slim') {
        this.active = false;
      } else {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        } else {
          this.active = false;
        }
      }
    });

    if (
      !(this.layoutSettings.layoutMode === 'horizontal' || this.layoutSettings.layoutMode === 'slim') &&
      this.item.routerLink
    ) {
      this.updateActiveStateFromRoute();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  updateActiveStateFromRoute(): void {
    this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
  }

  itemClick(event: MouseEvent): null | boolean {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return true;
    }

    // navigate with hover in horizontal mode
    if (this.root) {
      this.updateLayout.next({ name: 'menuHoverActive', value: !this.layoutSettings.menuHoverActive });
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key);

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    } else {
      // activate item
      this.active = true;

      // hide overlay menus
      if (this.layoutSettings.deviceMode === 'mobile') {
        this.updateLayout.next({ name: 'overlayMenuActive', value: false });
        this.updateLayout.next({ name: 'staticMenuMobileActive', value: false });
      }

      // reset horizontal menu
      if (this.layoutSettings.layoutMode === 'horizontal' || this.layoutSettings.layoutMode === 'slim') {
        this.menuService.reset();
      }
      this.updateLayout.next({ name: 'menuHoverActive', value: false });

      const ink = this.getInk(event.currentTarget);
      if (ink) {
        this.removeClass(ink, 'p-ink-active');
      }
    }
    return null;
  }

  getInk(el: any): any {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < el.children.length; i++) {
      if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
        return el.children[i];
      }
    }
    return null;
  }

  removeClass(element: any, className: string): void {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = element.className.replace(
        new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),
        ' '
      );
    }
  }

  onMouseEnter(): void {
    // activate item on hover
    if (
      this.root &&
      this.layoutSettings.menuHoverActive &&
      (this.layoutSettings.layoutMode === 'horizontal' || this.layoutSettings.layoutMode === 'slim') &&
      this.layoutSettings.deviceMode === 'desktop'
    ) {
      this.menuService.onMenuStateChange(this.key);
      this.active = true;
    }
  }

  private isCurrMenu(key: string, activeKey: string): boolean {
    return activeKey !== key && key.indexOf(activeKey) !== 0;
  }
}
