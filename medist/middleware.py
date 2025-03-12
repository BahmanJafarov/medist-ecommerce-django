from django.utils.deprecation import MiddlewareMixin
from account.models import BlockIpAddress
from django.core.exceptions import PermissionDenied


class GetUserIpsMiddleware(MiddlewareMixin):
    def process_request(self, request):
        ip = request.META.get("REMOTE_ADDR")

        if request.user.is_authenticated and ip:
            # Ensure 'ips' is loaded from the database
            if not request.user.ips:
                request.user.ips = []

            # Only add IP if it's not already in the list
            if ip not in request.user.ips:
                request.user.ips.append(ip)
                request.user.save(update_fields=["ips"])


class BlockUserIpAddressMiddleware(MiddlewareMixin):
    def process_request(self, request):
        ip = request.META.get("REMOTE_ADDR")

        if BlockIpAddress.objects.filter(ip_address=ip).exists():
            raise PermissionDenied("Access denied: Your IP address has been blocked.")
