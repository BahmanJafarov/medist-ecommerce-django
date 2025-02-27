from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from account.tokens import account_activation_token

from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from account.forms import LoginForm, RegisterForm, ProfileUpdateForm
from django.contrib import messages
from django.contrib.auth import get_user_model
User = get_user_model()
from django.contrib.auth.decorators import login_required
from django.contrib.auth import (
    authenticate,
    login as django_login,
    logout as django_logout,
    update_session_auth_hash,
)

# Create your views here.


def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        django_login(request, user)
        return redirect("home")
    else:
        return render(request, "account_activation_invalid.html")


def register(request):
    form = RegisterForm()

    if request.method == "POST":
        form = RegisterForm(data=request.POST, files=request.FILES)
        if form.is_valid():
            user = form.save(commit=False)  # Save instance without committing
            user.is_active = False  # Prevent login until activation
            user.save()  # Now save the user
            
            # Prepare email activation
            current_site = get_current_site(request)
            subject = "Activate Your Medist Account"
            uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
            token = account_activation_token.make_token(user)
            
            # Render email template
            email_html = render_to_string("account_activation_email.html", {
                "user": user,
                "domain": current_site.domain,
                "uid": uidb64,
                "token": token,
            })
            email_text = f"Activate your account: http://{current_site.domain}/activate/{uidb64}/{token}/"

            # Send email
            email = EmailMultiAlternatives(
                subject=subject,
                body=email_text,  # Plain text fallback
                from_email="noreply@medist.com",
                to=[user.email],
            )
            email.attach_alternative(email_html, "text/html")  # Attach HTML version
            email.send()

            messages.success(request, "Please check your email to activate your account.")
            return redirect(reverse_lazy("login"))

        # Format form errors properly
        for field, errors in form.errors.items():
            for error in errors:
                messages.error(request, f"{field.replace('_', ' ').title()}: {error}")

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
