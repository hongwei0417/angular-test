import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { StoreModule } from '@ngrx/store';
import { reducers, authFeatureKey } from './reducers';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(authFeatureKey, reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
