from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from todo.models import Todo
# Create your views here.

def index(request):
    context = {'message': "Application allows user to save their todos.."}
    return render(request, "todo/index.html", context)

def add_todo(request):
    context = {"message": "Add your todo here.."}
    return render(request, "todo/add_todo.html", context)

def process_data(request):
    if request.method == 'POST':
        todo_title = request.POST.get("title")
        todo_description = request.POST.get("description")
        pass
    pass

def list_todos(request):
    all_todos = Todo.objects.all()
    context = {"objects": all_todos}
    return render(request, "todo/list_todos.html", context)
