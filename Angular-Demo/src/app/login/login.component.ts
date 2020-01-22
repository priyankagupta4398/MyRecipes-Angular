import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onLoginRoute() {
    this.authService.login();
    this.route.navigate(['/addRecipe']);
  }

}
