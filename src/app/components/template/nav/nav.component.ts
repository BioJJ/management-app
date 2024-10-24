import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { UserToken } from 'src/app/shared/models/user-token.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {}
}
