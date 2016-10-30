/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 *  Response: It will output the windows object on the console because the this method points to the parent object which in this case is the window object.
 * 
 * 
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 *  
 *  obj.func(); //what is the output? try to explain why.
 *  Response:  Will print the obj  object because 'this' in the function 'func' now points to the obj object not the windows object

 * 
 * 
 *  obj.func.bind(window)(); // what is the output? why?
 *  Response: It will display the windows object because the function 'func' is now bound to the windows object and not 'obj' object
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *  Response: It prints out the windows object because 'this' binds the 'func' to the windows object
 * 
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
   // Response: This will print out the 'people' object because 'func' is now bound to 'people' object


/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
  function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}



/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

  var reGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  reGex.test('dynamic@yahoo.com')
/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */

/*  Response
  For sessionStorage, changes are only available per window (or tab in browsers like Chrome and Firefox). 
  Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted.

  localStorage and sessionStorage both extend Storage. There is no difference between them except for the intended "non-persistence" of sessionStorage.

*/
