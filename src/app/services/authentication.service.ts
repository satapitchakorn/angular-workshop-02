import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccountApiService } from './account-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;

  public currentUser: Observable<User>;

  constructor(private api: AccountApiService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get getToken(): string {
    return this.currentUserValue != null ? this.currentUserValue.token : '';
  }

  async login(data, returnUrl): Promise<any> {
    try {
      const res = await this.api.login(data);
      if (res.status === 200) {
        Swal.fire({
          title: 'Success',
          text: 'Welcome',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          localStorage.setItem('currentUser', JSON.stringify(res.parsedBody));
          this.currentUserSubject.next(res.parsedBody);
          this.router.navigateByUrl(returnUrl);
          return res.parsedBody;
        });
      } else {
        if (res.parsedBody.message) {
          Swal.fire({
            title: 'Error',
            text: res.parsedBody.message,
            icon: 'error'
          });
        }
        else {
          Swal.fire({
            title: 'Error',
            text: 'Something went worng, please try again later.',
            icon: 'error'
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
