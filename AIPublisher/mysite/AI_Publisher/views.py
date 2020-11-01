from django.http import HttpResponse


def index(request):
    return HttpResponse("안녕하세요 AI_Publisher에 오신것을 환영합니다.")

# Create your views here.
