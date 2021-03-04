# binary search only works if the data is sorted.
# generally used to improve upon a linear search (looking through each index one by one)
# 2 pointers are used in this algo, one at the start, one at the end of the sorted array
# each iteration you check the midpoint and determine whether the target is great or less than the middle pointer
# with that information you eliminate half the dataset as possibilities and continue this process until you've found the targ.

def binarySearch(array, target):
    left = 0
    right = len(array)-1

    while(left <= right):
      mid = (left+right)//2

      if(array[mid] == target):
          return mid
      elif(array[mid] < target):
          left = mid+1
      else:
          right = mid-1

      return -1




dataset = [1,2,3,4,5,6,7,8,9]
target = 5

result = binarySearch(dataset, target) #index: 4

if result != -1:
  print('Target found at index %d' % result)
else:
    print('Target not found in the dataset')
