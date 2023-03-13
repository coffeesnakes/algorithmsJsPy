def twosum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return None

def threesum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                #these are the actual numbers 
                if nums[i] + nums[j] + nums[k] == target:
                    # these are the indices
                    return [i, j, k]
    return None