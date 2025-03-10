from django.shortcuts import render
from django.views.generic import CreateView
from blog.forms import BlogCreateForm
from django.urls import reverse_lazy
from django.contrib.auth.mixins import UserPassesTestMixin


# Create your views here.


def article(request):
    return render(request, "article.html")


def blog(request):
    return render(request, "blog.html")


def search_blog(request):
    return render(request, "search-blog.html")


def create_blog(request):
    return render(request, "create-blog.html")


class BlogCreateView(UserPassesTestMixin, CreateView):
    template_name = "create-blog.html"
    form_class = BlogCreateForm
    success_url = reverse_lazy("home")
    login_url = 'login'

    def form_valid(self, form):
        form.instance.user = self.request.user
        form.save()
        return super().form_valid(form)
    
    def test_func(self):
        return self.request.user.is_superuser
