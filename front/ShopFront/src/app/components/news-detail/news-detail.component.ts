import { Component, Input } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-news-detail',
  standalone: false,
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css',
})
export class NewsDetailComponent {
  @Input() news!: News;
}
