from random import *

lotto_num = list(range(1,46))

shuffle(lotto_num)

print(lotto_num)
winning = []


for i in range(1,7):
    print("{0}번째 번호는 ".format(i), end = " ")
    print(lotto_num[i], end=" ")
    print("")
    winning.append(lotto_num[i])

print("당첨 번호 : ", end = "")
print("{0}".format(winning))
print("당첨을 축하드립니다!!")