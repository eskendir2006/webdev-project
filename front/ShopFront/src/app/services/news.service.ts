import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiUrl = 'http://localhost:8000/news/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  create(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }
}
