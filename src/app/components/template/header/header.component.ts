import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
