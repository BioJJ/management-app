import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Categories } from 'src/app/shared/models/categories.model';
import { UserToken } from 'src/app/shared/models/user-token.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  category: Categories[] = [];
  displayedColumns = ['id', 'name', 'description', 'action'];

  constructor(
    private categoryService: CategoriesService,
    private loginService: LoginService
  ) {}

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    this.categoryService.read().subscribe((category) => {
      this.category = category;
    });
  }
}
