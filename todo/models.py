from django.db import models

# Create your models here.

class Todo(models.Model):
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
    




