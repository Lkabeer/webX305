import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  filterProducts: any[]; 
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAllKey()
      .subscribe(products => this.filterProducts = this.products = products);
  }

  ngOnInit() {
  }

  filter(query: string) {
    this.filterProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
