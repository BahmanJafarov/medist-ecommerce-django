from django.shortcuts import render, redirect
from core.forms import ContactForm
from django.urls import reverse_lazy
from django.contrib import messages

# Create your views here.

def error_404(request):
    return render(request, '404-2.html')

def home(request):
    return render(request, 'index.html')

def about_us(request):
    return render(request, 'about-us7.html')

def cancellation(request):
    return render(request, 'cancellation.html')

def coming_soon(request):
    return render(request, 'coming-soon5.html')

def contact_us(request):
    form = ContactForm()
    
    if request.method == 'POST':
        form = ContactForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, "Successfully sent!")
            return redirect(reverse_lazy('contact-us'))
    
    context = {
        'form': form
    }
    
    return render(request, 'contact-us3.html', context)

def cookie(request):
    return render(request, 'cookie.html')

def faqs(request):
    return render(request, 'faqs.html')

def legal(request):
    return render(request, 'legal.html')

def payment_policy(request):
    return render(request, 'payment-policy.html')

def privacy_policy(request):
    return render(request, 'privacy-policy5.html')

def return_policy(request):
    return render(request, 'return-policy4.html')

def search_empty(request):
    return render(request, 'search-empty.html')

def shipping_policy(request):
    return render(request, 'shipping-policy2.html')

def sitemap(request):
    return render(request, 'sitemap.html')

def store(request):
    return render(request, 'store2.html')

def terms_conditions(request):
    return render(request, 'terms-condition5.html')