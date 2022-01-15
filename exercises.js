// Let's build an store for someone selling nostalgic items.
// We'll have both a physical and digital storefront, so let's keep that in mind.
// ==== EXERCISE 1 ==== //
/* BASIC TYPES.
Put all the following information into typed variables.

Name of shop: Marina's Magical Memories
Years open: 0
Monthly rent: $3500 USD
Cash on hand: $10,000 USD
Is Open: true
*/
// Example:
var yearsOpen = 0;
// Please type the following
var nameOfShop = "Marina's Magical Memories";
var monthlyRent = 3500;
var cashOnHand = 10000;
var isOpen = true;
// If you've done this successfully, all the following lines of code should cause problems:
// yearsOpen = "Two";
// nameOfShop = true;
// cashOnHand = "A lot";
// cashOnHand = true;
// isOpen = "yes";
// isOpen = 1;
// ==== EXERCISE 2 ==== //
/* TYPE LITERALS
Marina wants to let her users toggle between three color modes for the online store.
Anything outside of her three pre-selected color modes (Salmon, LightSeaGreen, and Ivory) would be off-brand, so she wants to ensure her code is limited to just those three types.

Update her code so that chosenColor can't just be any string - it has to be one of those three string literals.
*/
var chosenColor = "Salmon";
// If you've done this correctly, the following code should work without error:
var product1 = {
    name: "Care Bear",
    price: 19.99,
    qty: 2,
    sale: false
};
// You'll know you've done this correctly if the following code runs without error
var student1 = {
    firstName: "Kamaya",
    lastName: null,
    email: "test123@gmail.com",
    grade: 10,
    credit: 100
};
var student2 = {
    firstName: "Andres",
    lastName: "Ramirez",
    email: "test123@aol.com",
    grade: "eleventh",
    credit: 0
};
// If you've done this correctly, each of the following should trigger an error:
// let student3: Student = {
//   firstName: "Nichole",
//   email: "test123@hotmail.com",
//   grade: "ninth",
//   credit: 100,
// };
// let student4: Student = {
//   firstName: "Divya",
//   lastName: "Singh",
//   email: "test123@gmail.com",
//   grade: true,
//   credit: 100,
//   loyaltyMember: true,
// };
// ==== EXERCISE 7 ==== //
/*
Let's also build some helper functions for Marina's checkout process:

The computeTax function that takes in a number as an argument and returns that number with an 8.25% tax rate, rounded to two decimal places.
*/
var computeTax = function (price) {
    if (price < 0) {
        throw new Error("Negative price detected - something went wrong!");
    }
    if (!price) {
        throw new Error("No price entered - something went wrong!");
    }
    var taxed = price * 1.0825;
    taxed = Math.round(taxed * 100) / 100;
    return taxed;
};
// Done correctly, your computeTax function will accept the following:
console.log(computeTax(23));
console.log(computeTax(125.5));
// Done correctly, TypeScript will throw an error here:
// console.log(computeTax(true));
// console.log(computeTax("Buzz Lightyear"));
// BONUS: Throw your own error if the number is negative or null.
// console.log(computeTax(-23));
// console.log(computeTax(null));
// ==== EXERCISE 8 ==== //
/*
Let's also build a canAfford function that takes in a student and a product as a arguments and returns a boolean value indicating whether or not that student can afford the item.

*/
var canAfford = function (customer, product) {
    var budget = customer.credit;
    var price = product.price;
    if (price <= budget) {
        return true;
    }
    return false;
};
// Should return true and false, respectively.
console.log(canAfford(student1, product1));
console.log(canAfford(student2, product1));
