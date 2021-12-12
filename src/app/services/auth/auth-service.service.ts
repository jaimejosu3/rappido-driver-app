import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient, private router: Router) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') as string;
    return !this.jwtHelper.isTokenExpired(token);
  }

  async signin(email: string, password: string){
    let result: any = await this.http.post(environment.apiBase + "/signinDriver",{
      email,password
    }).toPromise();
    console.log(result)
    if(result.message == "success") {
      localStorage.setItem("token",result.data.token)
      localStorage.setItem("user",result.data)
      this.router.navigate(["/home"])
    } else {
      alert(result.message);
    }
  }

  async signup(email: string, password: string, name: string){
    let result: any = await this.http.post(environment.apiBase + "/signupDriver",{
      email,password,
      name
    }).toPromise();
    if(result.message == "success") {
      return result;
    } else {
      alert(result.message);
      return result;
    }
  }
}