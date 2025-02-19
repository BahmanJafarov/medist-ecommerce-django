from django.core.exceptions import ValidationError

def validate_email(value):
    if not value.endswith('gmail.com'):
        raise ValidationError('Email is not accepted. Please enter "gmail" address!')