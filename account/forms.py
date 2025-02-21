from django import forms
from django.contrib.auth import get_user_model

User = get_user_model()


class RegisterForm(forms.ModelForm):

    confirm_password = forms.CharField(
        max_length=200,
        widget=forms.PasswordInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "Password",
                "type": "password",
            }
        ),
    )

    class Meta:
        model = User
        fields = (
            "first_name",
            "last_name",
            "username",
            "email",
            "dob",
            "gender",
            "image",
            "password",
        )
        widgets = {
            "first_name": forms.TextInput(
                attrs={
                    "class": "w-100 h-auto p-0 bg-transparent border-0",
                    "placeholder": "First Name",
                }
            ),
            "last_name": forms.TextInput(
                attrs={
                    "class": "w-100 h-auto p-0 bg-transparent border-0",
                    "placeholder": "Last Name",
                }
            ),
            "username": forms.TextInput(
                attrs={
                    "class": "w-100 h-auto p-0 bg-transparent border-0",
                    "placeholder": "Username",
                }
            ),
            "email": forms.EmailInput(
                attrs={
                    "class": "w-100 h-auto p-0 bg-transparent border-0",
                    "placeholder": "Email",
                }
            ),
            "dob": forms.DateInput(
                attrs={"class": "w-100", "placeholder": "Date of Birth", "type": "date"}
            ),
            "gender": forms.Select(
                attrs={
                    "class": "w-100",
                    "placeholder": "Gender",
                }
            ),
            "image": forms.FileInput(
                attrs={
                    "class": "w-100 h-auto p-0 bg-transparent border-0",
                    "placeholder": "Image",
                }
            ),
            "password": forms.PasswordInput(
                attrs={
                    "class": "w-100 h-auto p-0 bg-transparent border-0",
                    "placeholder": "Password",
                    "type": "password",
                }
            ),
        }

    def save(self, commit=...):
        user = super().save(commit)
        user.set_password(self.cleaned_data["password"])
        user.save()

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password and confirm_password and password != confirm_password:
            raise forms.ValidationError("Passwords do not match!")

        return cleaned_data


class LoginForm(forms.Form):
    username = forms.CharField(
        max_length=200,
        widget=forms.TextInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "Username",
            }
        ),
    )
    password = forms.CharField(
        max_length=200,
        widget=forms.PasswordInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "Password",
            }
        ),
    )
