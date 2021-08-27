import { AuthRoutingModule } from './features/auth/auth-routing.module';
import { HttpEffects } from './core/effects/http.effects';
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
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';
import * as fromRoot from './core/reducers';
import { AuthModule } from './features/auth/auth.module';

const routingModule = [AuthModule, AppRoutingModule];

const ngRxModules = [
  StoreModule.forRoot(fromRoot.ROOT_REDUCERS, {
    metaReducers: fromRoot.metaReducers,
  }),
  EffectsModule.forRoot([HttpEffects]),
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
    CoreModule,
    ...routingModule,
    ...ngRxModules,
  ],
  bootstrap: [AppComponent],
  declarations: [],
})
export class AppModule {}
