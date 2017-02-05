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

  private error: any;
  private quoteOfDay: any;
  private quotes: any = [{
    quote: 'Sometimes, you’ve got to work a little, so you can ball a lot.',
    author: 'Tom Haverford'
  }, {
    quote: 'Go to your desire and don’t hang around here.',
    author: 'Jack Kerouac, “Big Sur”'
  }, {
    quote: 'Go confidently in the direction of your dreams! Live the life you’ve imagined!',
    author: 'Thoreau'
  }, {
    quote: 'Now tell me, what is it you plan to do with your one wild and precious life?',
    author: 'Mary Oliver'
  }, {
    quote: 'Find out who you are and do it on purpose.',
    author: 'Dolly Parton'
  }, {
    quote: 'Some people want it to happen, some people wish it would happen, others make it happen.',
    author: 'Michael Jordan'
  }, {
    quote: 'The man on top of the mountain didn’t fall there.',
    author: 'Vince Lombardi'
  }, {
    quote: 'Live every week like it’s Shark Week.',
    author: 'Tracy Jordan'
  }, {
    quote: '“I never dreamed about success. I worked for it.',
    author: 'Estee Lauder'
  }, {
    quote: 'I am deliberate and afraid of nothing.',
    author: 'Audre Lorde'
  }, {
    quote: 'We have a strategic plan. It’s called doing things.',
    author: 'Herb Kelleher, Co-founder of Southwest Airlines'
  }, {
    quote: 'You can’t use up creativity. The more you use, the more you have.',
    author: 'Maya Angelou'
  }, {
    quote: 'Life is short. Don’t be lazy.',
    author: 'Sophia Amoruso'
  }, {
    quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    author: 'Aristotle'
  }
  ];

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
    let chosenIndex: number = parseInt('' + (Math.random() * this.quotes.length));
    this.quoteOfDay = this.quotes[chosenIndex];
  }

  toastError() {

    this.snackBar.open(this.error, "OK", {
      duration: 5000,
    });
  }

}
