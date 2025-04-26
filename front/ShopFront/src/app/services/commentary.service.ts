import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentary } from '../models/commentary';
import { environment } from '../../enviroments/environment'

@Injectable({
  providedIn: 'root',
})
export class CommentaryService {
  private baseUrl = `${environment.apiUrl}/commentaries/`;

  constructor(private http: HttpClient) {}

  // Получить комментарии по ID новости
  getCommentaries(newsId: number): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`${this.baseUrl}?news=${newsId}`);
  }

  // Добавить новый комментарий
  addCommentary(comment: Commentary): Observable<Commentary> {
    return this.http.post<Commentary>(this.baseUrl, comment);
  }

  // Удалить комментарий по ID
  deleteCommentary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}/`);
  }
}
