from django.test import TestCase, Client
from .models import Contact
from django.urls import reverse_lazy

# Create your tests here.


class TestContactView(TestCase):

    @classmethod
    def setUpClass(cls):
        cls.url = reverse_lazy("contact-us")
        cls.client = Client()

    def test_url(self):
        self.assertEqual(self.url, "/en/contact-us/")

    def test_response_status(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

    def test_response_template(self):
        response = self.client.get(self.url)
        self.assertTemplateUsed(response, "contact-us3.html")

    @classmethod
    def tearDownClass(cls):
        pass


class TestContactModel(TestCase):

    @classmethod
    def setUpClass(cls):
        cls.data = {
            "full_name": "John Doe",
            "phone": "035468541",
            "email": "john@gmail.com",
            "message": "sample message",
        }
        cls.contact = Contact.objects.create(**cls.data)

    def test_create(self):
        contact = Contact.objects.first()
        self.assertEqual(self.contact, contact)

    @classmethod
    def tearDownClass(cls):
        pass
