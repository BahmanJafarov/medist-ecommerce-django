from django.shortcuts import render

# Create your views here.

def cart_drawer_empty(request):
    return render(request, 'cart-drawer-empty.html')

def cart_empty(request):
    return render(request, 'cart-empty.html')

def cart_page(request):
    return render(request, 'cart-page7.html')

def checkout(request):
    return render(request, 'checkout2.html')

def invoice(request):
    return render(request, 'invoice4.html')

def order_complete(request):
    return render(request, 'order-complete.html')

def order_info_cancel(request):
    return render(request, 'order-info-cancel.html')

def order_info_default(request):
    return render(request, 'order-info-default.html')

def order_info_delivered(request):
    return render(request, 'order-info-delivered.html')

def order_info_fulfilled(request):
    return render(request, 'order-info-fulfilled.html')

def order_info_indelivery(request):
    return render(request, 'order-info-indelivery.html')

def order_info_inprogress(request):
    return render(request, 'order-info-inprogress.html')

def order_info_intransit(request):
    return render(request, 'order-info-intransit.html')

def order_info_pickup(request):
    return render(request, 'order-info-pickup.html')

def order_info_unfulfilled(request):
    return render(request, 'order-info-unfulfilled.html')

def order_info(request):
    return render(request, 'order-info.html')

def order(request):
    return render(request, 'order.html')

def track_order(request):
    return render(request, 'track-order.html')

def wishlist_empty(request):
    return render(request, 'wishlist-empty.html')

def wishlist(request):
    return render(request, 'wishlist.html')