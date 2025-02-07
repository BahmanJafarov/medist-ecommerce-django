from django.db import models
from core.models import AbstractModel
from django.contrib.auth import get_user_model
from product.models import Product
from account.models import UserAddress
User = get_user_model()

# Create your models here.

class Wishlist(AbstractModel):
    
    user = models.ForeignKey(User, related_name='wishlists', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='wishlists', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.first_name
    
    
    
class BasketItem(AbstractModel):
    
    product = models.ForeignKey(Product, related_name='items', on_delete=models.CASCADE)
    quantity = models.IntegerField('quantity', default=1)
    
    def __str__(self):
        return self.product.title
    
    def price(self):
        pass
    
    
class Basket(AbstractModel):
    
    user = models.ForeignKey(User, related_name='baskets', on_delete=models.CASCADE)
    items = models.ManyToManyField(BasketItem)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.user.username
    
    def total_price(self):
        pass
    
    
    
    
class Order(AbstractModel):
    
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)
    basket = models.ForeignKey(Basket, related_name='orders', on_delete=models.CASCADE)
    user_address = models.ForeignKey(UserAddress, related_name='orders', on_delete=models.CASCADE)
        
    def __str__(self):
        return self.user.username