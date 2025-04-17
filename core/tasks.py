import time
from celery import shared_task
from core.models import Subscribe
from product.models import Product
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings


@shared_task
def email_to_subscribers():
    email_list = Subscribe.objects.values_list("email", flat=True)
    products = Product.objects.all()[:3]
    message = render_to_string(
        "email_to_subscribers.html",
        {
            "products": products,
        },
    )
    mail = EmailMultiAlternatives(
        subject="Latest Products",
        body=message,
        to=email_list,
        from_email=settings.EMAIL_HOST_USER,
    )
    mail.content_subtype = "HTML"
    mail.send()


@shared_task
def export_data():
    print("Process Started!")
    time.sleep(4)
    print("Process Ended!")
