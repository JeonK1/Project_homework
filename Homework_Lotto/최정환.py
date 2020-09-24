import random as rd
import numpy as np

lotto = np.array(range(1,46))
rd.shuffle(lotto)
print(lotto[:6])