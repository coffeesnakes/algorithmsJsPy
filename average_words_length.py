sentence1 = " Howdy, I am a cowboy......a..a.a...a..a..a.....a......y.........a. I like to ride horses."
sentence2 = " I can't believe it's not butter! Shall we cook?"

def averageLength(sentence):
	for p in "!?',;.":
		sentence = sentence.replace(p, '')
	words = sentence.split()
	return round(sum(len(word) for word in words)/len(words),2)

print(averageLength(sentence1))
print(averageLength(sentence2))