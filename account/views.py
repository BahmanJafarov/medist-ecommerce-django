from django.shortcuts import render

# Create your views here.

def register(request):
    return render(request, 'register3.html')

def forgot_password(request):
    return render(request, 'forgot-password.html')

def login(request):
    return render(request, 'login3.html')

def profile(request):
    return render(request, 'profile.html')

def profile_address(request):
    return render(request, 'profile-address.html')

def profile_notification(request):
    return render(request, 'profile-notification.html')

def profile_order(request):
    return render(request, 'profile-order.html')

def profile_ticket(request):
    return render(request, 'profile-ticket.html')

def profile_wishlist(request):
    return render(request, 'profile-wishlist.html')

def ticket(request):
    return render(request, 'ticket.html')

def ticket_create(request):
    return render(request, 'ticket-create.html')

def ticket_edit(request):
    return render(request, 'ticket-edit.html')

def ticket_info(request):
    return render(request, 'ticket-info.html')