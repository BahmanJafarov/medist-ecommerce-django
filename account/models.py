from django.db import models
from django.contrib.auth.models import AbstractUser
from core.models import AbstractModel


# Create your models here.

class User(AbstractUser):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    
    first_name = models.CharField("First Name", max_length=155, blank=True)
    last_name = models.CharField("Last Name", max_length=155, blank=True)
    email = models.EmailField('Email', max_length=200, null=False, blank=False)
    phone = models.CharField('Phone', max_length=200, blank=True)
    image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    dob = models.DateField('Date of Birth', null=True, blank=True)  
    gender = models.CharField('Gender', max_length=10, choices=GENDER_CHOICES, default='Other') 
    
    def __str__(self):
        return self.first_name
    
    
    
class UserAddress(AbstractModel):
    address = models.CharField('address', max_length=200)