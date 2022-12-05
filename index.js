let number = 7;

partition(7);

function partition(number) {
  let m = 0;
  let result = [];
  createSummond(number, m);
}

function createSummond(number, m) {
  // number = number - 1;
  m = m + 1;
  if (number >= 0) {
    console.log([number, m]);
    return number - createSummond(number - 1, m);
  } else {
    return 1;
  }
}

// First iteration done, now need to be more recursive...
