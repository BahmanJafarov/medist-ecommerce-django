from django.shortcuts import render

# Create your views here.

def error_404(request):
    return render(request, '404-2.html')

