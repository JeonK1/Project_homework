from random import *

def pickLottoNumberBySet():
    my_set = set()
    while len(my_set) < 7:
        my_set.add(randint(1,45))
    my_set = list(my_set)
    print("Lotto: " + str(my_set[:6]) +  " Bonus: " + str(my_set[6]) + "\n")
    return my_set

def pickLottoNumberByShuffle():
    my_list = [i+1 for i in range(45)]
    shuffle(my_list)
    print("Lotto: " + str(my_list[:6]) +  " Bonus: " + str(my_list[6]) + "\n")
    return my_list

pickLottoNumberBySet()
pickLottoNumberByShuffle()