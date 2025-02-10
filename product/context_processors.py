from product.models import ProductCategory

def categories_processor(request):
    categories = ProductCategory.objects.filter(parent=None) # Fetch all main categories
    return {'categories': categories} # Return categories in context
    