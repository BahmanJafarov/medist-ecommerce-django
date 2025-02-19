from django import forms
from .models import Contact


class ContactForm(forms.ModelForm):
    
    class Meta:
        model = Contact
        fields = (
            'full_name',
            'email',
            'phone',
            'message',
        )
        widgets = {
            'full_name': forms.TextInput(attrs={
                'class': 'w-100',
                'placeholder': "Full name"
            }),
            'email': forms.EmailInput(attrs={
                'class': 'w-100',
                'placeholder': "Email"
            }),
            'phone': forms.TextInput(attrs={
                'class': 'w-100',
                'placeholder': "Phone number",
                'autocomplete': "tel"
            }),
            'message': forms.Textarea(attrs={
                'class': 'w-100 height-md-100',
                'placeholder': "Message",
                'autocomplete': "off",
                'rows': "5"
            })
        }
        
    def clean_full_name(self):
        data = self.cleaned_data['full_name'].capitalize()
        return data
        
    def clean(self):
        data = self.cleaned_data
        value = data['email']
        if not value.endswith('gmail.com'):
            raise forms.ValidationError('Email is not accepted. Please enter "gmail" address!')
        return data
    