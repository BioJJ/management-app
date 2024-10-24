import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Categories } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  category: Categories;

  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.readById(id).subscribe((category) => {
      this.category = category;
    });
  }

  updateProperty(): void {
    this.categoryService.update(this.category).subscribe(() => {
      this.categoryService.showMessage('Imóvel atualizado com sucesso!');
      this.router.navigate(['/categories']);
    });
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }
}
