function fibonacci(number, memo) {
	memo = memo || {};

	if (memo[number]) return memo[number];
	if (number <= 1) return 1;

	return memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);

}