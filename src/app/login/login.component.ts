import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit{

  message: string = ''
  name:string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService
  }

  setMessage() {
    if(this.auth.isLoggedIn){
      this.message = 'connecté';
    }
    this.message = 'Mot de passe ou Nom erroné ';
  }

  login() {
    this.message = 'Tentative';
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/pokemon']);
      } else {
        this.password = '';
        this.router.navigate(['/login']);
      }
      
    })
  }

  logout() {
    this.auth.logout();
    this.message = 'déconnecté'
  }

}
