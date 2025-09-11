from django.urls import path

from todo import views
app_name = "todo" 
urlpatterns = [
    path("", views.index, name="index"),
    path("add/", views.add_todo, name='add_todo'),
    path("list/", views.list_todos, name="list_todos"),
    path("process/", views.process_data, name='process_data')

]