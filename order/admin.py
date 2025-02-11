from django.contrib import admin
from order.models import *

# Register your models here.

admin.site.register(Wishlist)
admin.site.register(BasketItem)
admin.site.register(Basket)
admin.site.register(Order)