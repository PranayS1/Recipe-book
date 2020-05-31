import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

// export interface AuthResponseData {
//   idToken: string;
//   email:	string;
//   refreshToken:	string;
//   expiresIn:	string;
//   localId: string;
//   registerd?: boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    // private http: HttpClient,
    // private router: Router,
    private store: Store<fromApp.AppState>
    ) {}

  // signup(form) {
  //   return this.http.post<AuthResponseData>
  //     ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+ environment.firebaseAPIKey,
  //       {
  //         email: form.email,
  //         password: form.password,
  //         returnSecureToken: true
  //       }
  //     ).pipe(catchError(this.handleError),
  //     tap(resData => {
  //       this.handleAuthentication(
  //         resData.email, 
  //         resData.localId,
  //         resData.idToken,
  //         +resData.expiresIn
  //       )
  //     })
  //   );
  // }

  // login(form) {
  //   return this.http.post<AuthResponseData>
  //   ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+ environment.firebaseAPIKey,
  //     {
  //       email: form.email,
  //       password: form.password,
  //       returnSecureToken: true
  //     }
  //   ).pipe(catchError(this.handleError),
  //     tap(resData => {
  //       this.handleAuthentication(
  //         resData.email, 
  //         resData.localId,
  //         resData.idToken,
  //         +resData.expiresIn
  //       )
  //     })
  //   );
  // }

  // autoLogin() {
  //   const userData: {
  //     email: string,
  //     id: string,
  //     _token: string,
  //     _tokenExpirationDate: string
  //   } = JSON.parse(localStorage.getItem('userData'));

  //   if(!userData) {
  //     return;
  //   }

  //   let expirationDate;
  //   const loadedUser = new User(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     expirationDate = new Date(userData._tokenExpirationDate)
  //   );

  //   if(loadedUser.token) {
  //     //  this.user.next(loadedUser);
  //     this.store.dispatch(new AuthActions.AuthenticateSuccess({
  //       email: loadedUser.email,
  //       userId: loadedUser.id,
  //       token: loadedUser.token,
  //       expirationDate: expirationDate
  //     }));
  //      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
  //      this.autoLogout(expirationDuration);
  //   }
  // }

  // logout() {
  //   // this.user.next(null);
  //   // this.store.dispatch(new AuthActions.Logout());
  //   // this.router.navigate(['/auth']);
  //   localStorage.removeItem('userData');
  //   if(this.tokenExpirationTimer) {
  //     clearTimeout(this.tokenExpirationTimer)
  //   }
  //   this.tokenExpirationTimer = null;
  // }

  // autoLogout(expirationDuration: number) {
  //   this.tokenExpirationTimer = setTimeout(() => {
  //     this.logout();
  //   }, expirationDuration);
  // }

  // private handleAuthentication(
  //   email: string, 
  //   userId: string, 
  //   token: string, 
  //   expiresIn: number
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //       const user = new User(email, userId, token, expirationDate);
  //       // this.user.next(user);
  //       this.store.dispatch(new AuthActions.AuthenticateSuccess({
  //         email: email,
  //         userId: userId, 
  //         token: token, 
  //         expirationDate:expirationDate
  //       }))
  //       this.autoLogout(expiresIn * 1000);
  //       localStorage.setItem('userData', JSON.stringify(user));
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An error occured!';
  //       if (!errorRes.error || !errorRes.error.error) {
  //         return throwError(errorMessage);
  //       }
  //       switch(errorRes.error.error.message) {
  //         case 'EMAIL_EXISTS': 
  //           errorMessage = 'Email already exists';
  //           break;
  //         case 'EMAIL_NOT_FOUND':
  //           errorMessage = 'Email does not exist';
  //           break;
  //         case 'INVALID_PASSWORD':
  //           errorMessage = 'Invalid password';
  //           break;
  //       }
  //       return throwError(errorMessage);
  // }

  setLogoutTimer(expirationDuration: number) { // Method is created to be used from store
    this.tokenExpirationTimer = setTimeout(() => {
     this.store.dispatch(new AuthActions.Logout())
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if(this.tokenExpirationTimer) { // Method is created to be used from store
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
