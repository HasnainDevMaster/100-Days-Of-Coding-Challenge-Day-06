// 100 Days Of Coding Challenge!

/** Question 18:
 
Seeing the World: Think of at least five places in the world you’d like to visit.

* Store the locations in a array. Make sure the array is not in alphabetical order.

* Print your array in its original order.

* Print your array in alphabetical order without modifying the actual list.

* Show that your array is still in its original order by printing it.

* Print your array in reverse alphabetical order without changing the order of the original list.

* Show that your array is still in its original order by printing it again.

* Reverse the order of your list. Print the array to show that its order has changed.

* Reverse the order of your list again. Print the list to show it’s back to its original order.

* Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

* Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

//------------------------------------------------------------------------------------------------------------------------------

// Define an array of places
let places: string[] = ["Paris", "New York", "Tokyo", "Sydney", "London"];

// Print the array in its original order
console.log("Original order:", places);

// Print the array in alphabetical order without modifying the original array
console.log("Alphabetical order:", [...places].sort());

// Show that the original array is still in its original order
console.log("Original order:", places);

// Print the array in reverse alphabetical order without changing the original array
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Show that the original array is still in its original order
console.log("Original order:", places);

// Reverse the order of the list and print the array
places.reverse();
console.log("Reversed order:", places);

// Reverse the order of the list again and print the array
places.reverse();
console.log("Original order restored:", places);

// Sort the array in alphabetical order and print the array
places.sort();
console.log("Alphabetical order:", places);

// Sort the array in reverse alphabetical order and print the array
places.sort().reverse();
console.log("Reverse alphabetical order:", places);
