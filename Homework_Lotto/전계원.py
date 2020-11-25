import numpy as np

doubleChk = np.zeros(45, dtype=int) #중복 방지
cnt = 0 # 뽑은 번호 수
while(True):
	val = np.random.randint(45)+1 # 1 ~ 45
	if(doubleChk[val-1]==0):
		cnt += 1
		print(val)
	if(cnt == 6):
		break