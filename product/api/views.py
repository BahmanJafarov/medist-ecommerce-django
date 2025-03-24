from product.models import ProductCategory, Product
from django.http import JsonResponse
from product.api.serializers import ProductCategorySerializer, ProductSerializer


def categories(request):
    categories = ProductCategory.objects.all()
    serializer = ProductCategorySerializer(categories, many=True)
    # category_dict = []
    # for category in categories:
    #     if category.parent:
    #         category_dict.append(
    #             {
    #                 "parent": category.parent.id,
    #                 "id": category.id,
    #                 "title": category.title,
    #             }
    #         )
    #     else:
    #         category_dict.append(
    #             {
    #                 "id": category.id,
    #                 "title": category.title,
    #             }
    #         )
    return JsonResponse(data=serializer.data, safe=False)


def products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, context={"request": request}, many=True)

    return JsonResponse(data=serializer.data, safe=False)
