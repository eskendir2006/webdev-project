from django.urls import path
from .views import (
    ProductListCreateView, ProductDetailView,
    news_list, product_reviews,
    news_commentary,
    LoginView, LogoutView, RegisterView
)

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('news/', news_list, name='news-list'),
    path('news/<int:news_id>/commentaries/', news_commentary, name='commentaries'),   
    path('products/<int:product_id>/reviews/', product_reviews, name='product-reviews'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    path('auth/register/', RegisterView.as_view(), name='register'),
]