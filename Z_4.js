 
var S = 'asdfasdfasdf';

var length = S.length;
var factors = getFactors(length);
factors.splice(-1, 1);

var substring = '';

for (var i = 0; i < factors.length; i++) {
  var factor = factors[i];
  substring = S.substring(0, factor);
  
  for (var j = factor; j < length; j += factor) {
    if (S.substring(j, j + factor) != substring) break;
  }

  if (j === length) {
    console.log(substring);
    break;
  }
  console.log('error');
}

function getFactors(integer){
  var factors = [],
  temp = 0;

  for(var i = 1; i <= integer; i++){
    temp = integer / i;

    if(temp === Math.floor(temp)) {
      factors.push(i); 
    }
  }
  return factors;
}
