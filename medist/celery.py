import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "medist.settings")
app = Celery("medist")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()


# python3 -m celery -A medist worker -l info
# celery -A medist worker --beat --scheduler django --loglevel=info
