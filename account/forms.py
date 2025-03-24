from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.forms import AuthenticationForm, UsernameField

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
        user.is_active = False
        user.save()
        return user

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password and confirm_password and password != confirm_password:
            raise forms.ValidationError("Passwords do not match!")

        return cleaned_data


class LoginForm(AuthenticationForm):
    username = UsernameField(
        max_length=200,
        widget=forms.TextInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "Email",
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


class ProfileUpdateForm(forms.ModelForm):

    current_password = forms.CharField(
        max_length=200,
        widget=forms.PasswordInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "Current password",
                "type": "password",
            }
        ),
        required=False,
    )
    new_password = forms.CharField(
        max_length=200,
        widget=forms.PasswordInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "New password",
                "type": "password",
            }
        ),
        required=False,
    )
    confirm_password = forms.CharField(
        max_length=200,
        widget=forms.PasswordInput(
            attrs={
                "class": "w-100 h-auto p-0 bg-transparent border-0",
                "placeholder": "Confirm password",
                "type": "password",
            }
        ),
        required=False,
    )

    class Meta:
        model = User
        fields = (
            "first_name",
            "last_name",
            "email",
            "phone",
            "dob",
            "gender",
            "image",
        )
        widgets = {
            "first_name": forms.TextInput(
                attrs={
                    "class": "w-100",
                    "placeholder": "First Name",
                }
            ),
            "last_name": forms.TextInput(
                attrs={
                    "class": "w-100",
                    "placeholder": "Last Name",
                }
            ),
            "email": forms.EmailInput(
                attrs={"class": "w-100", "placeholder": "Email", "type": "email"}
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
                    "class": "w-100 img-file",
                    "placeholder": "Image",
                }
            ),
        }
        labels = {
            "first_name": "First Name",
            "last_name": "Last Name",
            "email": "Email Address",
            "phone": "Phone Number",
            "dob": "Date of Birth",
            "gender": "Gender",
            "image": "Image",
        }

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop("user", None)  # Get the User instance
        super().__init__(*args, **kwargs)

    def clean(self):
        cleaned_data = super().clean()
        current_password = cleaned_data.get("current_password")
        new_password = cleaned_data.get("new_password")
        confirm_password = cleaned_data.get("confirm_password")

        # If the user is changing the password
        if current_password:
            if not self.user:
                raise forms.ValidationError("User instance is required.")

            # Check if the current password is correct
            if not check_password(current_password, self.user.password):
                raise forms.ValidationError("Current password is incorrect.")

            # Ensure new password is entered
            if not new_password or not confirm_password:
                raise forms.ValidationError(
                    "New password and confirmation are required."
                )

            # Check if new and confirm passwords match
            if new_password != confirm_password:
                raise forms.ValidationError(
                    "New password and confirm password must match."
                )

            # Validate the new password using Django's built-in validation
            validate_password(new_password, self.user)

        return cleaned_data
