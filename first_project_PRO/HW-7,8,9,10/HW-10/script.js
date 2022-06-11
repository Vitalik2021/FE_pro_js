// ДЗ 10. Fibonacci recursion
const fibonacci = (n) => {
  if( n === 0) {
      console.log(0)
      return [1, 0];
  }
const[n_2, n_1] = fibonacci(n-1);
console.log(n_1 + n_2);
return [n_1, n_1 + n_2];
};
fibonacci(77)