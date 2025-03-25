from django.urls import path
from product.api.views import (
    categories,
    ProductListAPIView,
    ProductUpdateAPIView,
)

urlpatterns = [
    path("categories/", categories, name="categories"),
    path("products/", ProductListAPIView.as_view(), name="products"),
    path(
        "product/<int:pk>",
        ProductUpdateAPIView.as_view(),
        name="product_update",
    ),
]
