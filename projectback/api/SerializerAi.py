from rest_framework import serializers
from modelsAi import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = {'id', 'name', 'description', 'cost'}

