/*Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, 

write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 



Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?
*/


function reverseArray(array) {
 	newArray = [];
 	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array.pop(array));
	}
	return newArray;
}

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArrayInPlace(arr) {
	for (var i=0 ; i < Math.floor(arr.length / 2) ; i++) {
		tempArr = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tempArr;

	}
return arr;
}


