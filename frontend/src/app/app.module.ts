import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';
import * as fromReducers from './reducers';


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
  StoreRouterConnectingModule.forRoot(),
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ...routingModules,
    ...ngRxModules,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
