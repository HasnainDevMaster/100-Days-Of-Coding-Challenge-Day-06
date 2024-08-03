// 100 Days Of Coding Challenge!

/** Question 16:

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:

* Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

* Add one new guest to the beginning of your array.

* Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

* Print a new set of invitation messages, one for each person in your list. */

//-------------------------------------------------------------------------------------------------------------

// An array of guests
let guests: string[] = ["Salman", "Taha", "Mustafa"];

// Inform guests about the bigger dinner table
console.log("Good news! I have found a bigger dinner table.");

// Add a new guest to the beginning of the array
guests.unshift("Daniyal");

// Add a new guest to the middle of the array
guests.splice(guests.length / 2, 0, "Zahid");

// Use append() (push) to add one more guest to the final list
guests.push("Adeel");

// Print invitation messages for each person
guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
