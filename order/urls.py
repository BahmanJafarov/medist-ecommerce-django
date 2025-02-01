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
from order.views import *

urlpatterns = [
    path('cart-drawer-empty/', cart_drawer_empty, name='cart-drawer-empty'),
    path('cart-empty/', cart_empty, name='cart-empty'),
    path('cart-page/', cart_page, name='cart-page'),
    path('checkout/', checkout, name='checkout'),
    path('invoice/', invoice, name='invoice'),
    path('order-complete/', order_complete, name='order-complete'),
    path('order-info-cancel/', order_info_cancel, name='order-info-cancel'),
    path('order-info-default/', order_info_default, name='order-info-default'),
    path('order-info-delivered/', order_info_delivered, name='order-info-delivered'),
    path('order-info-fulfilled/', order_info_fulfilled, name='order-info-fulfilled'),
    path('order-info-indelivery/', order_info_indelivery, name='order-info-indelivery'),
    path('order-info-inprogress/', order_info_inprogress, name='order-info-inprogress'),
    path('order-info-intransit/', order_info_intransit, name='order-info-intransit'),
    path('order-info-pickup/', order_info_pickup, name='order-info-pickup'),
    path('order-info-unfulfilled/', order_info_unfulfilled, name='order-info-unfulfilled'),
    path('order-info/', order_info, name='order-info'),
    path('order/', order, name='order'),
    path('track-order/', track_order, name='track-order'),
    path('wishlist-empty/', wishlist_empty, name='wishlist-empty'),
    path('wishlist/', wishlist, name='wishlist')
]
