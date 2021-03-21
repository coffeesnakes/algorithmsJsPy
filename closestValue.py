def closestValBST(tree, target) :
  return seekClosest(tree, target, float("inf"))

def seekClosest(tree, target, closest):
  if tree is None:
			return closest
  if abs(target - closest) > abs(target - tree.value):
   closest = tree.value
   if target < tree.value:
		 	return seekClosest(tree.left, target, closest)
  elif target > tree.value:
    return seekClosest(tree.right, target, closest)
  else:
		return closest