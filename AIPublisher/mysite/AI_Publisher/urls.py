from django.urls import path

from . import views

urlpatterns = [
    path('', views.main_page),
    path('main/', views.main_page),
    path('make_cover/', views.make_cover),
    path('make_story/', views.make_story),
]