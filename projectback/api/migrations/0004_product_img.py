# Generated by Django 4.0.3 on 2022-04-26 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_category_product_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='img',
            field=models.TextField(default='', null=True),
        ),
    ]
