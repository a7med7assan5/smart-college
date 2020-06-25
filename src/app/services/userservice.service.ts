import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserserviceService {
  private currentClickedUserSubject: BehaviorSubject<User>;
  public currentClickedUser: Observable<User>;

  _id: any;
  constructor(private http: HttpClient) {
    this.currentClickedUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentClickedUser')));
    this.currentClickedUser = this.currentClickedUserSubject.asObservable();
  }

  public get currentClickedUserValue(): User {
    return this.currentClickedUserSubject.value;
  }

  getClickedUser(UserId: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    this._id = UserId;
    return this.http.get<User>(`http://localhost:3000/user/${this._id}/profile`, { headers: headers })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentClickedUser', JSON.stringify(user));
          this.currentClickedUserSubject.next(user);
        }

        return user;
      }));
  }

  closeClickedUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentClickedUser');
    this.currentClickedUserSubject.next(null);
  }
}