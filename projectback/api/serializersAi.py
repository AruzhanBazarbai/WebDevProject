from rest_framework import serializers
from api.modelsAi import Product
from api.serializersD import CategorySerializer

class ProductSerializer(serializers.ModelSerializer):
    # category=CategorySerializer(read_only=True)
    category_id=serializers.IntegerField()
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'cost','img','category_id',)

