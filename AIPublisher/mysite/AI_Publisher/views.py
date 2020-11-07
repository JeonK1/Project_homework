from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'AI_Publisher/login_page.html')


def main_page(request):
<<<<<<< HEAD
    return render(request, 'AI_Publisher/main_page.html')
=======
    return render(request, 'AI_Publisher/')
>>>>>>> c5f95f9da6eefa1fad38104b89db218df637401b


# Create your views here.
