from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from core.models import AbstractModel
from django.templatetags.static import static


# Create your models here.


class User(AbstractUser):
    GENDER_CHOICES = [
        ("Male", "Male"),
        ("Female", "Female"),
        ("Other", "Other"),
    ]

    first_name = models.CharField("First Name", max_length=155, blank=False, null=False)
    last_name = models.CharField("Last Name", max_length=155, blank=False, null=False)
    email = models.EmailField("Email", unique=True)
    phone = models.CharField("Phone", max_length=200, blank=True)
    image = models.ImageField(
        upload_to="image/account/profile_images/", null=True, blank=True
    )
    dob = models.DateField("Date of Birth", null=True, blank=True)
    gender = models.CharField(
        "Gender", max_length=10, choices=GENDER_CHOICES, default="Other"
    )
    product_ids = ArrayField(models.IntegerField(), blank=True, default=list)
    ips = ArrayField(models.GenericIPAddressField(), null=True, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("",)

    def __str__(self):
        return self.username

    def get_profile_image(self):
        return self.image.url if self.image else static("image/account/male.jpg")


class BlockIpAddress(AbstractModel):
    ip_address = models.GenericIPAddressField()

    def __str__(self):
        return self.ip_address


class UserAddress(AbstractModel):
    address = models.CharField("address", max_length=200)
