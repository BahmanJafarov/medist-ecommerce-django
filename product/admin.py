from django.contrib import admin
from product.models import *


# Register your models here.

admin.site.register(ProductCategory)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(ProductReview)