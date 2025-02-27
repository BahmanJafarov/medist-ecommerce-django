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

from django.urls import path, re_path
from account.views import *

urlpatterns = [
    path("register/", register, name="register"),
    path("forgot-password/", forgot_password, name="forgot-password"),
    path("login/", login, name="login"),
    path("logut/", logout, name="logout"),
    path("profile/", profile, name="profile"),
    path("profile-address/", profile_address, name="profile-address"),
    path("profile-notification/", profile_notification, name="profile-notification"),
    path("profile-order/", profile_order, name="profile-order"),
    path("profile-ticket/", profile_ticket, name="profile-ticket"),
    path("profile-wishlist/", profile_wishlist, name="profile-wishlist"),
    path("ticket/", ticket, name="ticket"),
    path("ticket-create/", ticket_create, name="ticket-create"),
    path("ticket-edit/", ticket_edit, name="ticket-edit"),
    path("ticket-info/", ticket_info, name="ticket-info"),
    re_path(
        r"^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$",
        activate,
        name="activate",
    ),
]
