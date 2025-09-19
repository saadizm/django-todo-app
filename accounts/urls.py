from django.urls import path
from accounts import views
app_name = "accounts" 
urlpatterns = [
    path("",views.index, name="index"),
    path("register/",views.register_account,name='register'),
    path("login/", views.login_account, name="login"),
    path("logout/", views.logout_account, name="logout"),
    path("profile/",views.profile_account,name="profile")
]