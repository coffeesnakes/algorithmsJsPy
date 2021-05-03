function ncc(coins) {
  coins.sort((a, b) => a - b);
	console.log(coins);
  let currentChange = 0;
  for (const coin of coins) {
    if (coin > currentChange + 1) return currentChange + 1;
    console.log("current coin: ", coin);
    console.log("current Change: ", currentChange);
    currentChange += coin;
		console.log('current change after:', currentChange)
  }
  return currentChange + 1;
}

let coins1 = [5, 7, 1, 1, 2, 3, 22];
let coins2 = [1, 1, 1, 1, 1];
let coins3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];

ncc(coins2);