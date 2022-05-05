from django.db import models

# Create your models here.

class Product(models.Model):
    prod_no=models.IntegerField()
    prod_name=models.CharField(max_length=20)
    prod_price=models.FloatField()
    prod_qty=models.IntegerField()