import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product } from "../modals/product";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoryService) {
    this.productService.getAll().subscribe(products$ => {
      this.products = products$

      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
        });
    });

    this.categories$ = this.categoriesService.getAll();
  }

}
