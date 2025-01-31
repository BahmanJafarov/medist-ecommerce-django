from django.shortcuts import render

# Create your views here.

def article(request):
    return render(request, 'article.html')

def blog(request):
    return render(request, 'blog.html')

def search_blog(request):
    return render(request, 'search-blog.html')