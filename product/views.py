from django.shortcuts import render

# Create your views here.

def collection_category(request):
    return render(request, 'collection-category.html')

def product_comparison(request):
    return render(request, 'product-comparison4.html')

def product(request):
    return render(request, 'product25.html')

def search_product(request):
    return render(request, 'search-product2.html')