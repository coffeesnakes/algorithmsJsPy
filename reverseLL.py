class LinkedList:
  def __init__(self, value):
			self.value = value
			self.next = None



def reversedLL(head):
  lastNode = None
  currentNode = head
  while currentNode is not None:
    nextNode = currentNode.next
    currentNode.next = lastNode
    lastNode = currentNode
    currentNode = nextNode
  return lastNode
