import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { ProductService } from 'src/app/product/services/product.service';
import { Categories } from 'src/app/shared/models/categories.model';
import { Product } from 'src/app/shared/models/product.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  categoryGroup = this._formBuilder.group({
    categoryForm: ['', Validators.required],
  });
  valuesGroup = this._formBuilder.group({
    saleValue: ['', Validators.required],
    profitPercentage: ['', Validators.required],
  });
  isLinear = true;

  categories: Categories[] = [];
  selectedCategory: number | null = null;

  user: Users = {
    id: this.usuarioLogado.id,
    name: this.usuarioLogado.name,
  };

  category: Categories = {
    id: null,
    name: '',
    description: '',
  };

  product: Product = {
    name: '',
    price: '',
    category: this.category,
  };

  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private categoryService: CategoriesService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  get usuarioLogado(): UserToken {
    return this.loginService.usuarioLogado;
  }

  loadCategories(): void {
    this.categoryService.read().subscribe((categories) => {
      this.categories = categories;
    });
  }

  createProduct(): void {
    console.log(this.product);
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Categoria criada!', false);
      this.router.navigate(['/product']);
    });
  }

  onCategoryChange(categoryId: number): void {
    const selected = this.categories.find(
      (category) => category.id === categoryId
    );
    if (selected) {
      this.product.category = {
        id: selected.id,
        name: selected.name,
        description: selected.description,
      };
    } else {
      this.product.category = { id: null, name: '', description: '' };
    }
  }

  cancel(): void {
    this.router.navigate(['/product']);
  }
}
