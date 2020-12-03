from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

# Create your models here.
class UserInfo(models.Model):
    UserNo = models.OneToOneField(User, on_delete=models.CASCADE)
    Birth = models.IntegerField(null=True)
    RegisterDateTime = models.DateTimeField()

class BookElement(models.Model):
    display = models.CharField(max_length=200)
    imgUrl = models.CharField(max_length=200)
    width= models.CharField(max_length=200)
    height = models.CharField(max_length=200)
    top = models.CharField(max_length=200)
    left = models.CharField(max_length=200)
    elementId = models.IntegerField()

class BookPage(models.Model):
    id = models.AutoField(primary_key=True)
    backgroundUrl = models.CharField(max_length=200)
    context = models.CharField(max_length=200)
    elements = models.ManyToManyField(BookElement)

class BookInfo_bookPages(models.Model):
    bookinfo_id = models.IntegerField()
    bookpage_id = models.IntegerField()

class Bookpages_elements(models.Model):
    bookpage_id = models.IntegerField()
    bookelement_id = models.IntegerField()

# class elements_BookPage(models.Model):
#     bookpage_id2 = models.IntegerField()
#     bookelement_id2 = models.IntegerField()

class BookInfo(models.Model):
    BookNo = models.AutoField(primary_key=True)
    #UserNo = models.ForeignKey(User, on_delete=models.CASCADE)
    BookTitle = models.CharField(max_length=30)
    bookPages = models.ManyToManyField(BookPage) #첫번째 페이지가 표지랑 제목 있음
    typeCnt = models.IntegerField(null=True)
    wordCnt = models.IntegerField(null=True)
    #CreateDateTime = models.DateTimeField()
    ModifyDateTime = models.DateTimeField(null=True)

class WordType(models.Model):
    typeEnum = models.IntegerField(primary_key=True)
    TypeName = models.CharField(max_length=15)

class WordList(models.Model):
    WordNo = models.AutoField(primary_key=True)
    WordType = models.ForeignKey(WordType, on_delete=models.CASCADE)
    WordContext = models.CharField(max_length=10)

class CharList(models.Model):
    CharNo = models.AutoField(primary_key=True)
    CharPic = models.CharField(max_length=50)

class BackList(models.Model):
    BackNo = models.AutoField(primary_key=True)
    BackPic = models.CharField(max_length=50)
    UserNo = models.ForeignKey(User, null=True, default=None, on_delete=models.CASCADE)

class BookTextList(models.Model):
    index = models.AutoField(primary_key=True)
    BookNo = models.ForeignKey(BookInfo, on_delete=models.CASCADE)
    Page = models.IntegerField()
    Text = models.CharField(max_length=200)

class BookBackList(models.Model):
    index = models.AutoField(primary_key=True)
    BookNo = models.ForeignKey(BookInfo, on_delete=models.CASCADE)
    Page = models.IntegerField()
    BackNo = models.ForeignKey(BackList, null=True, on_delete=models.SET_NULL)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['BookNo', 'Page'], name='unique')
        ]

class BookContetnsList(models.Model):
    index = models.AutoField(primary_key=True)
    BookNo = models.ForeignKey(BookInfo, on_delete=models.CASCADE)
    Page = models.IntegerField()
    CharNo = models.ForeignKey(CharList, null=True, on_delete=models.SET_NULL)
    X = models.DecimalField(decimal_places=2, max_digits=4, default=0)
    Y = models.DecimalField(decimal_places=2, max_digits=4, default=0)
    Scale = models.DecimalField(decimal_places=2, max_digits=4, default=10)
    Rotation = models.DecimalField(decimal_places=2, max_digits=4, default=0)
    Reversed = models.BooleanField(default=False)