import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: Users = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  createContact(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Usuario criado!');
      this.router.navigate(['/users']);
    });
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
