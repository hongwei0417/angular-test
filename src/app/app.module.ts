import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TransactionModule } from './transaction/transaction.module';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducers from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    TransactionModule,
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromReducers.reducersFeatureKey, fromReducers.reducers, { metaReducers: fromReducers.metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
