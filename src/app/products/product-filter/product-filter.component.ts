import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(private categoriesService: CategoryService) {
    this.categories$ = this.categoriesService.getAll();
  }

  ngOnInit() {
  }

}
