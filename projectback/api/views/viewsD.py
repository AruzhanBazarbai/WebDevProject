import json

from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.modelsD import Category
from api.modelsAi import Product
from api.serializersD import CategorySerializer
from api.serializersAi import ProductSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


@api_view(['GET','POST'])
def category_list(request):
    # permission_classes = (IsAuthenticated,)
    if request.method == 'GET':
        categories = Category.objects.filter().order_by('name')
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, pk):
    # permission_classes = (IsAuthenticated,)
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return Response({'massage': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'massage': 'deleted'}, status=204)


@api_view(['GET'])
def category_products(request,pk):
    try:
        ctg = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return Response({'massage': str(e)}, status=400)

    if request.method == 'GET':
        products=Product.objects.filter(category=ctg)
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)