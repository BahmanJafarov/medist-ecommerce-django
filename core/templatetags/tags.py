from django.template import Library
from product.models import *
register = Library()


@register.simple_tag
def get_categories():
    return ProductCategory.objects.all()


@register.inclusion_tag('includes/recent-products.html')
def get_recent_products():
    
    recent_products = Product.objects.order_by('-created_at')[:5]
    
    return {
        'recent_productss': recent_products
    }