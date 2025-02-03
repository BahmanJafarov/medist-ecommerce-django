from django.db import models
from core.models import AbstractModel

# Create your models here.

class BlogCategory(AbstractModel):
    title = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = 'Blog Categories'
        
        
class Blog(AbstractModel):
    category = models.ForeignKey(BlogCategory, related_name='blogs', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    
    def __str__(self):
        return self.title