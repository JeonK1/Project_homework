from django.urls import path

from . import views

urlpatterns = [
    path('', views.main_page),
    path('main/', views.main_page),
    path('make_cover/', views.make_cover),
    # path('make_cover/', views.Makecover.as_view(), name="make_cover"),
    path('make_story/', views.make_story),
    #path('make_story/', views.Makestory.as_view(), name="make_story"),
    path('set_character/', views.set_character),
    path('get_relation_keyprob/', views.get_relation_keyprob),
    path('set_relation/', views.set_relation),
    # path('set_relation/', views.SetRelation.as_view(), name="set_relation"),
    path('set_char_option/', views.set_char_option),
    path('show_gallery/', views.show_gallery),
    path('user_info/', views.user_info),
    #
    path('get_random_character/', views.get_random_character),
    path('get_personality_word/', views.get_personality_word),
    path('update_book/', views.update_book),
    path('get_background/', views.get_background),
    path('read_book/', views.read_book),
]