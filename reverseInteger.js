const reversedNumber = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);


	console.log(reversedNumber(7331))
	console.log(reversedNumber(533511))
