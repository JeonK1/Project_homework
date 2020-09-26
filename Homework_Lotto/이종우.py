from random import *
num_set = range(1, 45+1)
num_set = sample(num_set, 6)
for num in num_set:
    print(num, end="  ")
print()