import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { CommentaryListComponent } from './components/commentary-list/commentary-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductDetailComponent,
    NewsDetailComponent,
    ReviewListComponent,
    ReviewCreateComponent,
    CommentaryListComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ProductListComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
