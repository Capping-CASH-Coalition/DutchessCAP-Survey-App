import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Auth0Lock from 'auth0-lock';
import { tokenNotExpired } from 'angular2-jwt';

(window as any).global = window;

@Injectable()
export class AuthenticationService {
  // https://dutchesscapp.auth0.com/
  auth0Options = {
      theme: {
          primaryColor: '#DFA612'
      },
      auth: {
        redirectUrl: 'http://localhost:8888/#/home',
        responseType: 'token id_token',
        audience: `https://dutchesscap.auth0.com/userinfo`,
        params: {
          scope: 'openid profile email'
        }
      },
      autoclose: true,
      oidcConformant: true,
  };
    
  lock = new Auth0Lock(
      'Om122xNAJ4dyh43gPnuJpLfgQMZhpNFp',
      'dutchesscap.auth0.com',
      this.auth0Options
  );

  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
            if (error) {
              throw new Error(error);
            }
        
            localStorage.setItem('token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile));
        });
    });
  }

  // When called, produce the lock modal that allows authentication
  login() {
    this.lock.show();
  }
  // Checks if a user has authentication, if they don't sends them to survey page
    hasAuthentication(): boolean {
    if (localStorage.getItem('login') != 'success') {
      this.router.navigate(['/survey']);
      return false;
    }
    else {
      return true;
    }
  }

  // Remove the localStorage token navigate to the survey page
  logout(): void {
    localStorage.removeItem('login');
    this.router.navigate(['/survey']);
  }

  // Checks if the token has expired / if it exists
  isAuthenticated() {
    return tokenNotExpired();
  }

}
