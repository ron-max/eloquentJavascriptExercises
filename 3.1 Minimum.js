Exercise 3.1

Write a function min that takes two arguments and returns their minimum.

// Your code here.
function min(a,b) {
  if(a==b) {return "equal";}
  else if(a<b) { return a;}
  else {return b;}
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
