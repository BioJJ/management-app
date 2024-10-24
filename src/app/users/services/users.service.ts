import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/shared/models/users.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = `${config.default.url}/api/collaborator`;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}/register`, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Users> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Users>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(user: Users): Observable<Users> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.patch<Users>(url, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Users> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Users>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
