from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from account.forms import LoginForm, RegisterForm, ProfileUpdateForm
from django.contrib import messages
from account.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import (
    authenticate,
    login as django_login,
    logout as django_logout,
    update_session_auth_hash,
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
    next = request.GET.get("next", reverse_lazy("home"))
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
                messages.add_message(
                    request, messages.ERROR, "Username or Password is wrong!"
                )
            else:
                django_login(request, user)
                return redirect(next)

    context = {"form": form}
    return render(request, "login3.html", context)


def logout(request):
    django_logout(request)
    return redirect(reverse_lazy("login"))


@login_required(login_url="login")
def profile(request):
    user = request.user
    form = ProfileUpdateForm(instance=user)

    if request.method == "POST":
        form = ProfileUpdateForm(
            data=request.POST, files=request.FILES, instance=user, user=user
        )

        if form.is_valid():
            user = form.save(commit=False)  # Don't save to DB yet
            new_password = form.cleaned_data.get("new_password")

            if new_password:
                user.set_password(new_password)  # Hash password

            user.save()
            update_session_auth_hash(request, user)  # Keep user logged in

            messages.success(request, "Profile updated successfully!")
        else:
            for field, errors in form.errors.items():
                # Fetch labels from form Meta
                field_label = form.fields[field].label
                for error in errors:
                    messages.error(request, f"{field_label}: {error}")

    context = {"form": form, "gender_choices": User.GENDER_CHOICES}

    return render(request, "profile.html", context)


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
