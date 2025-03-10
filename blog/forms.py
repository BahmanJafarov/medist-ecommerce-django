from django import forms
from blog.models import Blog


class BlogCreateForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = ("title", "content", "image", "category")
        widgets = {
            "title": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Title"}
            ),
            "content": forms.Textarea(
                attrs={"class": "form-control", "placeholder": "Content", "rows": 5}
            ),
            "category": forms.Select(attrs={"class": "form-control"}),
        }
