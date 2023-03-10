// O(n!) — Exponential Time, Factorial
function factorial(n) {
  let num = n;
  if (n === 0) return 1;
  for (let i = 0; i < n; i++) {
    num = n * factorial(n - 1);
  }
  return num;
}

console.log(factorial(10));
