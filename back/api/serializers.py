from rest_framework import serializers
from .models import Product, Review, News, Commentary
from django.contrib.auth.models import User

# ModelSerializers
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'photo_url', 'description', 'quantity', 'created_at']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'product', 'name', 'text', 'rating', 'created_at']

# Regular Serializers
class NewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    text = serializers.JSONField()
    created_at = serializers.DateTimeField(read_only=True)
    
    def create(self, validated_data):
        return News.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance

class CommentarySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    news = serializers.PrimaryKeyRelatedField(queryset=News.objects.all())
    name = serializers.CharField(max_length=255)
    text = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    
    def create(self, validated_data):
        return Commentary.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.news = validated_data.get('news', instance.news)
        instance.name = validated_data.get('name', instance.name)
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance

# User Serializer for authentication
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Auth Serializer
class AuthTokenSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})