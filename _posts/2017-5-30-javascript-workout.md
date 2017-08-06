---
layout: post
title: JavaScript workout
category: coding
tags: [javascript, freecodecamp, algorithm]
---
Last year I spent two months (August-September, 2016) solving many programming problems at freecodecamp using JavaScript. Recently, when I wanted to review those, I thought it would be better if I have all the exercises with my solutions and notes about those if there is any, in one page. So, in this post I will gather all those freecodecamp code snippets and others for easier review!
<!--more-->


### Reverse a String


```js
function reverseString(str) {
  var a=str.split(''); //split into arrary of character
  a.reverse();
  return a.join('');
}

reverseString("hello");
```

### Factorialize a Number

```js
function factorialize(num) {
  var f=1;
  for(var i=1;i<=num;i++){
    f *=i;
  }
  return f;
}

factorialize(5);
```
 

### Check for Palindromes

```js

function palindrome(str) {
  // Good luck!
  var mset = str.toLowerCase().match(/\w/g); // get a set of A/N characters
  var set =mset.filter(function(v){return v !=="_";}); //filter out _
  var rev =  JSON.parse(JSON.stringify(set)); //deep copy
  rev.reverse();
  
  if(set.join('')===rev.join('')){ return true; }
  else {return false;}
}



palindrome("eye");
```



 
### Find the Longest Word in a String

Return the length of the longest word in the provided sentence. The response should be a number.

```js
function findLongestWord(str) {
  var lset =[];
  var s= str.split(' '); //get the words into array
  
  
  for(var i =0; i<s.length; i++){
    lset.push(s[i].length);
  }
  
  lset.sort(function(a,b){return b-a;}); //sort max to min
  
  
  return lset[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");

```

 

### Title Case a Sentence

```js
// split the sentence to get an array of words
// iterate over each words and apply capitalization
// join the words back to sentence

function titleWords(str){ 
  var cap = str.charAt(0); //get the first letter
  var rest = str.slice(1); //get rest of the word
  
  cap = cap.toUpperCase(); 
  rest = rest.toLowerCase();
  
  return cap.concat(rest); // return title cased word
}



function titleCase(str) {
  var words = str.split(' '); //get words
  
  for(var i=0,l=words.length;i<l;i++){  // Iterate over the words
     words[i]=titleWords(words[i]); // alter the arry with title cased words
  
  }
  
  var titled = words.join(' '); //put the words back into a sentence
  return titled;
}


//Test code
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
```

 

### Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

```js

//1. iterate over main array
//2. for each main arry element find the max number of the innerarry
//   by sort the inner arry using compare funtion
//3. get the max number and push it to a new array//return the new array.

function getMax(arr){
  arr.sort(function(a,b){return b-a;});
  return arr[0];
}

function largestOfFour(arr) {
  var nArr = [];
  
  for(var i=0,l=arr.length;i<l;i++){
    nArr.push(getMax(arr[i]));  
  }
  
  return nArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
```

 

### Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

```js
//use substr
//cut out the string of the length of the match from given string
//check if cut out and match string matches

function confirmEnding(str, target) {
  var cutOut = str.substr(str.length - target.length);
  
  console.log(cutOut);
  
  if(cutOut == target){return true;}
  else { return false;}
  
}

```

 

### Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

```js
//if given number is positive
//for given number of times 
//push the given string to an array
//return the stringified array

function repeatStringNumTimes(str, num) {
  var arr = [];
  
  if(num>0){
    for(var i=0;i<num;i++){
      arr.push(str);
    }
    
    return arr.join('');
  } 
  else{return "";}
}

repeatStringNumTimes("abc", 3);

```

 

### Truncate a string

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

```js
//Truncate a string according to the given length num

//If the num is equal or greater than the string length then return the string as it is.
//If the num greater than 3 then return string with length of (num-3) and append three dots (...)
//If the num is less than or equal to 3 , return string with length of num and append (...)

function truncateString(str, num) {
  if(num >= str.length ){return str;}
  else if (num > 3){
    return str.substr(0, num - 3).concat("...");
  }
  else {
    return str.substr(0, num).concat("...");
  }
  return str;
}


truncateString("A-tisket a-tasket A green and yellow basket", 11);

```

 

### Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```js
// Split an array into an array of smaller arrays
// keep moving over the given array upto the amount of size

function chunkArrayInGroups(arr, size) {
  var out = [];
    
  for(var i=0,l=arr.length;i<l;i += size){
      
      var bit = [];
      for(var j=0;j<size;j++){
        var t = arr[i+j];
        if (t !== undefined) { bit.push(t); }
        else {break;}
      }
      out.push(bit);    
  }
  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

 

### Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head. The head means the beginning of the array, or the zeroth index.

```js
function slasher(arr, howMany) {
 
  if(howMany === 0) {return arr;}
  else if(arr.length<=howMany){return [];}
  else{
    return arr.slice(howMany);
  }
  
}

slasher([1, 2, 3], 2);

```

 

### Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

```js
function mutation(arr) {
  var src = arr[0].toLowerCase();
  var match = arr[1].toLowerCase();
  var state = true;
  
  for(var i=0,l=match.length;i<l;i++){
    if(src.indexOf(match[i]) === -1) {state = false;}
  }
  
  return state;
}

mutation(["hello", "hey"]);

```
 

### Falsy Bouncer

Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

```js
function bouncer(arr) {
  
  var a = arr.filter(function(val){
   
    if (val === "" ||
        val === false ||
        val === null ||
        val === 0 ||
        val === undefined ||
        val.toString() === "NaN"
       ){return false;}
    else {return true;}
    
  });
  return a;
}

bouncer([7, "ate", "", false, 9]);

```

 

### Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

```js
function destroyer() {
  var arr = arguments[0];
  var items = Array.from(arguments);
  
  function c(val){
      if(val===items[i]){return false;}
      else {return true;}
    }
  
  for(var i =1,l=items.length;i<l;i++){
    arr = arr.filter(c);
  }
  
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```

 

### Where do I belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

```js
function getIndexToIns(arr, num) {
  arr.sort(function(a,b){return a-b;}); //sort incremetally
  var index = 0;
  for(var i=0,l=arr.length;i<l;i++){
    if(num>arr[i] ){
      index = i+1;
      
    }
    else if (num==arr[i]){index = i;}
  }
  
  return index;
}

getIndexToIns([40, 60], 50);

```

 

### Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

```js
//Remember strings are immutable! :-)

function rot13(str) { // LBH QVQ VG!
  var d = "";
  for(var i=0,l=str.length;i<l;i++){
    var code= str.charCodeAt(i);
        
    if(code>=65 && code<=77){ //A to M
      d = d.concat(String.fromCharCode(code+13));
      
    }
    else if(code>=78 && code<=90){ //N to Z
      d = d.concat(String.fromCharCode(code-13));
    }
    else {d = d.concat(str.charAt(i));}
  }
  
  return d;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

```
 

### Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.

```js
function sumAll(arr) {
  var sum = 0;
  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);
  
  for(var i = min;i<=max;i++){
    sum += i;
  }
    
  return sum;
}

sumAll([1, 4]);

```

 
### Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```js
// iterate over array 1
// for each element, iterate over array2
// if found delete from BOTH array
// concatenate both array and remove undefined holes

function diffArray(arr1, arr2) {
  var out = [];
  
  for(var i=0,l=arr1.length;i<l;i++){ 
    
    for(var j=0,k=arr2.length;j<k;j++){
      
      if(arr1[i] == arr2[j]){
        delete arr1[i];
        delete arr2[j];
      }
    }   
  }
  
  out = arr1.concat(arr2);
  out = out.filter(function(val){
    return val !== undefined;
  });
  
  return out;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```

 
### Roman Numeral Converter

Convert the given number into a roman numeral. All [roman numerals](http://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.

```js

// create a lookup table
// convert the number to an array of character (toString,split)
// reverse the array and iterate over the array
// for each element, look it up to the table and
// insert it to a string from front (unshift).
// check for zero content and index 3 for range 1-3
// Limitation: only works in the range of 0-3999


function convertToRoman(num) {
  var lookup = {
    1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",
    10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC",
    100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",
    1000:"M",2000:"MM",3000:"MMM"
    };

  var arr = num.toString().split('').reverse();
  var roman = [];
    
  if(arr.length>4){console.log("Only works in the range: 0-3999"); return -1;}
  else {
      for(var i =0;i<=3;i++){
        if(arr[i] !== 0 && lookup[arr[i]] !== undefined){

        roman.unshift(lookup[arr[i]*Math.pow(10,i)]);
        }
      }
  }
  
 return roman.join('');
}

convertToRoman(36);

```

 
### Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

```js
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  for(var i=0,l=collection.length;i<l;i++){
    var state = true;
    Object.keys(source).forEach(function (a){
      if(collection[i].hasOwnProperty(a)){
        if(collection[i][a] !== source[a]){
          state = false;
        }
      }
      else {
      state = false;
    }
    });
    if(state){arr.push(collection[i]);}
  }
  
  // Only change code above this line
  return arr;
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```

 
### Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.  First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after). NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

```js
function myReplace(str, before, after) {
  if(before.charAt(0).search(/[a-z]/)){ //If capital letter
    after = after.charAt(0).toUpperCase()+after.slice(1);
  }
  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```

 
### Pig Latin
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.

```js
function translatePigLatin(str) {
  var con = [];
  
  if(str.charAt(0).search(/[aeiou]/)){
  for(var i=0,l=str.length;i<l;i++){
    if(str.charAt(i).search(/[aeiou]/)){
      con.push(str.charAt(i));
    } else {break;}
    
  }
   return str.slice(i)+ con.join('') +"ay";
  }
  
  else{
  return str+"way"; 
  }
}

translatePigLatin("consonant");

```

 
### DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```js
function pairElement(str) {
  var lookup = {
    G:["G","C"],
    C:["C","G"],
    A:["A","T"],
    T:["T","A"]},
    
    list =[];
  
  str.split('').forEach( a=>list.push(lookup[a]));
  
  return list;
}

pairElement("GCG");

```

 
### Missing letters
Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

```js
function fearNotLetter(str) {
  var out;
  
  for(var i=str.charCodeAt(0),j=0,l=i+str.length;i<l;i++,j++){
    if(str.charAt(j)!==String.fromCharCode(i)){
      out = String.fromCharCode(i);
      break;
    }
  }
  return out;
}

fearNotLetter("abce");

```

 
### Boo who

Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.

```js
function booWho(bool) {
  if(typeof bool == "boolean") return true;
  else return false;
}

booWho(null);

```

 
### Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

```js
Array.prototype.checkValue = function(val){
  for(var i=0,l=this.length;i<l;i++){
    if(this[i] == val){return true;}
  }
  return false;
};

function uniteUnique(arr) {
  
  for(var i=1,l=arguments.length;i<l;i++){
    for(var j=0,k=arguments[i].length;j<k;j++){
      if(!arr.checkValue(arguments[i][j])) arr.push(arguments[i][j]);
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

```

 
### Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```js

function convertHTML(str) {
  var lookup = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "\'":"&apos;"
  };
  
  for(var key in lookup){
    str = str.replace(new RegExp(key,'g'),lookup[key]);
  }
  return str;
}

convertHTML("Dolce & Gabbana");

```

 
### Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```js
function spinalCase(str) {
  var newS =[];
  newS.push(str.charAt(0));
  
  for(i=1,l=str.length;i<l;i++){
    if(str.charAt(i).search(/[A-Z]/)===0 &&
       str.charAt(i-1) !== ' ' &&
       str.charAt(i-1) !== '_'
      ){
      newS.push(" ");
    }
    newS.push(str.charAt(i));
  }
  
  str = newS.join('').replace(/[ _]/g, '-').toLowerCase();
  return str;
  
}


spinalCase('This Is Spinal Tap');

```

 
### Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

```js
function sumFibs(num) {
  var a=1,b=1,sum=2;
  var next =0;
  
  for(;;a=b,b=next){
    next = a+b;
    if(next<=num){
      if(next%2 !==0){
        sum +=next;
      }
    }
    else break;
  }
  return sum;
}

sumFibs(4);

```

 
### Sum All Primes

Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two. The provided number may not be a prime.

```js
//Sum the primes
//Using the ancient Eratosthenes method

function sumPrimes(num) {
  
  //Get the table
  var table = [],
      primes= [],
      limit=Math.floor(Math.sqrt(num));
  for(var a=2;a<=num;a++) { table.push(a);}
  
  //Iterate over the table until the element is less than sqrt of num
  //and Get rid of it's multiples
  while(primes[primes.length-1]===undefined || primes[primes.length-1]<=limit){
    primes.push(table.shift());
    table = table.filter(a=>a%primes[primes.length-1]!==0);
    
  }
  primes = primes.concat(table);
  return primes.reduce((a,b)=>a+b);
}

sumPrimes(10);

```

 
### Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

```js
//Smallest common multiple
//Using table method from wikipedia

//list of primes as much as you see it'll require
// here it's below 30

primeTable=[2,3,5,7,11,13,17,19,23,29]; 

//get a list of range of numbers
function range(list){
 min=Math.min(list[0],list[1]);
 max=Math.max(list[0],list[1]);
 var r=[];
 for(i=min;i<=max;i++){
   r.push(i);
  }
return r;
}

//is all the items are 1?
function allOne(list){
  return list.filter(a=>a!==1).length === 0;
}

//is any of the item divisible by the number?
function isDivisible(list,num){
  state = false;
  list.forEach(a=> a%num===0?state=true:undefined);
  return state;
}

//only divide those who are divisible
function applyDiv(list,num){
  return list.map(a=>a%num===0?a/num:a);
}

//find the smallest common multiple of the items
//Implements the table algorithm
function scm(list){
  mul=[];
  for(i=0;;){
    if(allOne(list)) break;
    else{ 
         if(isDivisible(list,primeTable[i])){
           mul.push(primeTable[i]);
           list = applyDiv(list,primeTable[i]);
         } 
         else i++;
        
    }
  }
  return mul.reduce((a,b)=>a*b);
}

//FCC
function smallestCommons(arr) {
   
  return scm(range(arr));
}

smallestCommons([1,5]);

```

 
### Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

```js

function findElement(arr, func) {
  
  for(var i=0,l=arr.length;i<l;i++){
    if(func(arr[i])) {return arr[i];}
  }
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

```

 
### Drop it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true. The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not. Return the rest of the array, otherwise return an empty array.

```js
function dropElements(arr, func) {
  var narr = arr.slice();
  for(var i=0,l=arr.length;i<l;i++){
    if(func(arr[i])){return narr;}
    else {narr.shift();}
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });

```

 
### Steamroller

Flatten a nested array. You must account for varying levels of nesting.

```js
function steamrollArray(arr) {
  var narr = [];
  
  function roller(ar){
    if(Array.isArray(ar)){ ar.forEach(
      function (a){
        if(Array.isArray(a)){ roller(a);}
        else narr.push(a);
      }
    );}
    else narr.push(ar);
  }
  roller(arr);
  return narr;
}

steamrollArray([1, [2], [3, [[4]]]]);

```

 
### Binary Agents

Return an English translated sentence of the passed binary string. The binary string will be space separated.

```js
function binaryAgent(str) {
  var bin = str.split(' ');
  var out = "";
  
  for(var i=0,l=bin.length;i<l;i++){
    out += String.fromCharCode(parseInt(bin[i],2));
  }
  
  return out;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

 
### Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument). 
Remember, you can access object properties through either dot notation or [] notation.

```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  var state = true;
  
  for(var i=0,l=collection.length;i<l;i++){
    if(collection[i].hasOwnProperty(pre)){
      if(collection[i][pre]===0 ||
         collection[i][pre]===null ||
         collection[i][pre]==="" ||
         collection[i][pre]===undefined ||
         Number.isNaN(collection[i][pre])
        ) state = false;
    }
    else state = false;
  }
  return state;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```
 
### Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function with a single argument will then return the sum: ```var sumTwoAnd = addTogether(2);``` ```sumTwoAnd(3)``` returns 5.

If either argument isn't a valid number, return undefined.

```js
function addTogether() {
  if(!arguments){return undefined;}
  
  for(var i=0,l=arguments.length;i<l;i++){
    if(!(typeof arguments[i] == "number")){return undefined;}
  }
  
  if(arguments.length == 1){
    
    var a = arguments[0];
    return function(val){
      if(typeof val == "number") {return val+a;}
      else {return undefined;}
    };
    
  }
  else if(arguments.length ==2){
    return arguments[0]+arguments[1];
  }
  return false;
}

addTogether(2,3);
```

{% comment %}  
### Validate US Telephone Numbers

```js

```
{% endcomment %} 
 

### Record Collection

You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection. If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property. Your function must always return the entire collection object.

There are several rules for handling incomplete data: If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array. If value is empty (""), delete the given prop property from the album.

```js
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (prop=="artist" && collection[id][prop]===undefined){
    collection[id].artist=value;
    
  }
  
  if (prop=="tracks"){
    if(collection[id][prop]===undefined){
    collection[id].tracks=[];
    }
    
    if(value!==""){
      collection[id].tracks.push(value);
    }
  }
  
  if (value===""){
    if(prop=="tracks") { delete collection[id].tracks ;}
    if(prop=="artist") { delete collection[id].artist ;}
  }
 
  return collection ;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


```

{% comment %} 

### Symmetric Difference

### Exact Change

### Inventory Update

### No repeats please

### Make a Person

### Map the Debris

### Pairwise

{% endcomment %}