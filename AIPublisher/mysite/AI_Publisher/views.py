from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'AI_Publisher/login_page.html')

def main_page(request):
    return render(request, 'AI_Publisher/main_page.html')

def make_cover(request):
    return render(request, 'AI_Publisher/make_cover.html')

def make_story(request):
    return render(request, 'AI_Publisher/make_story.html')

def set_relation(request):
    return render(request, 'AI_Publisher/set_relation.html')

def set_character(request):
    return render(request, 'AI_Publisher/set_character.html')

def set_char_option(request):
    return render(request, 'AI_Publisher/set_char_option.html')

def show_gallery(request):
    return render(request, 'AI_Publisher/show_gallery.html')
# Create your views here.
