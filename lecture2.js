
/*
* 1. explain the special meaning of the following special characters
\0 the null character - that is a character with all bits set to zero
\n new line is used to move the carriage down
\r carriage return is used to move the carriage back to the left side of the page
\v vertical tab matches any character considered vertical whitespace; this includes the platform's carriage return and line feed characters (newline) plus several other characters
\t is used to excape sequence in an horizontal tab
\backspace \b is a nondestructive backspace. It moves the cursor backward, but doesn't erase what's there
\f form feed means advance downward to the next "page". It was commonly used as page separators, but now is also used as section separators
*/




/*
* 2.Please combine those two array together as one array by using concate:
* var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
* var arr2 = ['Thursday', 'Friday', 'Saturday']

console.log(arr1.concate(arr2));

*/
/*
* 3.Please combine those three array together as one array by only using concate() function once:
* var arr1 = ['Sunday', 'Monday']
* var arr2 = ['Tuesday', 'Wednesday']
* var arr3 = ['Thursday', 'Friday', 'Saturday']

console.log(arr1.concate(arr2, arr3));



*/
/*
* 4. what is the result(output of following code):
* var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
* console.log(arr.sort());
* console.log(arr);

['ashwin', 'Enoch', 'jerry', 'lars', 'mike', 'Todd', 'Yaw'];



*/
/*
* 5. what is the result(output of following code):
* var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
* console.log(arr.sort());
* console.log(arr);

[1, 2, 3, 'apple', 'black', 'orange', 'test']




*/
/*
* 6. Please remove mike, jerry, and Enoch from the following array by using slice
* var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];

console.log(arr.splice()

*/
/*
* 7. what is the result(output of following code):
* var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
* console.log(arr.slice(-3, -1));
* console.log(arr);

['Yaw', 'Enoch']



*/
/*
* 8. what is the result(output of following code):
* var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
* console.log(arr.slice(2));
* console.log(arr);
*/



var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(2)); //['mike', 'jerry', 'Yaw', 'Enoch', lars]
 console.log(arr); //['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']



/*
* 9. what is the result(output of following code):
* var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
* console.log(arr.slice(-2));
* console.log(arr);
*/

var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(-2)); // ['Enoch', 'lars']
 console.log(arr); //['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']



/*
* 10. convert the following function to function expression:
* function addTwoNumber (num1, num2) {
* return num1 + num2;
* }
*
* and invoke the function expression to caluate the result of 256 + 532




    var addTwoNumber = function(num1, num2) {
        return num1 + num2;
    }

    console.log(addTwoNumber(256, 532));



*/
/*
* 11. create an immediately invoked function expression
* store the iife within a variable and call it
*/


/*
* 12. you have following objects:
* var person1 = {
* name: 'ashwin'
* };
*
* var person2 = {
* name: 'lars'
* };
*
* function namer() {
* return this.name;
* }
*
* use bind function here to make namer() function to call 'ashwin'
* and lars
*/
/*
* 12. you have following object:
* var number = {
* x: 22,
* y: 33
* };
*
* var count = function() {
* console.log(this.x + this.y);
* }
* a. what is the result when we invoke count()?
* b. use bind on function expression to make this work.
*/
/*
* 13. you have following objects:
* var person1 = {
* firstName: 'ashwin'
* lastName: 'Yaw'
* };
*
* var person2 = {
* firstName: 'lars',
* lastName: 'Mike'
* };
*
* function hello(greeting) {
* console.log(greeting + ' ' + this.firstName + '' + lastName);
* }
*
* use call methods on function expression to make this work.
*/

var hello = function(greeting) {
    console.log(greeting + ' ' + this.firstName + ' '+ lastName);
}
hello.bind(person1)('hello');



/*
* 14. We have a following string:
* var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
*
* please write a function to change the first letter of every word to upper case.

function firstCharOfWordToUpper(str) {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

    }

    return splitStr.join(' ');
