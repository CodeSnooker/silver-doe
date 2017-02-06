import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class HomeComponent implements OnInit {

  name: any;
  state: string = '';
  private _textToSearch: string = '';

  private _searchActive: boolean = false;

  constructor(public af: AngularFire, private router: Router) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

  /**
   * Call this function when user press escape button or press on close search button
   */
  closeSearch() {
    this._searchActive = false;
    this._textToSearch = '';
  }

  openSearch() {
    this._searchActive = true;
  }

  handleEscape() {
    this.closeSearch();
  }

  /**
   * Performs search on the todo list when user press any key in search box
   */
  performSearch($event: Event) {

    this._searchActive = this._textToSearch.length > 0; 

    if (this._textToSearch.length > 3) {
      // Perform the search
    }
  }

}
