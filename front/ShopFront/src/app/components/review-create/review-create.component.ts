import { Component, Input } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/review';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css'],
})
export class ReviewCreateComponent {
  @Input() productId!: number;
  reviewForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private reviewService: ReviewService, private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      text: ['', Validators.required],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }
  fetchReviews(): void {}

  onSubmit(): void {
    if (this.reviewForm.invalid) {
      return;
    }

    const newReview: Review = {
      product: this.productId,
      name: this.reviewForm.value.name,
      text: this.reviewForm.value.text,
      rating: this.reviewForm.value.rating,
    };

    this.reviewService.addReview(this.productId, newReview).subscribe({
      next: (response) => {
        this.successMessage = 'Отзыв успешно добавлен!';
        this.errorMessage = '';
        this.reviewForm.reset({ rating: 5 });
      },
      error: (error) => {
        this.errorMessage = 'Ошибка при отправке отзыва.';
        this.successMessage = '';
      },
    });
  }
}
