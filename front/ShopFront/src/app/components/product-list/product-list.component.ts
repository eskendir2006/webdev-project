import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product} from '../../models/product';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    FormsModule,
    CommonModule,
  ]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', photo_url: '', description: [], quantity: 0, created_at: '' };
  editProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.loadProducts();
    });
  }

  onCreate(): void {
    this.productService.createProduct(this.newProduct).subscribe(() => {
      this.loadProducts();
    });
  }

  onUpdate(): void {
    if (this.editProduct) {
      this.productService.updateProduct(this.editProduct.id!, this.editProduct).subscribe(() => {
        this.loadProducts();
        this.editProduct = null;
      });
    }
  }
}
