from django.db.models.signals import post_save
from product.models import Product
from django.dispatch import receiver
from django.utils.text import slugify


@receiver(post_save, sender=Product)
def product_slug(created, instance, *args, **kwargs):
    if created:
        instance.slug = slugify(instance.title) + str(instance.id)
        instance.save()
