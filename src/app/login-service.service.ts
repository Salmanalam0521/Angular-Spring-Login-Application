import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserResponse } from './models/userresponse.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //private httpOptions={headers:HttpHeaders};
  token: string | null = null
  httpOptions = { headers: new HttpHeaders() };
  constructor(private http: HttpClient) {
    
  }
  private dataSubject = new BehaviorSubject<any>(null);

  data$ = this.dataSubject.asObservable();

  updateData(data: any) {
    this.token = data;
    console.log("Token --> " + this.token);
    console.log("Data --> " + data);
    this.dataSubject.next(data);
  }


  httpapi = 'http://localhost:8383/auth/login'
  httpgetapi = 'http://localhost:8383/auth/get-user'

  public login(data: User): Observable<any> {
    return this.http.post<any>(this.httpapi, data);
  }


public getUserDetails():Observable<any>{
const httpoptions={
  headers:new HttpHeaders({
    'Authorization': 'Bearer '+this.token
  })
}
  return this.http.get<any>(this.httpgetapi,httpoptions);
}

}
