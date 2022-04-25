from api.modelsAru import User, City
from rest_framework import serializers

class CitySerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()
    country=serializers.CharField()

    def create(self,validated_data):
        city=City.objects.create(name=validated_data.get('name'),country=validated_data.get('country'))
        return city

    def update(self,instance,validated_data):
        instance.name=validated_data.get('name')
        instance.country=validated_data.get('country')
        instance.save()
        return instance


class UserSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()
    password=serializers.CharField()
    city_id=serializers.IntegerField(write_only=True)
    city=CitySerializer(read_only=True)

    def create(self,validated_data):
        user=User.objects.create(name=validated_data.get('name'),password=validated_data.get('password'),
                                        city=City.objects.get(id=validated_data.get('city_id')))
        return user

    def update(self,instance,validated_data):
        instance.name=validated_data.get('name')
        instance.password=validated_data.get('password')
        instance.city=City.objects.get(id=validated_data.get('city_id'))
        instance.save()
        return instance

