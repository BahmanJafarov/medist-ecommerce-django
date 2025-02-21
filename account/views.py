from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from account.forms import LoginForm, RegisterForm
from django.contrib import messages
from django.contrib.auth import (
    authenticate,
    login as django_login,
    logout as django_logout,
)

# Create your views here.


def register(request):
    form = RegisterForm()

    if request.method == "POST":
        form = RegisterForm(data=request.POST, files=request.FILES)
        if form.is_valid():
            form.save(False)
            return redirect(reverse_lazy("login"))
        messages.add_message(request, messages.ERROR, "Error!")

    context = {"form": form}
    return render(request, "register3.html", context)


def forgot_password(request):
    return render(request, "forgot-password.html")


def login(request):
    form = LoginForm()

    if request.method == "POST":
        form = LoginForm(data=request.POST)
        if form.is_valid():
            user = authenticate(
                request,
                username=form.cleaned_data["username"],
                password=form.cleaned_data["password"],
            )
            if not user:
                messages.add_message(request, messages.ERROR, "Username or Password is wrong!")
            else:
                django_login(request, user)
                return redirect(reverse_lazy('home'))

    context = {"form": form}
    return render(request, "login3.html", context)

def logout(request):
    django_logout(request)
    return redirect(reverse_lazy('login'))


def profile(request):
    return render(request, "profile.html")


def profile_address(request):
    return render(request, "profile-address.html")


def profile_notification(request):
    return render(request, "profile-notification.html")


def profile_order(request):
    return render(request, "profile-order.html")


def profile_ticket(request):
    return render(request, "profile-ticket.html")


def profile_wishlist(request):
    return render(request, "profile-wishlist.html")


def ticket(request):
    return render(request, "ticket.html")


def ticket_create(request):
    return render(request, "ticket-create.html")


def ticket_edit(request):
    return render(request, "ticket-edit.html")


def ticket_info(request):
    return render(request, "ticket-info.html")
