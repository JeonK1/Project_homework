import random

nums = []
while True:
    rand_num = random.randint(1, 45) # 1 ~ 45
    if rand_num not in nums:
        nums.append(rand_num)

    if len(nums) == 6:
        break

print('뽑은 숫자 : %s' % nums)