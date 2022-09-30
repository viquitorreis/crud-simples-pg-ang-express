import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/userInterface';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {
  apiUrl: any

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.URL
  }

  // Pegando users
  public getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.apiUrl}`)
      .pipe(catchError(this._handleError))
  }

  //Pegando users pela id
  public getUsersById(id: Number): Observable<User> {
    const url = `${this.apiUrl}/${id}`
    return this.http
      .get<User>(url)
      .pipe(catchError(this._handleError))
  }

  //Atualizando os users
  public updateUser(user: User): Observable<User>{
    const url = `${this.apiUrl}/${user.id}`
    return this.http
      .put<User>(url, user)
      .pipe(catchError(this._handleError))
  }

  // Criando User
  public createUsers(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}`, user)
      .pipe(catchError(this._handleError))
  }

  // Deletando user
  public deleteUser(id: string): Observable<User> {
    const url = `${this.apiUrl}/${id}`
    return this.http
      .delete<User>(url)
      .pipe(catchError(this._handleError))
  }

  // Erros de request
  private _handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('Um erro ocorreu: ', error.error.message)
    } else {
      console.error(
        `Código retornado do backend ${error.status}, ` + `o body foi: ${error.error}`
      )
    }
    return throwError(() => ('Alguma coisa errada ocorreu'))
  }
}
