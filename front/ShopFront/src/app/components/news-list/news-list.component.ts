import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-news-list',
  standalone: false, // компонент не standalone, нужно подключать в модуле
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  newsList: News[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.loading = true;
    this.newsService.getAll().subscribe({
      next: (data) => {
        this.newsList = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Ошибка загрузки новостей';
        this.loading = false;
      },
    });
  }
}
