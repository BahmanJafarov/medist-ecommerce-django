from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model


User = get_user_model()


class Command(BaseCommand):
    help = "Used to delete fake users."
    requires_migrations_checks = True
    stealth_options = ("stdin",)
    
    def handle(self, *args, **options):
        users = User.objects.filter(is_active=False)
        users.delete()
