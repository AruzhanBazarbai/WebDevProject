from rest_framework import serializers
from api.modelsAi import Product

class ProductSerializer(serializers.ModelSerializer):
    # category=CategorySerializer(read_only=True)
    # category_id=serializers.IntegerField(write_only=True)
    class Meta:
        model = Product
        fields = {'id', 'name', 'description', 'cost','category','category_id'}

