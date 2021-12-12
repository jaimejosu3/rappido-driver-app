import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email = ""
  password = ""
  name = ""
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  async signup(){
    let result = await this.authService.signup(this.email,this.password, this.name);
    if(result.message == "success"){
      this.router.navigate(["signin"])
      alert("Registro exitoso espere su aprobacion")
    }
  }
}
