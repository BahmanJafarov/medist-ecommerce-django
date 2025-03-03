from django.db import models
from core.validators import validate_email

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
    full_name = models.CharField("Full Name", max_length=200, null=True, blank=True)
    phone = models.CharField("Phone", max_length=50, null=True, blank=True)
    email = models.EmailField("Email", max_length=200, validators=[validate_email])
    message = models.TextField("Message")

    def __str__(self):
        return self.email + " -> " + self.message
