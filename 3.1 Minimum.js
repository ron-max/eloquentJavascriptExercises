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


