#로또추첨프로그램

num=[]


from random import*

for i in range(0,7):
 num.insert(i,randint(1,45))
 
 lotto = set(num)
 duplenum = i-len(lotto)
 if duplenum!= 0 :
     i=i-1



print("로또번호는 {} + {} 입니다." .format(num[:6],num[6:7]))


