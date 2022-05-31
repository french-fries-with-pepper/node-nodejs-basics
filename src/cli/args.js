export const parseArgs = () => {
  // Write your code here
  const res = [];
  const n = process.argv.length;
  for (let i = 2; i < n; i++) {
    const propName = process.argv[i].slice(2);
    const propValue = process.argv[i + 1];
    i++;
    res.push(`${propName} is ${propValue}`);
  }
  console.log(res.join(", "));
};
parseArgs();
