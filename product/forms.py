from django import forms
from product.models import Product


class ProductAdminForm(forms.ModelForm):
    
    class Meta:
        model = Product
        fields = (
            '__all__'
        )
        widgets = {
            'tags': forms.CheckboxSelectMultiple()
        }