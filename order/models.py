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
        return f"{self.id} - {self.user.first_name} - {self.product.title}"
    
    
    
class BasketItem(AbstractModel):
    
    product = models.ForeignKey(Product, related_name='items', on_delete=models.CASCADE)
    quantity = models.IntegerField('quantity', default=1)
    
    def get_price(self):
        return self.product.price * self.quantity
    
    def __str__(self):
        return f"{self.id} - {self.product.title} - {self.quantity} = ${self.get_price()}"

    
    
class Basket(AbstractModel):
    
    user = models.ForeignKey(User, related_name='baskets', on_delete=models.CASCADE)
    items = models.ManyToManyField(BasketItem)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.id} - isActive: {self.is_active} - {self.user.username} = ${self.get_total_price()}"
    
    def get_total_price(self):
        total_price = 0
        for item in self.items.all():
            total_price += item.get_price()
            
        return str(total_price)
    
    
class Order(AbstractModel):
    
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)
    basket = models.ForeignKey(Basket, related_name='orders', on_delete=models.CASCADE)
    user_address = models.ForeignKey(UserAddress, related_name='orders', on_delete=models.CASCADE)
        
    def __str__(self):
        return f"{self.user.username} - {self.basket}"