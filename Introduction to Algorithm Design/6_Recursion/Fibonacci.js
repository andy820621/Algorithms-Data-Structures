// Write a function that takes an integer N as an input and returns the Nth number in Fibonacci Sequence.

// F = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....]

function fibonacci(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return (n = 1);
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6));
