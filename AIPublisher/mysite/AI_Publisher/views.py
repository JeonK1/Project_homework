from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import ListView
from .models import CharList

def index(request):
    return render(request, 'AI_Publisher/login_page.html')

def main_page(request):
    return render(request, 'AI_Publisher/main_page.html')

def make_cover(request):
    return render(request, 'AI_Publisher/make_cover.html')

def make_story(request):
    return render(request, 'AI_Publisher/make_story.html')

# def set_relation(request):
#     return render(request, 'AI_Publisher/set_relation.html')

def set_character(request):
    return render(request, 'AI_Publisher/set_character.html')

def set_char_option(request):
    return render(request, 'AI_Publisher/set_char_option.html')

def show_gallery(request):
    return render(request, 'AI_Publisher/show_gallery.html')
# Create your views here.

class SetRelation(ListView):
    template_name = "AI_Publisher/set_relation.html"
    model = CharList

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        #dummy data
        charList = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg"]
        charMain = "4.jpg"
        card_pos = ['사이좋아요', '아주 좋아요', '약간 좋아요']
        card_neu = ['모르는 사이', '애매한듯']
        card_neg = ['사이안좋음', '아주 안좋아요', '약간 안좋아요']

        context['charList'] = charList
        context['charMain'] = charMain
        context['card_pos'] = card_pos
        context['card_neu'] = card_neu
        context['card_neg'] = card_neg
        return context