from django.urls import path

from todo import views
app_name = "todo" 
urlpatterns = [
    path("", views.index, name="index"),
    path("add/", views.add_todo, name='add_todo'),
    path("list/", views.list_todos, name="list_todos"),
    path("process/", views.process_data, name='process_data'),
    path("edit/<int:id>", views.edit_todo, name="edit_todo"),
    path("delete/<int:id>",views.delete_todo, name="delete_todo"),
    path("process_edit_todo/<int:id>",views.process_edit_todo,name="process_edit_todo")

]