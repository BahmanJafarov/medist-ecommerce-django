from django.contrib import admin
from account.models import *

# Register your models here.
admin.site.register(User)
admin.site.register(UserAddress)
admin.site.register(BlockIpAddress)