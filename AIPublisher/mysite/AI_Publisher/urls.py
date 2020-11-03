from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('main/', views.main_page),
    path('main/select_character/', views.select_character),
    path('main/select_character/setting_character/', views.setting_character),
    path('main/gallery/', views.gallery),
]