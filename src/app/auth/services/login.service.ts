import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import config from 'src/app/config/config';
import { Login } from 'src/app/shared/models/login.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import jwt_decode from 'jwt-decode';

const LS_CHAVE: string = 'ususariologado';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = `${config.url}/login`;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  public get usuarioLogado(): UserToken {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(user: UserToken) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }

  getAuthorizationToken(): string | null {
    let usu: UserToken = this.usuarioLogado;

    if (usu) {
      return usu.token;
    }

    return null;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<UserToken | null> {
    return this.http.post<UserToken>(this.baseUrl, login).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!' + e, true);
    return EMPTY;
  }
}
