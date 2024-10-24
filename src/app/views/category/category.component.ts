import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Categoria',
      icon: 'real_estate_agent',
      routeUrl: '/categories',
    };
  }

  ngOnInit(): void {}

  navigateToPropertyCreate(): void {
    this.router.navigate(['/categories/create']);
  }

}
