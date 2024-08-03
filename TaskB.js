"use strict";
// 100 Days Of Coding Challenge!
/** Question 17:
 
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guestsList.

* Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

* Remove guestsList from your list one at a time until only two names remain in your list. Each time you pop a name from your list,

* print a message to that person letting them know you’re sorry you can’t invite them to dinner.

* Print a message to each of the two people still on your list, letting them know they’re still invited.

* Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// An array of guests
let guestsList = ["Salman", "Taha", "Mustafa"];
// Inform guests about the bigger dinner table
console.log("Good news! I have found a bigger dinner table.");
// Add a new guest to the beginning of the array
guestsList.unshift("Daniyal");
// Add a new guest to the middle of the array
guestsList.splice(guestsList.length / 2, 0, "Zahid");
// Use push() to add one more guest to the final list
guestsList.push("Adeel");
// Print invitation messages for each person
guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// New line: Inform that only two people can be invited
console.log("Unfortunately, due to space constraints, I can invite only two people for dinner.");
// Remove guests one by one until only two remain
while (guestsList.length > 2) {
    const removedGuest = guestsList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print invitation messages for the remaining two guests
guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited!`);
});
// Remove the last two names to have an empty list
guestsList.pop();
guestsList.pop();
// Print the empty list
console.log("Final guest list:", guestsList);
