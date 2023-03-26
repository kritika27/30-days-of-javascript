let challenge='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,2));//30
console.log(challenge.substring(0,2));//30
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3));
//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));//true
//Split the string into an array using split() method
console.log(challenge.split(""));
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(str.split(","));
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript","Python"));
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"));
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a s
//entence with because because because is a conjunction'
let sen='You cannot end a sentence with because because because is a conjunction';
console.log(sen.indexOf("because"));
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sen.lastIndexOf("because"));
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sen.search("because"));
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let temp=" 30 Days Of JavaScript ";
console.log(temp.trim());
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));
//Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern=/a/ig
console.log(challenge.match(pattern));
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str1="30 Days of";
let str2="JavaScript";
console.log(str1.concat(" ",str2));
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));