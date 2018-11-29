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
        redirectUrl: 'http://localhost:3000/#/home',
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
            this.router.navigate(['/']);
        });
    });
  }

  // When called, produce the lock modal that allows authentication
  login() {
    this.lock.show();
  }

  // Remove the localStorage tokens and navigate to the survey page
  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    this.router.navigate(['survey']);
  }

  // Checks if the token has expired / if it exists
  isAuthenticated() {
    return tokenNotExpired();
  }

}