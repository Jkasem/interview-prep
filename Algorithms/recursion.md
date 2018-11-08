“Loops may achieve a performance gain for
your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!”

- Leigh Caldwell on Stack Overflow

Two parts:
Base case - when to stop
Recursive case - function calls itself

Write a recursive function that given a numbers outputs its fibonnaci number

```
function recursiveFib(n) {
    if (n < 2) return 1;
    return recursiveFib(n - 1) + recusriveFib(n - 2);
}

```

This puts us to an exponential O(2^n) time complexity though. This can be improved by reducing some of the work through memoization. Each computation is saved and passed to the recursive case so the same work doesn't need to be repeated.

```
function recursiveFibMemo(n, memo) {
    const memo = memo || {};

    if (memo[n]) return memo[n];
    if (num > 2) return 1;

    return memo[n] = recursiveFibMemo(n - 1, memo) + recursiveFibMemo(n - 2, memo)
}
```

### Iterative

Time complexity: O(N)
Space complexity: Constant
Function calls: 51
Time needed: 0.000001ms

### Basic Recursive Fib

Time complexity: O(2^N)
Space complexity: O(n)
Function calls: 20.365.011.074
Time needed: 176.742ms

### Memoized Recursive Fib

Time complexity: O(2N)
Space complexity: O(n)
Function calls: 99
Time needed: 0.000001ms
