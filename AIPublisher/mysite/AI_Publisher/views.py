from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import ListView
from .models import WordList
from .models import CharList
from .models import BookTextList
from .models import BookContetnsList
import json

def index(request):
    return render(request, 'AI_Publisher/login_page.html')

def main_page(request):
    return render(request, 'AI_Publisher/main_page.html')

def make_cover(request):
    # charList = CharList.objects
    bookTextList = BookTextList.objects
    # bookContetnsList = BookContetnsList.objects
    charList = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg"]
    bookContetnsList = ["1.png", "2.png", "3.png", "4.png", "5.png"]
    return render(request, 'AI_Publisher/make_cover.html', {'charList' : charList,
                                                            'bookTextList' : bookTextList,
                                                            'bookContetnsList' : bookContetnsList})
# class Makecover(ListView):
#     template_name = "AI_Publisher/make_cover.html"
#     model = CharList
#
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#
#         #dummy data
#         charList = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg"]
#         charMain = "4.jpg"
#         card_pos = ['사이좋아요', '아주 좋아요', '약간 좋아요']
#         card_neu = ['모르는 사이', '애매한듯']
#         card_neg = ['사이안좋음', '아주 안좋아요', '약간 안좋아요']
#
#         context['charList'] = charList
#         context['charMain'] = charMain
#         context['card_pos'] = card_pos
#         context['card_neu'] = card_neu
#         context['card_neg'] = card_neg
#         return context

def make_story(request):
    if request.method == 'POST':
        message = request.POST.get('jsonData')  #POST로 날라온 jsonData 받아주기
        getjson = json.loads(message) #Json 풀어주기
        bookContetnsList = ["1.png", "2.png", "3.png", "4.png", "5.png"]
        return render(request, 'AI_Publisher/make_story.html', {'getJSONData' : getjson,
                                                                'bookContetnsList' : bookContetnsList})
 
    else:
        # charList = CharList.objects
        bookTextList = BookTextList.objects
        # bookContetnsList = BookContetnsList.objects
        charList = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg"]
        bookContetnsList = ["1.png", "2.png", "3.png", "4.png", "5.png"]
        return render(request, 'AI_Publisher/make_story.html', {'getJSONData' : charList,
                                                                'bookTextList' : bookTextList,
                                                                'bookContetnsList' : bookContetnsList})

# 단어 중에서 positive 3개 neutral 2개 negative 3개를 뽑아 리스트로 반환
def get_relation_card():
    cards = WordList.objects.filter(WordType=1).order_by('?')[:3]
    cardlist = []
    for card in cards:
        cardlist.append(card.WordContext)
    cards = WordList.objects.filter(WordType=2).order_by('?')[:2]
    for card in cards:
        cardlist.append(card.WordContext)
    cards = WordList.objects.filter(WordType=3).order_by('?')[:3]
    for card in cards:
        cardlist.append(card.WordContext)
    return cardlist

def set_relation(request):
    #dummy data
    charList = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg"]
    charMain = "4.jpg"
    #card_pos = ['사이좋아요', '아주 좋아요', '약간 좋아요']
    #card_neu = ['모르는 사이', '애매한듯']
    #card_neg = ['사이안좋음', '아주 안좋아요', '약간 안좋아요']
    cardlist = get_relation_card()
    card_pos = cardlist[:3]
    card_neu = cardlist[3:5]
    card_neg = cardlist[5:8]
    #Json 정보확인은 set_char_option.js 의 sendToNextPage()함수를 참조하세요

    if request.method == 'POST':
        message = request.POST.get('jsonData')  #POST로 날라온 jsonData 받아주기
        getjson = json.loads(message) #Json 풀어주기
        allCharList = getjson['charList']
        charMain = ""
        charList = []
        for i in range(len(allCharList)):
            if (allCharList[i]['isMainChar']==1):
                charMain = allCharList[i]
            else:
                charList.append(allCharList[i])
        return render(request, 'AI_Publisher/set_relation.html', {'getJSONData' : getjson,
                                                                    'charList' : charList,
                                                                  'charMain': charMain,
                                                                  'card_pos': card_pos,
                                                                'card_neu': card_neu,
                                                                'card_neg': card_neg})
    else:
        return render(request, 'AI_Publisher/set_relation.html', {'charList' : charList,
                                                                  'charMain': charMain,
                                                                  'card_pos': card_pos,
                                                                'card_neu': card_neu,
                                                                'card_neg': card_neg})

def get_relation_keyprob(request):
    return render(request, 'AI_Publisher/get_relation_keyprob.html')

#
def get_random_character(request):
    exclude = (json.loads(request.GET.get('data')))['exclude']
    required = (json.loads(request.GET.get('data')))['required']
    cards = CharList.objects.all()
    for filename in exclude:
        card = cards.exclude(CharPic=filename)
    cards = cards.order_by('?')[:required]
    pathlist = []
    for i in range(required):
        pathlist.append(cards[i].CharPic)
    return JsonResponse({"result" : pathlist})

def set_character(request):
    return render(request, 'AI_Publisher/set_character.html')

def set_char_option(request):
    message = request.POST.get('jsonData')  #POST로 날라온 jsonData 받아주기
    getjson = json.loads(message) #Json 풀어주기
    return render(request, 'AI_Publisher/set_char_option.html', {'getJSONData' : getjson})


def show_gallery(request):
    return render(request, 'AI_Publisher/show_gallery.html')
