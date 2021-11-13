import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login } from 'src/schemas/actions';
import { Learner } from 'src/schemas/entities';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login(request: Login): Promise<Learner>{
    return await this.http.post<Learner>('http://localhost:3000/learners/login',request).toPromise();
  }
}
