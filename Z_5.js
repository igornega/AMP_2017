
var min = -50;
var max = 50;
var n = 15;

if (n > max || n < min) throw new Error();

var i = 0;
var array = [];

var res = recursion(array, i);

if (res === -1)
  console.log('error');
else 
  console.log('i = ' + (res + 1));

function recursion (array, i) {
  array[i] = (Math.floor(Math.random() * (max - min) + min));
  if (array[i] === n)
    return i;
  if (array[i] === 0)
    return -1;
  return recursion(array, ++i);
}
