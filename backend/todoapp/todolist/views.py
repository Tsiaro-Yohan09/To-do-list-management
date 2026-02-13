from unicodedata import lookup
from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Task
from .serializers import TaskSerializer

# GET and POST Task
class TaskView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
# PUT, PATCH and DELETE data
class TaskDeletePutView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
    lookup_field = "id"