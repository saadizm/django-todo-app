from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    context = {'message': "Application allows user to save their todos.."}
    return render(request, "todo/index.html", context)
