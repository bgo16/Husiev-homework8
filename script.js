//

const n = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47
];

//

let countPositive = 0;
let countNegative = 0;

const arrPositiveSum = [...n].reduce((acc, a) => {
  if (a > 0) {
    countPositive++;
    return acc + a;
  } else if (a < 0) {
    countNegative++;
  }
  return acc;
}, 0);

console.log(arrPositiveSum, countPositive);

//

const minMax = [...n].sort((a, b) => {
  return a - b;
});
const indexHigh = n.findIndex((a) => a === minMax[minMax.length - 1]);
const indexLow = n.findIndex((a) => a === minMax[0]);

console.log(minMax[0], indexLow, minMax[minMax.length - 1], indexHigh);

//

console.log(countNegative);

//

const evenCount = [...n].filter((a) => {
  return a > 0 && a % 2 === 0;
});
const oddCount = [...n].filter((a) => {
  return a > 0 && a % 2 !== 0;
});
const positive = evenCount.concat(oddCount);

console.log(evenCount.length, oddCount.length);

//

console.log(
  evenCount.reduce((acc, a) => {
    return acc + a;
  })
);

//

console.log(
  oddCount.reduce((acc, a) => {
    return acc + a;
  })
);

//

console.log(
  positive.reduce((acc, a) => {
    return acc * a;
  })
);

//

const zeroHigh = [...n].fill(0, 0, indexHigh).fill(0, indexHigh + 1);

console.log(zeroHigh);

//
