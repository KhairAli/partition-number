let number = 5;

partition(number);

function partition(number) {
  let m = 0;
  let output = [];
  createSummond(number - 1, m + 1, output);
  console.log(JSON.stringify(output));
  output.forEach((elm, index) => {
    let k = 0;
    let output2 = [];
    createSummond(elm[0] - 1, k + 1, output2);
    console.log(JSON.stringify(output2));
  });
}

function createSummond(number, m, output) {
  if (number >= m) {
    output.push([number, m]);
    return createSummond(number - 1, m + 1, output);
  } else {
    return 1;
  }
}

// First iteration done, now need to be more recursive...
