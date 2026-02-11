from django.shortcuts import render
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

# GET and POST Task
class TaskView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer