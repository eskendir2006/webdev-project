import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private http: HttpClient) {}

  getReviewsByProduct(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:8000/products/${productId}/reviews/`);
  }

  addReview(productId: number, review: Review): Observable<Review> {
    return this.http.post<Review>(`http://localhost:8000/products/${productId}/reviews/`, review);
  }
}
