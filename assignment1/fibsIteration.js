/*  Using iteration, write a function fibs which takes a number and returns
    an array containing that many numbers from the fibonacci sequence. Using 
    an example input of 8, this function should return the array 
    [0, 1, 1, 2, 3, 5, 8, 13].
 */
function fibsIteration(number) {
    const fib = [0, 1];
    for (let i = 2; i < number; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib;
}
console.log(fibsIteration(8));
