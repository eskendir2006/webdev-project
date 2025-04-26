import { Component, OnInit } from '@angular/core';
import { CommentaryService } from '../../services/commentary.service';
import { Commentary } from '../../models/commentary';

@Component({
  selector: 'app-commentary-list',
  standalone: false,
  templateUrl: './commentary-list.component.html',
  styleUrls: ['./commentary-list.component.css'],
})
export class CommentaryListComponent implements OnInit {
  commentaries: Commentary[] = [];
  newComment: string = '';

  // Пример ID новости — в реальности его можно получать через @Input() или ActivatedRoute
  newsId: number = 1;

  constructor(private commentaryService: CommentaryService) {}

  ngOnInit(): void {
    this.loadCommentaries();
  }

  loadCommentaries(): void {
    this.commentaryService.getCommentaries(this.newsId).subscribe({
      next: (data) => (this.commentaries = data),
      error: (err) => console.error('Ошибка загрузки комментариев:', err),
    });
  }

  onSubmit(): void {
    const comment: Commentary = {
      news: this.newsId,
      name: 'Аноним', // или имя авторизованного пользователя
      text: this.newComment,
    };

    this.commentaryService.addCommentary(comment).subscribe({
      next: (newComment) => {
        this.commentaries.push(newComment);
        this.newComment = '';
      },
      error: (err) => console.error('Ошибка добавления комментария:', err),
    });
  }

  onDelete(id?: number): void {
    if (!id) return;

    this.commentaryService.deleteCommentary(id).subscribe({
      next: () => {
        this.commentaries = this.commentaries.filter((c) => c.id !== id);
      },
      error: (err) => console.error('Ошибка удаления комментария:', err),
    });
  }
}
