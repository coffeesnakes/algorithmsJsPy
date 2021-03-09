def reverse_integer(x):
	string = str(x)

	if string[0] == '-':
		return int('-'+string[:0:-1])
	else:
		return int(string[::-1])

print(reverse_integer(-7331))
print(reverse_integer(867))