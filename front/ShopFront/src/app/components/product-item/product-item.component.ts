import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  constructor(private http: HttpClient) {}
  
  removeProduct() {
    this.remove.emit(this.product.id);
  }
  fetchProductDetails(productId: number): Observable<Product> {
    return this.http.get<Product>(`/api/products/${productId}`);
  }
}
