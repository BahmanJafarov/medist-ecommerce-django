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