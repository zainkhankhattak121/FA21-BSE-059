let firstname = "zainkhan";
let lastname = "Khattak";
let result = firstname + lastname;
console.log(result);
/////CharAt()function////////
console.log(firstname.charAt(2));
//////charcodeAt()/////
let char=firstname.charCodeAt(1);
console.log(char);
//////at()function////
console.log(firstname.at(1));
///////Access [ ]/////
let myarraynew="zain khan khattak";
let rst=myarraynew[3];
console.log(rst);
////////slice//////
console.log("slice function is :"+firstname.slice(2,4));
console.log("slice function is :"+firstname.slice(2));
/////////Substring function//////
console.log(firstname.substring("substring method"+2 ,5));
///////Touppercase() function////////
console.log("Upper case function   : "+firstname.toUpperCase());
///////Tolowercase() function////////
console.log("lower case function   : "+firstname.toLowerCase());
//////Concat()function//////////
console.log(" joins function   "+firstname.concat(" ",lastname));
/////// String trim()////////
let trifun = "            zain     khan     khattak";
console.log("Trim function: " + trifun.trim());
///////// String trimStart() function//////
console.log("Trim start function: " + trifun.trimStart());
//////// String trimEnd() function////////
console.log("Trim end function: " + trifun.trimEnd());
////////String padEnd() function/////////
console.log("Padded end function: " + lastname.padEnd(8, '*'));
//////// String repeat() function///////
console.log("Repeated function: " + firstname.repeat(3));
//////// String replace() function///////////
let repname = firstname.replace("zain", "Ali");
console.log("Replace function: " + repname);
let nameArray = (firstname + " " + lastname).split(" ");
console.log("Splitting function: " + nameArray);
console.log("//***********************************************************************************//");
let numbers=[1,2,3,4,5,6,7,,8,9];
let number2=[11,22,33,44,55,66,77,88,99];
console.log("length of the giver Array is "+numbers.length);
console.log("finding element by index fuction  "+numbers.at(3));
console.log("tostring fuction"+numbers.toString());
console.log("Join Function    : "+numbers.join("*"));
console.log("POP function : "+number2.pop());
console.log("New Array"+number2);
console.log("Push function : "+number2.push(99));
console.log("new Array  "+number2);
console.log("first element remove "+numbers.shift());
console.log("new Array  "+numbers);
console.log("Undo removing "+numbers.unshift(1));
console.log("new Array  "+numbers);
delete number2[2];
console.log("after deletion   "+number2);
console.log("Merging Two Arrays  "+numbers.concat(number2));
let copy = number2.copyWithin(2, 0, 2);
console.log("Array after copyWithin: " + copy);
let splicedArray = numbers.splice(2, 2);
console.log("Array after splice: " + numbers);
let slicedArray = numbers.slice(1, 4);
console.log("Sliced array: " + slicedArray);
let names = ["John", "Doe", "Alice", "Bob", "Eve"];
let numberssss = [2, 5, 6, 7, 4, 7, 3, 7, 8];
let sliceArray = names.slice(3, 5);
names.forEach((element) => {
  console.log("Element:", element);
});
let newarray = names.map((element) => element + " hello");
console.log("Updated array:", newarray);
let fltrarray= numberssss.filter((element) => element % 2 !== 0);
console.log("Filtered array (odd numbers):", fltrarray);
names.splice(0, 6, "saim", "rafi");
console.log("Array after splice:", names);
console.log("Checking  exist in names", names.includes("rio"));
let summm = numberssss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numberss:", summm);
let sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, -4);
console.log("Sum of numbers with initial value -4:", sum2);
console.log("Last element in names:", names[names.length - 1]);
