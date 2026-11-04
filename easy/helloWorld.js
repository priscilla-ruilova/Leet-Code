/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
*/
/* PREP
Params: takes in a function
Returns: a string of "Hello World"
Example: createHelloWorld = "Hello World"
Pseudocode: 
- we start with a named function that takes in a function
- this helper function takes in a param with a spread operator
- we return a string that says "Hello World"
*/
//MY SOLUTION: 
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};
