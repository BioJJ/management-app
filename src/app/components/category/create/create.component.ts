import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Categories } from 'src/app/shared/models/categories.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: Users = {
    id: this.usuarioLogado.id,
  };

  category: Categories = {
    description: '',
    name: '',
    id: null,
  };

  constructor(
    private categoryService: CategoriesService,
    private loginService: LoginService,
    private router: Router
  ) {}

  get usuarioLogado(): UserToken {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    // this.category.user.id = this.usuarioLogado.id;
  }

  createProperty(): void {
    this.categoryService.create(this.category).subscribe(() => {
      this.categoryService.showMessage('Categoria criada!');
      this.router.navigate(['/categories']);
    });
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }
}
