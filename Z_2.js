
var L = 14;

var b = [1, 2, 3, 4];

var count = 0;

for (var i1 = 0; i1 < Math.floor(L / b[0]); i1++) {
  for (var i2 = 0; i2 < Math.floor(L / b[1]); i2++) {
    for (var i3 = 0; i3 < Math.floor(L / b[2]); i3++) {
      for (var i4 = 0; i4 < Math.floor(L / b[3]); i4++) {
        if (i1 * b[0] + i2 * b[1] + i3 * b[2] + i4 * b[3] == L) count++;
      }
    }
  }
}

console.log(count);
