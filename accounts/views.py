from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import login_required
from accounts.forms import RegistrationForm
# Create your views here.

def index(request):
    return render(request, 'accounts/index.html')

def register_account(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("todo:index")
        else:
            print("form is not valid..")
    else:
        form = RegistrationForm()
    return render(request, 'accounts/register.html', {"form": form})

def login_account(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data = request.POST)
        if form.is_valid():
            user = form.get_user()
            print(user)
            login(request, user)
            return redirect("todo:index")
        else:
            print("form is not valid")
    else:
        form = AuthenticationForm()
    return render(request, 'accounts/login.html', {"form": form})

def logout_account(request):
    logout(request)
    return redirect("accounts:login")

@login_required
def profile_account(request):
    if request.user.is_authenticated:
        user = request.user
    else:
        user = None
    return render(request, "accounts/profile.html", {"user": user})
