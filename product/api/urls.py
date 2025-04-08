from django.urls import path
from product.api.views import (
    categories,
    TagListAPIView,
    ProductListAPIView,
    ProductUpdateAPIView,
    SubscribeCreateAPIView,
)

urlpatterns = [
    path("categories/", categories, name="categories"),
    path("tags/", TagListAPIView.as_view(), name="tags"),
    path("products/", ProductListAPIView.as_view(), name="products"),
    path("product/<int:pk>", ProductUpdateAPIView.as_view(), name="product_update"),
    path("subscribe/", SubscribeCreateAPIView.as_view(), name="subscribe"),
]
