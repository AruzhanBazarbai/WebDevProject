from django.db import models

class User(models.Model):
    name=models.CharField(max_length=100)
    password=models.CharField(max_length=20)
    class Meta:
        verbose_name='User'
        verbose_name_plural="Users"

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'password':self.password
        }
    
    def __str__(self):
        return f'{self.id}-{self.name}'

class City(models.Model):
    name=models.CharField()
    country=models.CharField()
    class Meta:
        verbose_name='City'
        verbose_name_plural="Cities"

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'country':self.country
        }
    
    def __str__(self):
        return f'{self.id}-{self.name}-{self.country}'
