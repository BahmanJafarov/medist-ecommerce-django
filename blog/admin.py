from django.contrib import admin
from blog.models import BlogCategory, Blog

# Register your models here.

admin.site.register(BlogCategory)
admin.site.register(Blog)