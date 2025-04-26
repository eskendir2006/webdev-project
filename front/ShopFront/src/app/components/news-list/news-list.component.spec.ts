import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsListComponent } from './news-list.component';
import { NewsService } from '../../services/news.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from '../news-detail/news-detail.component';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsService: jasmine.SpyObj<NewsService>;

  beforeEach(async () => {
    // Создаем моки для NewsService
    const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getAll']);

    await TestBed.configureTestingModule({
      declarations: [NewsListComponent, NewsDetailComponent],
      imports: [CommonModule], // Подключаем необходимые модули
      providers: [
        { provide: NewsService, useValue: newsServiceSpy }, // Используем моки для сервиса
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    newsService = TestBed.inject(NewsService) as jasmine.SpyObj<NewsService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch news list on init', () => {
    const mockNews = [
      { id: 1, title: 'News 1', text: ['Text 1'] },
      { id: 2, title: 'News 2', text: ['Text 2'] },
    ];

    // Задаем поведение для мока getAll
    newsService.getAll.and.returnValue(of(mockNews));

    component.ngOnInit();

    expect(newsService.getAll).toHaveBeenCalled();
    expect(component.newsList).toEqual(mockNews);
  });

  it('should handle error when fetching news', () => {
    // Мокируем ошибку
    newsService.getAll.and.returnValue(throwError('Error fetching news'));

    component.ngOnInit();

    expect(newsService.getAll).toHaveBeenCalled();
    expect(component.errorMessage).toBe('Ошибка загрузки новостей');
  });

  it('should display loading message when fetching news', () => {
    const mockNews = [
      { id: 1, title: 'News 1', text: ['Text 1'] },
      { id: 2, title: 'News 2', text: ['Text 2'] },
    ];

    newsService.getAll.and.returnValue(of(mockNews));

    component.fetchNews();

    expect(component.loading).toBeTrue();
  });
});
