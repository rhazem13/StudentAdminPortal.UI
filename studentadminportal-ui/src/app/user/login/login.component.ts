import { Component } from '@angular/core';
import { UserLoginRequest } from 'src/app/models/api-models/UserLoginRequest';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  user = new UserLoginRequest();
  hide = true;

  login(user: UserLoginRequest) {
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
      console.log(token);

    });
  }
}
