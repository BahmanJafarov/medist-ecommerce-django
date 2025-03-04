from django import forms
from product.models import *


class ProductAdminForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = "__all__"
        widgets = {"tags": forms.CheckboxSelectMultiple()}


class ProductReviewForm(forms.ModelForm):

    class Meta:
        model = ProductReview
        fields = ("message",)
        widgets = {
            "message": forms.Textarea(
                attrs={
                    "class": "w-100",
                    "placeholder": "Write your review",
                    "rows": 10,
                }
            )
        }
