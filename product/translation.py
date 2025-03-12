from modeltranslation.translator import translator, TranslationOptions
from product.models import ProductCategory


class ProductCategoryTrasnlationOptions(TranslationOptions):
    fields = ("title",)


translator.register(ProductCategory, ProductCategoryTrasnlationOptions)
