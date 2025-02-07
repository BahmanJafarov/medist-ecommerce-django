from django.shortcuts import get_object_or_404, render
from product.models import Product, ProductCategory

# Create your views here.

def collection_category(request):
    products = Product.objects.all()
    
    context = {
        'products': products
    }
    
    return render(request, 'collection-category.html', context)


def product_comparison(request):
    return render(request, 'product-comparison4.html')


def product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    context = {'product': product}
    return render(request, 'product25.html', context)


def search_product(request):
    return render(request, 'search-product2.html')