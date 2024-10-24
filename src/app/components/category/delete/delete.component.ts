import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Categories } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  category: Categories;

  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.readById(id).subscribe((category: Categories) => {
      this.category = category;
    });
  }

  deleteProduct(): void {
    this.categoryService.delete(this.category.id).subscribe(() => {
      this.categoryService.showMessage('Categoria excluido com sucesso!');
      this.router.navigate(['/categories']);
    });
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }
}
