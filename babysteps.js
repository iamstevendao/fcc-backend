var sum = process.argv.slice(2).reduce((pre, cur) =>
  (Number(pre) + Number(cur))
)
console.log(sum);
// console.log(process.argv.slice(2));
// console.log(process.argv);