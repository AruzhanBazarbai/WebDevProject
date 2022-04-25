from django.db import models
from tkinter import CASCADE
from tabnanny import verbose

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    cost = models.IntegerField(default=0)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'cost': self.cost,
            # 'category': self.category
        }