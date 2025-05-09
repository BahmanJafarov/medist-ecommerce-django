from django.contrib import admin
from product.models import *
from product.forms import ProductAdminForm
from modeltranslation.admin import TranslationAdmin


# Register your models here.


class ProductImageInline(admin.TabularInline):
    model = ProductImage


@admin.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "category", "price", "quantity", "get_tags"]
    list_display_links = ["id", "title"]
    list_editable = ["category", "price", "quantity"]
    list_filter = ["category"]
    list_per_page = 10
    search_fields = ["title", "category__title"]
    inlines = [ProductImageInline]
    form = ProductAdminForm

    def get_tags(self, obj):
        tags = []
        for tag in obj.tags.all():
            tags.append(tag.title)
        return tags


class ProductCatgoryAdmin(TranslationAdmin):
    list_display = ("title",)


admin.site.register(ProductCategory, ProductCatgoryAdmin)


admin.site.register(ProductReview)
admin.site.register(ProductTag)
admin.site.register(ProductImage)
