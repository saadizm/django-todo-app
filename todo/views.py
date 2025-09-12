from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from todo.models import Todo
from datetime import datetime
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
        is_completed = False if request.POST.get("option_group") == 'no' else True
        created_at = datetime.now()
        updated_at = datetime.now()
        due_date = request.POST.get("dueDate")
        priority = request.POST.get('priority')
        todo_item = Todo(title = todo_title, description = todo_description, is_completed =is_completed,
                         created_at = created_at, updated_at = updated_at, due_date = due_date, priority = priority)
        todo_item.save()
        return HttpResponseRedirect(reverse("todo:list_todos"))
    else:
        pass
        

def list_todos(request):
    all_todos = Todo.objects.all()
    context = {"all_todos": all_todos}
    return render(request, "todo/list_todos.html", context)
