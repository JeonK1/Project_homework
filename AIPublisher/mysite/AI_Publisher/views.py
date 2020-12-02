from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import ListView
from .models import WordList
from .models import CharList
from .models import BackList
from .models import BookTextList
from .models import BookContetnsList
from .models import BookInfo, BookPage, BookElement, BookInfo_bookPages

import json

def index(request):
    return render(request, 'AI_Publisher/login_page.html')

def main_page(request):
    return render(request, 'AI_Publisher/main_page.html')

def make_cover(request):
    if request.method == 'POST':
        message = request.POST.get('jsonData')  # POST로 날라온 jsonData 받아주기
        getjson = json.loads(message)  # Json 풀어주기
        bookContetnsList = ["1.png", "2.png", "3.png", "4.png", "5.png"]
        return render(request, 'AI_Publisher/make_cover.html', {'getJSONData': getjson,
                                                                'bookContetnsList': bookContetnsList})

    else:
        # charList = CharList.objects
        bookTextList = BookTextList.objects
        # bookContetnsList = BookContetnsList.objects
        charList = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg"]
        bookContetnsList = ["1.png", "2.png", "3.png", "4.png", "5.png"]
        return render(request, 'AI_Publisher/make_cover.html', {'getJSONData': charList,
                                                                'bookTextList': bookTextList,
                                                                'bookContetnsList': bookContetnsList})
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
        groundKeyword = get_ground_card()
        eventKeyword = get_keyword_card()
        getjson = json.loads(message) #Json 풀어주기
        bookContetnsList = ["1.png", "2.png", "3.png", "4.png", "5.png"]
        return render(request, 'AI_Publisher/make_story.html', {'groundKeyword' : groundKeyword,
                                                                    'eventKeyword' : eventKeyword,
                                                                    'getJSONData' : getjson,
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

def get_keyword_card():
    cards = WordList.objects.filter(WordType=0).order_by('?')[:1]
    return cards[0].WordContext

def get_ground_card():
    cards = WordList.objects.filter(WordType=4).order_by('?')[:1]
    return cards[0].WordContext

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

def get_personality_word(request):
    words = WordList.objects.filter(WordType=4)
    wordlist = []
    for i in range(len(words)):
        wordlist.append(words[i].WordContext)
    return JsonResponse({"result" : wordlist})

def set_character(request):
    return render(request, 'AI_Publisher/set_character.html')

def set_char_option(request):
    message = request.POST.get('jsonData')  #POST로 날라온 jsonData 받아주기
    getjson = json.loads(message) #Json 풀어주기
    print(getjson)
    return render(request, 'AI_Publisher/set_char_option.html', {'getJSONData' : getjson})

def get_background(request):
    if (json.loads(request.GET.get('data')))['personal'] == False:
        backs = BackList.objects.all()
    pathlist = []
    for i in range(len(backs)):
        pathlist.append(backs[i].BackPic)
    print(pathlist)
    return JsonResponse({"result": pathlist})

def show_gallery(request):
    # if request.method == 'POST':
    bookInfos = BookInfo.objects.raw('SELECT * FROM AI_Publisher_bookinfo WHERE length(BookTitle) > 0') # BookTitle 이 공백 아닌 값들 가져오기
    backgroundList = []
    titleList = []
    userbooknum = []
    userbook = []
    for bookInfo in bookInfos:
        no = bookInfo.BookNo # 책 번호
        title = bookInfo.BookTitle
        bookPage = BookInfo_bookPages.objects.filter(bookinfo_id = no)[0]
        myBookCoverPage = BookPage.objects.filter(id = bookPage.bookpage_id)[0]
        coverBackgroundUrl = myBookCoverPage.backgroundUrl
        backgroundList.append(coverBackgroundUrl)
        titleList.append(title)
        userbooknum.append(no)

    print(backgroundList)
    print(titleList)
    print(len(backgroundList))
    userbook.append(len(backgroundList))
    return render(request, 'AI_Publisher/show_gallery.html', {'mybackground': backgroundList,
                                                              'title': titleList,
                                                              'userbook': userbook,
                                                              'userbooknum': userbooknum})

    # else:
    # dummy data
    background = ["Asset 004.png", "Asset 005.png", "Asset 001.png", "Asset 003.png", "Asset 008.png",
                  "Asset 010.png", "Asset 012.png"]
    title = ['어느 평화로운 가을날', '더미 데이터1', '데이터2', '데이터9', '데이터4', '데이터5 데이터6', '데이터3']
    userbook = [7]
    return render(request, 'AI_Publisher/show_gallery.html', {'mybackground': background,
                                                              'title': title,
                                                              'userbook': userbook})

def user_info(request):
    # dummy data
    background = ["Asset 004.png", "Asset 005.png", "Asset 001.png", "Asset 003.png"]
    
    return render(request, 'AI_Publisher/user_info.html',{'background': background})

def update_book(request):
    if request.method == 'POST':
        message = request.POST.get('jsonData')  #POST로 날라온 jsonData 받아주기
        getjson = json.loads(message) #Json 풀어주기

        print(message)
        bookInfo = BookInfo(BookTitle=getjson['BookCover']['context'])
        bookInfo.save()
        ### 책 표지 저장 ###
        # 배경과 내용 #
        coverBgUrl = getjson['BookCover']['background']
        coverContext = getjson['BookCover']['context']
        bookPage = BookPage(backgroundUrl=coverBgUrl, context=coverContext)
        bookPage.save()
        # 주인공 #
        charMain = BookElement(display=getjson['BookCover']['elements'][0]['display'],
                               imgUrl=getjson['mainChar']['url'],
                               width=getjson['BookCover']['elements'][0]['width'],
                               height=getjson['BookCover']['elements'][0]['height'],
                               top=getjson['BookCover']['elements'][0]['top'],
                               left=getjson['BookCover']['elements'][0]['left'])
        charMain.save()
        bookPage.elements.add(charMain)
        bookPage.save()

        # 서브 주인공 #
        charSub = BookElement(display=getjson['BookCover']['elements'][1]['display'],
                              imgUrl=getjson['subChar']['url'],
                              width=getjson['BookCover']['elements'][1]['width'],
                              height=getjson['BookCover']['elements'][1]['height'],
                              top=getjson['BookCover']['elements'][1]['top'],
                              left=getjson['BookCover']['elements'][1]['left'])
        charSub.save()
        bookPage.elements.add(charSub)
        bookPage.save()

        # 기타인물1, 2 #
        for i in range(len(getjson['charList'])):
            charOther = BookElement(display=getjson['BookCover']['elements'][2+i]['display'],
                                    imgUrl=getjson['charList'][i]['url'],
                                  width=getjson['BookCover']['elements'][2+i]['width'],
                                  height=getjson['BookCover']['elements'][2+i]['height'],
                                  top=getjson['BookCover']['elements'][2+i]['top'],
                                  left=getjson['BookCover']['elements'][2+i]['left'])
            charOther.save()
            bookPage.elements.add(charOther)
            bookPage.save()
        bookInfo.bookPages.add(bookPage)  # Todo : 여기 BookNo가 없나봄 여기부터 구현하세요
        bookInfo.save()

        ### 책 내용 저장 ###
        for i in range(len(getjson['BookPages'])):
            # 배경과 내용 #
            tmpCoverBgUrl = ""
            if(getjson['BookPages'][i]['background']!=None):
                tmpCoverBgUrl = getjson['BookPages'][i]['background']
            tmpCoverContext = ""
            if(getjson['BookPages'][i]['context']!=None):
                tmpCoverContext = getjson['BookPages'][i]['context']
            tmpBookPage = BookPage(backgroundUrl=tmpCoverBgUrl, context=tmpCoverContext)
            tmpBookPage.save()
            # 주인공 #
            if(getjson['BookPages'][i]['elements'][0]['display']!=None):
                tmpCharMain = BookElement(display=getjson['BookPages'][i]['elements'][0]['display'],
                                          imgUrl=getjson['mainChar']['url'],
                                          width=getjson['BookPages'][i]['elements'][0]['width'],
                                          height=getjson['BookPages'][i]['elements'][0]['height'],
                                          top=getjson['BookPages'][i]['elements'][0]['top'],
                                          left=getjson['BookPages'][i]['elements'][0]['left'])
                tmpCharMain.save()
                tmpBookPage.elements.add(tmpCharMain)
                tmpBookPage.save()

            # 서브 주인공 #
            if(getjson['BookPages'][i]['elements'][0]['display']!=None):
                tmpCharSub = BookElement(display=getjson['BookPages'][i]['elements'][1]['display'],
                                         imgUrl=getjson['subChar']['url'],
                                          width=getjson['BookPages'][i]['elements'][1]['width'],
                                          height=getjson['BookPages'][i]['elements'][1]['height'],
                                          top=getjson['BookPages'][i]['elements'][1]['top'],
                                          left=getjson['BookPages'][i]['elements'][1]['left'])
                tmpCharSub.save()
                tmpBookPage.elements.add(tmpCharSub)
                tmpBookPage.save()

            # 기타인물1, 2 #
            for j in range(len(getjson['charList'])):
                tmpCharOther = BookElement(display=getjson['BookPages'][i]['elements'][2+j]['display'],
                                          imgUrl=getjson['charList'][j]['url'],
                                          width=getjson['BookPages'][i]['elements'][2+j]['width'],
                                          height=getjson['BookPages'][i]['elements'][2+j]['height'],
                                          top=getjson['BookPages'][i]['elements'][2+j]['top'],
                                          left=getjson['BookPages'][i]['elements'][2+j]['left'])
                tmpCharOther.save()
                tmpBookPage.elements.add(tmpCharOther)
                tmpBookPage.save()
            bookInfo.bookPages.add(tmpBookPage)
            bookInfo.save()
        print(bookInfo)
        return JsonResponse({"result" : "true" })
    else:
        return JsonResponse({"result" : "false" })


def read_book(request):
    return render(request, 'AI_Publisher/read_book.html')

    # message = request.POST.get('jsonData')  #POST로 날라온 jsonData 받아주기
    # getjson = json.loads(message) #Json 풀어주기
    # return render(request, 'AI_Publisher/set_char_option.html', {'getJSONData' : getjson})