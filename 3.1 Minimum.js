You can get the Nth character, or letter, from a string by writing 'string'.charAt(N), similiar to how you get its length with 's'.length. The returned value will be a string containing only one character (for example, 'b'). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have position 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.

// Your code here.


var bCount = 0;
function countBs(a) {
 
 for (count = 0; count < a.length; count ++)
 	{
      if (a.charAt(count) == "B") { bCount++; }
 	}
  return(bCount);
}
 console.log(countBs("BBBBCBBB"));
// → 7
// console.log(countChar("kakkerlak", "k"));
// → 4

// CharCount variation
var cCount = 0;
function countChar(a,b) {
 
 for (count = 1; count < a.length; count ++)
 	{
      if (a.charAt(count) == b) { cCount++; }
 	}
  return(cCount);
}
 console.log(countChar("BBBBCBBB", "C"));
// → 7
 console.log(countChar("kakkkerlakkk", "k"));
// → 4
