/*  Now write another function fibsRec which solves the same problem recursively.
    This can be done in just a couple of lines (or 1 if you’re crazy, but don’t 
    consider either of these lengths a requirement… just get it done).
 */
function fibsRecursion(number, a = 0, b = 1) {
    if (number <= 0) return [];
    return [a].concat(fibsRecursion(number - 1, b, a + b));
}

function fibsRecursionOneLinerLOL(number, a = 0, b = 1) {
    return number <= 0
        ? []
        : [a].concat(fibsRecursionOneLinerLOL(number - 1, b, a + b));
}

//=======================================================
function timer(fn, ...args) {
    console.time(fn.name);
    const output = fn(...args);
    console.timeEnd(fn.name);
    return output;
}

console.log(timer(fibsRecursionOneLinerLOL, 80)); // it's really fast, I'm proud
