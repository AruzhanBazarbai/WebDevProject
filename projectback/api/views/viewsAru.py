from rest_framework.views import APIView
from rest_framework import generics
from api.modelsAru import User, City
from api.serializersAru import UserSerializer, CitySerializer
from rest_framework.response import Response
from django.shortcuts import Http404
from rest_framework.permissions import IsAuthenticated

class CityListAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        cities = City.objects.all()
        serializer=CitySerializer(cities,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=CitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
class CityDetailAPIView(APIView):

    permission_classes = (IsAuthenticated,)
    def get_object(self,pk):
        try:
            city=City.objects.get(id=pk)
            return city
        except City.DoesNotExist as e:
            raise Http404

    def get(self,request,pk=None):
        city=self.get_object(pk)
        serializer=CitySerializer(city)
        return Response(serializer.data)
    def put(self,request,pk=None):
        city = self.get_object(pk)
        serializer=CitySerializer(instance=city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    def delete(self,request,pk=None):
        city = self.get_object(pk)
        city.delete()
        return Response({'message':'deleted'})


class UserListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
#         return Response(serializer.errors)
# class UserListAPIView(generics.ListCreateAPIView):
#     def get_queryset(self):# 1
#         # return User.objects.all() 
#         return User.objects.get(name=self.request.user.get_username) #3
#     # queryset = Category.objects.all()# 2
#     serializer_class = User #указываем какой сериалайзер использовать
#     permission_classes = (IsAuthenticated,) #чтобы эту стр могли посмотреть лишь авторизованные пользователи


class UserDetailAPIView(APIView):
    # permission_classes = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            user = User.objects.get(id=pk)
            return user
        except User.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk=None):
        user = self.get_object(pk)
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        user = self.get_object(pk)
        user.delete()
        return Response({'message': 'deleted'})