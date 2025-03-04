from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse_lazy
from product.models import *
from django.views.generic import DetailView, ListView
from product.forms import ProductReviewForm
from django.views.generic.edit import FormMixin

# Create your views here.


class CollectionCategoryView(ListView):
    template_name = "collection-category.html"
    model = Product
    context_object_name = "products"
    paginate_by = 5

    def get_queryset(self):
        """Filter products based on category_id or sub_category_id."""
        category_id = self.kwargs.get("category_id")
        sub_category_id = self.kwargs.get("sub_category_id")

        if sub_category_id:
            return Product.objects.filter(category_id=sub_category_id)
        elif category_id:
            return Product.objects.filter(category__parent_id=category_id)
        else:
            return Product.objects.all()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["category"] = ProductCategory.objects.all()
        return context


# def collection_category(request, category_id=None, sub_category_id=None):

#     # If a subcategory_id is passed, filter by that subcategory
#     if sub_category_id:
#         products = Product.objects.filter(category_id=sub_category_id)
#     # If a category_id is passed, filter by that category's subcategories
#     elif category_id:
#         products = Product.objects.filter(category__parent_id=category_id)
#     # Show all products if no category_id or sub_category_id is provided
#     else:
#         products = Product.objects.all()

#     context = {
#         "products": products,
#     }

#     return render(request, "collection-category.html", context)


def product_comparison(request):
    return render(request, "product-comparison4.html")


# def product(request, pk):

#     product = get_object_or_404(Product, id=pk)

#     user = request.user

#     # if product is in the list, remove it to prevent duplicate.
#     if pk in user.product_ids:
#         user.product_ids.remove(pk)
#     # add product to the list
#     user.product_ids.insert(0, pk)

#     # take most recent 3 products
#     product_ids = user.product_ids[:3]
#     recent_products = Product.objects.filter(id__in=product_ids)

#     context = {"product": product, "recent_products": recent_products}

#     return render(request, "product25.html", context)


class ProductDetailView(FormMixin, DetailView):
    model = Product
    template_name = "product25.html"
    form_class = ProductReviewForm

    def get_context_data(self, **kwargs):

        user = self.request.user
        product = self.get_object()  # Get the current product

        context = super().get_context_data(**kwargs)
        context["reviews"] = ProductReview.objects.filter(product=product)

        # Update recent viewed products for user
        if user.is_authenticated:
            # Ensure user has a product_ids list
            product_list = user.product_ids if user.product_ids else []

            # Remove product ID if already exists (to avoid duplicates)
            if product.id in product_list:
                product_list.remove(product.id)

            # Add the product to the front of the list
            product_list.insert(0, product.id)

            user.product_ids = product_list

            # Save updated product list to the database
            user.save(update_fields=["product_ids"])

            # Keep only the most recent products
            product_ids = product_list[:5]

            # Fetch products and sort them manually
            recent_products = sorted(
                Product.objects.filter(id__in=product_ids),
                key=lambda p: product_ids.index(p.id),
            )

            # Fetch product reviews
            context["recent_products"] = recent_products

        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()

        if form.is_valid():
            review = form.save(False)
            review.product = self.object
            review.user = self.request.user
            form.save()
            return redirect(reverse_lazy("product", kwargs={"pk": self.object.id}))


def search_product(request):
    return render(request, "search-product2.html")
