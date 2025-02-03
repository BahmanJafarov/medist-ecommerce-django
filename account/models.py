from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


# Create your models here.

class User(AbstractUser):
    first_name = models.CharField(_("first name"), max_length=155, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    
    