import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  email: string = '';
  password: string = '';

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['home']);
    }
  }

  loginUser(value: any){
    let { email, password } = value;

    this.auth.login(email,password).subscribe({
      next: (res) => {
        if(res.token){
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['dashboard']);
        }
      },
      error: (err) => {
        throw new Error("Ha ocurrido un error" + err);
      }
    });
  }
}
