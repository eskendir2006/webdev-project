import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/review';

@Component({
  standalone: false,
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent implements OnInit {
  @Input() productId!: number;
  reviews: Review[] = [];
  loading = false;
  error: string | null = null;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews(): void {
    if (!this.productId) return;
    this.loading = true;
    this.reviewService.getReviewsByProduct(this.productId).subscribe({
      next: (data) => {
        this.reviews = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка загрузки отзывов';
        this.loading = false;
      },
    });
  }
}
