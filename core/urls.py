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
from core.views import *


urlpatterns = [
    path('', home, name = 'home'),
    path('404/', error_404, name = 'error_404'),
    path('about-us/', about_us, name = 'about-us'),
    path('cancellation/', cancellation, name = 'cancellation'),
    path('coming-soon/', coming_soon, name = 'coming-soon'),
    path('contact-us/', contact_us, name = 'contact-us'),
    path('cookie/', cookie, name = 'cookie'),
    path('faqs/', faqs, name = 'faqs'),
    path('legal/', legal, name = 'legal'),
    path('payment-policy/', payment_policy, name = 'payment-policy'),
    path('privacy-policy/', privacy_policy, name = 'privacy-policy'),
    path('return-policy/', return_policy, name = 'return-policy'),
    path('search-empty/', search_empty, name = 'search-empty'),
    path('shipping-policy/', shipping_policy, name = 'shipping-policy'),
    path('sitemap/', sitemap, name = 'sitemap'),
    path('store/', store, name = 'store'),
    path('terms-conditions/', terms_conditions, name = 'terms-conditions')
]
