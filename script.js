// Part 1: Variables & Conditionals

let age = 20;
const name = "Brilliant";
var isStudent = true;

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

if (isStudent) {
    console.log(name + " is currently a student.");
} else {
    console.log(name + " is not a student.");
}



// Part 2: Custom Functions

// Function 1: Calculate square of a number
function square(num) {
    return num * num;
}
console.log("Square of 5 is: " + square(5));

// Function 2: Greet user
function greetUser(username) {
    return "Hello, " + username + "! Welcome back!";
}
console.log(greetUser("Walter"));



// Part 3: Loop Examples

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
}

// Example 2: While loop
let counter = 0;
while (counter < 3) {
    console.log("While loop iteration: " + counter);
    counter++;
}



// Part 4: DOM Interactions


// 1. Change text of an element
document.getElementById("title").innerText = "Updated Title via JavaScript";

// 2. Change style of an element
document.getElementById("title").style.color = "blue";

// 3. Add event listener to a button
document.getElementById("changeBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Button was clicked!";
});
