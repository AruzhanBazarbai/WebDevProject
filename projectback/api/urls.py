from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from .views import CityDetailAPIView, CityListAPIView, UserDetailAPIView, UserListAPIView
urlpatterns = [
    path('login/', obtain_jwt_token),
    path('cities/', CityListAPIView.as_view()),
    path('cities/<int:pk>/', CityDetailAPIView.as_view()),
    path('users/', UserListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
]