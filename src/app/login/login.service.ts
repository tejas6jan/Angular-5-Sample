import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  isUserLogin: boolean;
  constructor(private http: HttpClient) {
    this.isUserLogin = false;
  }
  checkUser(): boolean {
    return this.isUserLogin || localStorage.getItem('isUserLoggedIn') === 'true';
  }

  loginUser(user: any): Observable<any> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(map((resp: any) => {
      resp.address = "abc";

      this.isUserLogin = true;
      localStorage.setItem('isUserLoggedIn', 'true');
    })
    );
  }
}
