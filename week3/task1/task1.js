var helloworld = "Hello World"
//console.log(helloworld[0]);

//comparing strings
let a = 'a';
let b = 'b';
if (a < b) {
    //true
    console.log (a + ' is less than ' + b);
}   else if (a > b) {
    console.log(a + ' is greater than ' + b);
}   else {
    console.log(a + ' and ' + b + ' are equal.');
}

//lowercase and uppercase
let c = 'c';
let d = 'D';

console.log(c.toUpperCase());
console.log(d.toLowerCase());
console.log(c+d);

// writing long strings
let longString = 
  'This is a long string. ' +
  'It needs to go across multiple lines, ' +
  'otherwise my code is unreadable. ';

console.log(longString);
longString = 
  'This is a long string. \
  It needs to go across multiple lines \
  otherwise my code is unreadable. ';


// concat() joining two or more strings, can be used instead of +
let text1 = "My name is Alessandra"
let text2 = "Colmenares"
let text3 = text1.concat(" ", text2);

// charAt() returns character at a specified position in a string (javascript starts at 0)
let char = text1.charAt(1);

// split() convert string to array
let text = "a,l,e,s,s";
const myArray = text.split(",");