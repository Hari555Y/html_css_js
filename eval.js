//functionalities of eval functioon and why not to use it...

// in case the argument is a string returns string
console.log(eval('2 + 2'));
// expected output: 4 as string

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2   but but but it here returns the string object instead of the expected string
// its solution is to first define the string object and then pass it as string in the eval funtion.

const exp = new String('2+2');
console.log(eval(exp.toString()));
// this will just return the expected ans that is 4;

console.log(eval('2 + 2') === eval('4'));
// expected output: true it returns true because we are just comparing equal strings

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false  because they are different.
