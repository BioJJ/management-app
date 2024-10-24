import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Categories } from 'src/app/shared/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl: string = `${config.default.url}/api/categories`;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(category: Categories): Observable<Categories> {
    return this.http.post<Categories>(this.baseUrl, category).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByUser(id: number): Observable<Categories[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Categories[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readNotUser(id: number): Observable<Categories[]> {
    const url = `${this.baseUrl}/${id}/in-stock`;
    return this.http.get<Categories[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readInStock(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.baseUrl+'/in-stock').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Categories> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Categories>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(category: Categories): Observable<Categories> {
    const url = `${this.baseUrl}/${category.id}`;
    return this.http.patch<Categories>(url, category).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Categories> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Categories>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
