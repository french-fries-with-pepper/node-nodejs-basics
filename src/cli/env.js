export const parseEnv = () => {
  // Write your code here
  const res = [];
  for (let key in process.env) {
    const prefix = key.slice(0, 4);
    if (prefix === "RSS_") {
      res.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(res.join("; "));
};
parseEnv();
