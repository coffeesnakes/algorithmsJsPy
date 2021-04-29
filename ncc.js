function nonConstructibleChange(coins) {
  if (coins.length === 0) return 1;
	coins.sort((x,y) => x-y);

	console.log(coins);

  return 1;
}



let coins = [5, 7, 1, 1, 2, 3, 22];
nonConstructibleChange(coins);