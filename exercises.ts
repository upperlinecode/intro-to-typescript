console.log("Script running");

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
let yearsOpen: number = 0;
// Please type the following
let nameOfShop: string = "Marina's Magical Memories";
let monthlyRent: number = 3500;
let cashOnHand: number = 10000;
let isOpen: boolean = true;

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

let chosenColor: "Salmon" | "LightSeaGreen" | "Ivory" = "Salmon";

// Uncomment the code below to see if your revision worked:
// chosenColor = "LightSeaGreen"; // Should work
// chosenColor = "Blue"; // Should raise a problem

// ==== EXERCISE 3 ==== //
/* 
Marina's physical store will have two major display areas, and she'll want to keep track of what's on each.

A displayWindow which will have room for exactly three items (we'll use strings for now)
A shelf which will have room for tons of items - not technically infinite, but for our purposes we can treat it that way.

Go ahead and type them and then run the tests below to ensure that you've done so correctly.
*/
type displayWindow = [string, string, string];
type shelf = string[];

// If done correctly, the following lines of code should run without any issues.
// displayWindow = ["Rubik's Cube", "EZ Bake Oven", "Kitty Carryall Doll"];
// shelf = [];
// shelf = ["Stretch Armstrong"];
// shelf = [
//   "Buzz Lightyear",
//   "Super Nintendo",
//   "Tamagotchi",
//   "Operation",
//   "Lego set",
// ];

// If done correctly, the following lines of code should all cause problems.
// displayWindow = 3;
// displayWindow = "Buzz Lightyear";
// displayWindow = [];
// displayWindow = ["Buzz Lightyear"];
// shelf = "Twister";
// shelf = true;
// shelf = [5, true];

// ==== EXERCISE 4 ==== //
/* 
Marina's online store is going to need to store a lot of product information, so we'll need an interface to specify what each Product must have. 

A Product must have:
- name
- price 
- quantity available (qty)
- whether or not it's on sale

Create your interface for a Product below.
*/

interface Product {
  name: string;
  price: number;
  qty: number;
  sale: boolean;
}

// If you've done this correctly, the following code should work without error:
let product1: Product = {
  name: "Care Bear",
  price: 19.99,
  qty: 2,
  sale: false,
};

// The following should all cause problems.
// let product2: Product = {
//   name: "Bratz Doll",
// };
// let product3: Product = {
//   name: "Slinky Dog",
//   price: "$25.00",
//   qty: "two",
//   sale: "no",
// };
// let product4: Product = {
//   name: "Slinky Dog",
//   price: "$25.00",
//   qty: "two",
//   sale: "no",
// };
// let product5: Product = ["Hello Kitty Mug", 3.99, 2, false];

// ==== EXERCISE 5 ==== //
/* TYPE ALIASES
Marina's also planning to create a student discount program, and two local high schools have agreed to let her use their apis to confirm that a student goes their school, provided the student has agreed to share that info.

Unfortunately, the two schools return the data differently - one school sends back a word like "ninth" or "eleventh"
the other school sends back a number: either 9, 10, 11, or 12.

Even more frustratingly, if the student doesn't attend school there, or of they haven't consented to share the data, the apis will return false.

Create a gradeLevel type that can be either a string, the numbers 9, 10, 11, or 12, or false (but not true).

*/

type gradeLevel = 9 | 10 | 11 | 12 | string | false;

// If you've done this correctly, the following code will run without error.
// let student1Grade: gradeLevel = 9;
// student1Grade = 12;
// student1Grade = "ninth";
// student1Grade = false;

// If your gradeLevel type alias is correct, the following code should cause problems.
// let student2Grade: gradeLevel = 4;
// student2Grade = true;
// student2Grade = [];

// ==== EXERCISE 6 ==== //
/* 
Marina wants to create an interface for a Student who creates a shopping profile. 

Here's what a Student should have:
- First name
- Last name (which they don't have to provide)
- Email
- Grade (all the above rules apply)
- Store Credit ()
*/

interface Student {
  firstName: string;
  lastName: string | null;
  email: string;
  grade: gradeLevel;
  credit: number;
}

// You'll know you've done this correctly if the following code runs without error
let student1: Student = {
  firstName: "Kamaya",
  lastName: null,
  email: "test123@gmail.com",
  grade: 10,
  credit: 100,
};
let student2: Student = {
  firstName: "Andres",
  lastName: "Ramirez",
  email: "test123@aol.com",
  grade: "eleventh",
  credit: 0,
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

const computeTax = (price: number): number => {
  if (price < 0) {
    throw new Error("Negative price detected - something went wrong!");
  }
  if (!price) {
    throw new Error("No price entered - something went wrong!");
  }
  let taxed = price * 1.0825;
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

const canAfford = (customer: Student, product: Product): boolean => {
  const budget = customer.credit;
  const { price } = product;
  if (price <= budget) {
    return true;
  }
  return false;
};

// Should return true and false, respectively
console.log(canAfford(student1, product1));
console.log(canAfford(student2, product1));

// Should trigger errors
// canAfford(27, 40);
// canAfford("Daniel Howard", "Buzz Lightyear");
// canAfford(27, "Rubik's Cube");
