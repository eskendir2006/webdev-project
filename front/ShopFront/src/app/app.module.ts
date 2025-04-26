import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { CommentaryListComponent } from './components/commentary-list/commentary-list.component';

// Services and Interceptors
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './auth.interceptor';

// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductItemComponent,
    ProductListComponent,
    NewsDetailComponent,
    ReviewListComponent,
    NewsListComponent,
    ReviewCreateComponent,
    CommentaryListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
    ]),
  ],
  providers: [
    ProductService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
