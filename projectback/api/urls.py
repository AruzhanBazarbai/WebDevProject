from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from .views import CityDetailAPIView, CityListAPIView, UserDetailAPIView, UserListAPIView, ProductList, ProductDetail, category_list,category_detail,category_products
urlpatterns = [
    path('login/', obtain_jwt_token),
    path('cities/', CityListAPIView.as_view()),
    path('cities/<int:pk>/', CityDetailAPIView.as_view()),
    path('users/', UserListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
    path('products/',ProductList.as_view()),
    path('products/<int:pk>/',ProductDetail.as_view()),
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('categories/<int:pk>/products/',category_products )
]