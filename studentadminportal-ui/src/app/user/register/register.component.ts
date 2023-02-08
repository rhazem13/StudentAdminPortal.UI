import { Component } from '@angular/core';
import { UserRegisterRequest } from 'src/app/models/api-models/UserRegisterRequest';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = new UserRegisterRequest();
  hide = true;

  constructor(private authService: AuthService) {}

  register(user: UserRegisterRequest) {
    this.authService.register(user).subscribe((successResponse) => {
      console.log(successResponse);
    });
  }
}
