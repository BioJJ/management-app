import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de usuario',
      icon: 'person',
      routeUrl: '/users',
    };
  }

  ngOnInit(): void {}

  navigateToContactCreate(): void {
    this.router.navigate(['/users/create']);
  }
}
