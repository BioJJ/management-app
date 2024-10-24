import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  user: Users;

  constructor(
    private userService: UsersService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  updateContact(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('usuario atualizado com sucesso!');
      this.router.navigate(['/users']);
    });
  }

  cancel(): void {
    // if (this.usuarioLogado.profile === 'ADM') {
    //   this.router.navigate(['/users']);
    // } else {
      this.router.navigate(['/home']);
    // }
  }
}
