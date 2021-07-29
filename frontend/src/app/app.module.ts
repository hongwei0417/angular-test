import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromRoot from './core/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

const routingModules = [AuthModule, AppRoutingModule];

const ngRxModules = [
  StoreModule.forRoot(fromRoot.ROOT_REDUCERS, {
    metaReducers: fromRoot.metaReducers,
  }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
  StoreRouterConnectingModule.forRoot(),
];

const UIModules = [NgbModule];
@NgModule({
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
