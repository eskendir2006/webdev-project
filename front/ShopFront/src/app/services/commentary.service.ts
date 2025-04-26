import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentary } from '../models/commentary';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentaryService {
  private apiUrl = `${environment.apiUrl}/commentaries`;

  constructor(private http: HttpClient) {}

  getCommentaries(newsId: number): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`${this.apiUrl}/?news=${newsId}`);
  }

  addCommentary(comment: Commentary): Observable<Commentary> {
    return this.http.post<Commentary>(this.apiUrl + '/', comment);
  }

  deleteCommentary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/`);
  }
}
