from django.db import models
from django.conf import settings

# Create your models here.

class Todo(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                on_delete=models.CASCADE, related_name="todo", null=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due_date = models.DateTimeField(blank=True, null=True)
    priority = models.CharField(
        max_length=20,
        choices=[
            ('low','Low'),
            ('medium','Medium'),
            ('high','High'),
        ],
        default='medium'
    )


    def __str__(self):
        return self.title
    




