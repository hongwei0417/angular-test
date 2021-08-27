import { HttpHelperService } from './services/httpHelper/http-helper.service';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { ConfigComponent } from './components/config/config.component';
import { FooterComponent } from './components/footer/footer.component';
import { InlineProfileComponent } from './components/inline-profile/inline-profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AppComponent } from './containers/app/app.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { EffectsModule } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConfigComponent,
    FooterComponent,
    InlineProfileComponent,
    MenuComponent,
    MenuitemComponent,
    TopbarComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [AppComponent],
  providers: [HttpHelperService, MessageService, httpInterceptorProviders],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
