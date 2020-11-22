from django.urls import path

from . import views

urlpatterns = [
    path('', views.main_page),
    path('main/', views.main_page),
    path('make_cover/', views.make_cover),
    path('make_story/', views.make_story),
    path('set_character/', views.set_character),
    # path('set_relation/', views.set_relation),
    path('set_relation/', views.SetRelation.as_view(), name="set_relation"),
    path('set_char_option/', views.set_char_option),
    path('show_gallery/', views.show_gallery),
]