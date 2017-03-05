
var min = -50;
var max = 50;
var N = 28;

var A = [];
var sum = 0;

for (var i = 0; i < N; i++){
  // create new element of array
  A[i] = (Math.floor(Math.random() * (max - min) + min));
  // check if the number meets the condition
  if (isPrime(i) && isOdd(A[i]) && isPositive(A[i])) {
    sum += A[i];
  }
}

console.log('sum = ' + sum);

function isPrime(number) {
  if (isNaN(number) || !isFinite(number) || number%1 || number<2) 
    return false; 
  var m=Math.sqrt(number);
  for (var i = 2; i <= m; i++) 
    if (number%i === 0) 
      return false;
  return true;
}

function isOdd(number) {
  if (isNaN(number) || !isFinite(number) || number%1) 
    return false;
  if (number%2) 
    return true;
  else return false;
}

function isPositive(number) {
  if (isNaN(number) || !isFinite(number)) 
    return false;
  if (number > 0) 
    return true;
  else return false;
}
