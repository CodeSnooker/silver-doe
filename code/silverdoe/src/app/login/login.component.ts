import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from './../router.animations';

import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: { '[@moveIn]': '' }
})

export class LoginComponent implements OnInit {

  error: any;

  constructor(public af: AngularFire, private router: Router, public snackBar: MdSnackBar) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/home']);
      }).catch(
      (err) => {
        this.error = err;
        this.toastError();
      })
  }

  ngOnInit() {
  }

  toastError() {

    this.snackBar.open(this.error, "OK", {
      duration: 5000,
    });
  }

}
