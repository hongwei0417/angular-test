import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { LoginPageActions } from '../../actions';
import * as fromAuth from '../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store$: Store<fromAuth.IState>) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.store$.dispatch(LoginPageActions.login());
  }
}
