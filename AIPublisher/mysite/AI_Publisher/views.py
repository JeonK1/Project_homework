from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'AI_Publisher/login_page.html')

def main_page(request):
    return render(request, 'AI_Publisher/main_page.html')

def select_character(request):
    return render(request, 'AI_Publisher/select_character.html')

def setting_character(request):
    return render(request, 'AI_Publisher/setting_character.html')

def setting_relation(request):
    return render(request, 'AI_Publisher/setting_relation.html')

def story_make(request):
    return render(request, 'AI_Publisher/story_make.html')

def cover_make(request):
    return render(request, 'AI_Publisher/cover_make.html')

def gallery(request):
    return render(request, 'AI_Publisher/gallery_list.html')
# Create your views here.
