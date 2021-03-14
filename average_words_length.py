sentence1 = " Howdy, I am a cowboy... I like to ride horses."
sentence2 = " I can't believe it's not butter! Shall we cook?"

def averageLength(sentence):
	for p in "!?',;.":
		sentence = sentence.replace(p, '')
	words = sentence.split()
	return round(sum(leng(word) for word in words)/len(words),2)

print(solution(sentence1))
print(solution(sentence2))