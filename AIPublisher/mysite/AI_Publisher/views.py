from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'AI_Publisher/login_page.html')


def main_page(request):
    return render(request, 'AI_Publisher/main_page.html')


# Create your views here.
