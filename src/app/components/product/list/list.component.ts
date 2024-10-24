import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  product: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'category', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((product) => {
      this.product = product;
    });
  }
}
