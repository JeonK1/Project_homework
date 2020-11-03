from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('main/', views.main_page),
    path('main/select_character/', views.select_character),
    path('main/setting_character/', views.setting_character),
    path('main/setting_relation/', views.setting_relation),
    path('main/gallery/', views.gallery),
]