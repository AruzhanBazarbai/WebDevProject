from django.contrib import admin
from api.modelsAi import Product
from api.modelsAru import City, User
from api.modelsD import Category

admin.site.register(Product)
admin.site.register(City)
admin.site.register(User)
admin.site.register(Category)