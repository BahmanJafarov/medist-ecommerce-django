"""
URL configuration for medist project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from product.views import *

urlpatterns = [
    path(
        "collection-category/",
        CollectionCategoryView.as_view(),
        name="collection-category-default",
    ),
    path(
        "collection-category/<slug:category_slug>/",
        CollectionCategoryView.as_view(),
        name="collection-category",
    ),
    path(
        "collection-category/<slug:category_slug>/<slug:sub_category_slug>/",
        CollectionCategoryView.as_view(),
        name="collection-sub-category",
    ),
    path("product-comparison/", product_comparison, name="product-comparison"),
    path("product/<str:slug>/", ProductDetailView.as_view(), name="product"),
    path("search-product/", search_product, name="search-product"),
]
