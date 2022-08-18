const now = new Date(Date.now());
console.log('the time is');
console.log(now.toDateString());

// specific date (year, month, day, hour, minute)
const bday = new Date(2002, 8, 29, 14, 2);
console.log('my birthday is');
console.log(bday.toDateString());

// getTime() method returns number of milliseconds since January 1, 1970
const a = new Date();
console.log(a.getTime());

// getFullYear() method returns the year of a date as a four digit number
const b = new Date();
console.log(b.getFullYear());

// getMonth() method returns the month of a date as a number
const c = new Date();
console.log(c.getMonth());

// setFullYear() method sets the year of a date object
const d = new Date();
console.log(d.setFullYear());
