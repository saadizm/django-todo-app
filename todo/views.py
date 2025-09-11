from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    context = {'message': "Application allows user to save their todos.."}
    return render(request, "todo/index.html", context)

def add_todo(request):
    context = {"message": "Add your todo here.."}
    return render(request, "todo/add_todo.html", context)

def process_data(request):
    pass

def list_todos(request):
    context = {"message": "Your created todos..."}
    return render(request, "todo/list_todos.html", context)
