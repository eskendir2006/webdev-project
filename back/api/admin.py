from django.contrib import admin
from .models import Product, Review, News, Commentary

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(News)
admin.site.register(Commentary)