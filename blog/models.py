from django.db import models
from core.models import AbstractModel
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.


class BlogCategory(AbstractModel):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Blog Categories"


class Blog(AbstractModel):
    category = models.ForeignKey(
        BlogCategory, related_name="blogs", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=200)
    content = models.TextField()
    user = models.ForeignKey(User, related_name="blogs", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="blog_images/", null=True, blank=True)

    def __str__(self):
        return self.title
