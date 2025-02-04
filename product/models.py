from django.db import models
from core.models import AbstractModel

# Create your models here.

class ProductCategory(AbstractModel):
    parent = models.ForeignKey('self', related_name='child', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200)
    
    def __str__(self):
        if self.parent:
            return f'{self.parent} - {self.title}'
        return self.title
    
    class Meta:
        verbose_name_plural = 'Product Categories'
        
        
class Product(AbstractModel):
    category = models.ForeignKey(ProductCategory, related_name='products', on_delete=models.CASCADE)
    
    title = models.CharField('title', max_length=200)
    description = models.TextField('description', null=True, blank=True)
    price = models.DecimalField('price', max_digits=10, decimal_places=2)
    cover_image = models.ImageField(upload_to='product_images/')
    quantity = models.IntegerField('quantity')   
    weight = models.FloatField('weight', null=True, blank=True)
    
    def __str__(self):
        return self.title
    
    
class ProductImage(AbstractModel):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images') 
    
    def __str__(self):
        return self.product.title