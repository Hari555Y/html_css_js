// never use string even though the type coercion works fine here
setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, "1000")     // string convert to 1000


  //but if there are chars then it only converts to 0
  setTimeout(() => {
    console.log("Delayed for 1 second|.");
  }, "1 second")     // 0 sec delay

  setTimeout(() => {
    console.log("Delayed for 1 second||.");
  }, 1000)

  // from the above example we can also see that it is an async function because doesnt stop the execution
  // of other functions there 
  // expected 3 2 1
  setTimeout(() => {console.log("this is the first messagea")}, 5000);
   setTimeout(() => {console.log("this is the second messagea")}, 3000);
   setTimeout(() => {console.log("this is the third messagea")}, 1000);


//   // if they are equal the first one will be printed first.
//   // expected 1 2 3
   setTimeout(() => {console.log("this is the first message")}, 3000);
      setTimeout(() => {console.log("this is the second message")}, 3000);
   setTimeout(() => {console.log("this is the third message")}, 3000);


//   /// here in the func the this value is set to myarr so expected ans recieved
 const myArray = ['zero', 'one', 'two'];
 myArray.myMethod = function (sProperty) {
   console.log(arguments.length > 0 ? this[sProperty] : this);
 };

myArray.myMethod(); // prints "zero,one,two"
 myArray.myMethod(1); // prints "one"

 setTimeout(myArray.myMethod, 1.0*1000); // prints "[object Window]" after 1 second
 setTimeout(myArray.myMethod, 1.5*1000, '1'); // prints "undefined" after 1.5 seconds
// // because this is not set in the settimeout function
 setTimeout.call(myArray, myArray.myMethod, 2.0*1000); // error
 setTimeout.call(myArray, myArray.myMethod, 2.5*1000, 2); // same error
// // using call also not works here

// // can be solved by using a wrapper function
 setTimeout(function(){myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
 setTimeout(function(){myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds

// /// also can be done by using arrows
 setTimeout(() => {myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
 setTimeout(() => {myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds

// // using bind to give the value of this to the function 
// //const myArray = ['zero', 'one', 'two'];
 const myBoundMethod = (function (sProperty) {
     console.log(arguments.length > 0 ? this[sProperty] : this);
 }).bind(myArray);

 myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
 myBoundMethod(1); // prints "one"
 setTimeout(myBoundMethod, 1.0*1000); // still prints "zero,one,two" after 1 second because of the binding
 setTimeout(myBoundMethod, 1.5*1000, "1"); // prints "one" after 1.5 seconds


// // Don't do this i.e. dont pass string literals instead pass 
// // the actual function
 //setTimeout("console.log('Hello World!');", 500);
// // Do this instead
 setTimeout(function() {
   console.log('Hello World!');
 }, 500);


// //////this takes time
 const loggedInUser = 'John';
 function greet(userName) {
  console.log('Welcome ' + userName + '!');
 }
 setTimeout(greet, 8000, loggedInUser);

// // if we pass the arguments directly we will just be using the return value as our callback method
setTimeout(greet(loggedInUser), 20000); // returned quickly