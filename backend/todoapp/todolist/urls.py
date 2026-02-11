from django.urls import include, path
from . import views

urlpatterns = [
    path('task/', views.TaskView.as_view()),
]