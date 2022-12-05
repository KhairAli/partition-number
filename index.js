let number = [5, 0];

partition(number);

function partition(number) {
  let m = 0;
  let output = [];
  let a = [2, 6, 4, 3];
  console.log(a.pop());
  console.log(a);
  createSummond(number[0] - 1, m + 1, output);
  console.log(JSON.stringify(output));
}

function createSummond(number, m, output) {
  if (number >= m) {
    output.push([number, m]);
    return createSummond(number - 1, m + 1, output);
  } else {
    output.forEach((elm, index) => {
      let k = 0;
      let output2 = [];
      return createSummond(elm[0] - 1, k + 1, output2);
    });
    // return 1;
  }
}

// First iteration done, now need to be more recursive...
