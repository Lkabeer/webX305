import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) { 
    this.categories$ = categoryService.getCategories().valueChanges();

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.get(id).valueChanges().subscribe(product => this.product = product);
      console.log(this.product);
    }
  }

  save(product) {
    console.log(product);
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
