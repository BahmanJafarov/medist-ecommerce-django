from django.urls import path
from product.api.views import categories, products

urlpatterns = [
    path("categories/", categories, name="categories"),
    path("products/", products, name="products"),
]
