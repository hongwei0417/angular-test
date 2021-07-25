import { FakeDataService } from './core/services/fake-data.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducers from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './core/components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';

const routingModules = [AuthModule, AppRoutingModule];

const ngRxModules = [
  StoreModule.forRoot(fromReducers.reducers, {
    metaReducers: fromReducers.metaReducers,
  }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
];

const UIModules = [NgbModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ...routingModules,
    ...ngRxModules,
    ...UIModules,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
