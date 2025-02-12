from django.shortcuts import get_object_or_404, render
from product.models import *
from django.views.generic import DetailView

# Create your views here.

def collection_category(request, category_id=None):
    
    if category_id:
        products = Product.objects.filter(category__parent_id=int(category_id))
    else:
        products = Product.objects.all()
    
    context = {
        'products': products
    }
    
    return render(request, 'collection-category.html', context)


def product_comparison(request):
    return render(request, 'product-comparison4.html')


def product(request, pk):
    
    product = get_object_or_404(Product, id=pk)
    context = {
        'product': product
    }
    
    return render(request, 'product25.html', context)


class ProductDetailView(DetailView):
    template_name = 'product25.html'
    model = Product



def search_product(request):
    return render(request, 'search-product2.html')