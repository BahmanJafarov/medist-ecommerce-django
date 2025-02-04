from django.db import models

# Create your models here.

class AbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True


class Subscribe(AbstractModel):
    name = models.CharField(max_length=200, blank=True)
    email = models.EmailField(max_length=200, unique=True)
    
    def __str__(self):
        return self.email
    

class Contact(AbstractModel):
    full_name = models.CharField('Full Name', max_length=200, null=True, blank=True)
    email = models.EmailField('Email', max_length=200),
    phone = models.CharField('Phone', max_length=50, null=True, blank=True),
    message = models.TextField('Message')