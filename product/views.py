from django.shortcuts import get_object_or_404, render
from product.models import *
from django.views.generic import DetailView

# Create your views here.

def collection_category(request, category_id=None, sub_category_id=None):
   
    # If a subcategory_id is passed, filter by that subcategory
    if sub_category_id:
        products = Product.objects.filter(category_id=sub_category_id)
    # If a category_id is passed, filter by that category's subcategories
    elif category_id:
        products = Product.objects.filter(category__parent_id=category_id)
    # Show all products if no category_id or sub_category_id is provided
    else:
        products = Product.objects.all()
        

    context = {
        'products': products,
    }

    return render(request, 'collection-category.html', context)




def product_comparison(request):
    return render(request, 'product-comparison4.html')



def product(request, pk):
    
    product = get_object_or_404(Product, id=pk)
    
    user = request.user
    
    # if product is in the list, remove it to prevent duplicate.
    if pk in user.product_ids:
        user.product_ids.remove(pk)
    # add product to the list
    user.product_ids.insert(0, pk)
    
    # take most recent 3 products
    product_ids = user.product_ids[:3]
    recent_products = Product.objects.filter(id__in=product_ids)
    
    context = {
        'product': product,
        'recent_products': recent_products
    }
    
    return render(request, 'product25.html', context)


class ProductDetailView(DetailView):
    template_name = 'product25.html'
    model = Product



def search_product(request):
    return render(request, 'search-product2.html')