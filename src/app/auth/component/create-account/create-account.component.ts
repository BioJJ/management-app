import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  account: Users = {
    name: '',
    email: '',
    password: '',
    cargo: '',
    profile: 'USER',
  };
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.userService.create(this.account).subscribe(() => {
      this.userService.showMessage('Conta criado!');
      this.router.navigate(['/login']);
    });
  }
}
