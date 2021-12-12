import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email = ""
  password = ""
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  async signin(){
    await this.authService.signin(this.email,this.password);
  }
}
