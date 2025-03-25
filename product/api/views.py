from product.models import ProductCategory, Product
from django.http import JsonResponse
from product.api.serializers import (
    ProductCategorySerializer,
    ProductSerializer,
    ProductCreateSerializer,
)
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


def categories(request):
    categories = ProductCategory.objects.all()
    serializer = ProductCategorySerializer(categories, many=True)

    return JsonResponse(data=serializer.data, safe=False)


class ProductListAPIView(ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ProductCreateSerializer
        return self.serializer_class


class ProductUpdateAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProductCreateSerializer
    queryset = Product.objects.all()


@api_view(http_method_names=["GET", "POST"])
def products(request):

    if request.method == "POST":
        serializer = ProductCreateSerializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(data=serializer.data, safe=False, status=201)
        return JsonResponse(data=serializer.errors, safe=False, status=400)

    products = Product.objects.all()
    serializer = ProductSerializer(products, context={"request": request}, many=True)

    return JsonResponse(data=serializer.data, safe=False)


@api_view(http_method_names=["PUT", "PATCH"])
def product_update(request, pk):

    if request.method == "PUT":
        product = Product.objects.get(id=pk)
        serializer = ProductCreateSerializer(
            data=request.data, instance=product, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(data=serializer.data, safe=False, status=201)
        return JsonResponse(data=serializer.errors, safe=False, status=400)

    if request.method == "PATCH":
        product = Product.objects.get(id=pk)
        serializer = ProductCreateSerializer(
            data=request.data,
            partial=True,
            instance=product,
            context={"request": request},
        )
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(data=serializer.data, safe=False, status=201)
        return JsonResponse(data=serializer.errors, safe=False, status=400)

    products = Product.objects.all()
    serializer = ProductSerializer(products, context={"request": request}, many=True)

    return JsonResponse(data=serializer.data, safe=False)
