from django.urls import path
from product.api.views import (
    categories,
    ProductListAPIView,
    ProductUpdateAPIView,
    SubscribeCreateAPIView,
)

urlpatterns = [
    path("categories/", categories, name="categories"),
    path("products/", ProductListAPIView.as_view(), name="products"),
    path("product/<int:pk>", ProductUpdateAPIView.as_view(), name="product_update"),
    path("subscribe/", SubscribeCreateAPIView.as_view(), name="subscribe"),
]
