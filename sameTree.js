 // @param {TreeNode} p
 // @param {TreeNode} q
 // @return {boolean}


const isSameTree = function (p, q) {
	if (p === null && q === null) return true
	if (p === null || q === null || q.val !== p.val) return false
	return isSameTree(p.left, q.left) && isSameTree (p.right, q.right)
}