import heapq
from random import randint

array = [randint(0, 100) for _ in range(10)]
heapq.heapify(array)
print(array)

print(heapq.nsmallest(5, array))
