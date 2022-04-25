from django.shortcuts import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializerAi import ProsuctSerializer
from api.modelsAi import Product

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProsuctSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProsuctSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class ProductDetail(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(id=pk)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        product = self.get_object(pk)
        serializer = ProsuctSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk=None):
        product = self.get_object(pk)
        serializer = ProsuctSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        product = self.get_object(pk)
        product.delete()
        return Response({'message': 'delitted'}, status=204)
