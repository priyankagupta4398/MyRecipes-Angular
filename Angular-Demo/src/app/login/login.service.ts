import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class LoginService {

  loadedUser: any;
  user: {
    'email': string,
    'password': string
  };

  constructor(private http: HttpClient, private router: Router) { }
  loggedInUser = new BehaviorSubject<User>(null);

  login(value) {
    return this.http.post(
      'http://localhost:3000/login', value
    )
    .pipe(
      catchError(this.handleError),
      tap(responseData => {
        this.loadedUser = responseData;
        console.log(this.loadedUser.user._id);
        this.handleAuthentication(
          this.loadedUser.user.Role,
          this.loadedUser.user.ownerEmail,
          this.loadedUser.user._id,
          this.loadedUser.token
          // +resData.expiresIn
        );
      })
    );
  }

  autoLogin() {
    const userData: {
      Role: string,
      email: string;
      id: string;
      _token: string;
      } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.Role,
      userData.email,
      userData.id,
      userData._token
    );
    this.loggedInUser.next(loadedUser);
    if (userData) {
      return loadedUser;
    }
  }

  private handleAuthentication(
    Role: string,
    email: string,
    userId: string,
    token: string
  ) {
    const user = new User(Role , email, userId, token);
    console.log(user);
    this.loggedInUser.next(user);
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes) {
      return throwError(errorMessage);
    }
    switch (errorRes.status) {
      case 401:
        errorMessage = 'Wrong Password!!!';
        break;
      case 404:
        errorMessage = 'This email does not exist!!!';
        break;
    }
    return throwError(errorMessage);
  }

  logout() {
    this.loggedInUser.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('userData');
  }
}
