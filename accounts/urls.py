from django.urls import path
from accounts import views

urlpatterns = [
    path("register/"),
    path("login/"),
    path("logout/")
]