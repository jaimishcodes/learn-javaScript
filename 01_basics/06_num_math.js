//++++++++++++++++ number +++++++++++++++++++++++++++++++++++

const score = 500
console.log(score);

const balance = new Number(30022344.9996789)
console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toPrecision(7));//jetla num nakhi aetla out put ma aave both decimle or not.
console.log(balance.toLocaleString('en-IN'));

//++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs = absolute is make negative value to positive

console.log(Math.round(4.6)); //round up kare
console.log(Math.ceil(4.4)); //round up kare Uper ni value sathe
console.log(Math.floor(4.9)); //round up kare niche ni value sathe

console.log(Math.sqrt(6));

console.log(Math.min(2, 5, 9)); // small value
console.log(Math.max(2, 5, 9)); // high value

console.log(Math.random()); //random number aape
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

