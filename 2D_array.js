// Instructions
// In this exercise, you’ll create 2D arrays, completing all of the tasks below.

// Tasks
// Challenge 1: Student Scores
// You need to organize scores for three students, each of whom has taken three
// tests. Create a 2D array named allScores where each inner array contains three
// test scores for a single student.
// 1. Write the code to create the allScores array with three inner arrays.
// 2. Each inner array should contain three numeric scores of your choice.
let allScores = [];
for (let i = 0; i < 3; i++){
    allScores[i] = [];
    for (let k = 0; k < 4; k++) {
        allScores[i].push(Math.floor(Math.random() * 101))
    }
};
console.log(allScores);
// Challenge 2: Build a Seating Grid
// You want to model three rows of seats in a theater with four seats per row. Create
// a 2D array called theaterSeating that has an outer array of three inner arrays,
// each inner array representing a row of four seat labels. (For instance, seat labels
// could be "A1", "A2", etc.)
// 1. Use nested array literals to define the structure.
// 2. Ensure each inner array has exactly four seat labels.
let theaterSeating = Array(3);
for (let i = 0; i < theaterSeating.length; i++) {
    theaterSeating[i] = []; 
    for (let k = 0; k < 4; k++){
        theaterSeating[i][k] = String.fromCharCode("A".charCodeAt(0) + i) + `${k + 1}`;
    }
};
console.log(theaterSeating);
// Challenge 3: Form a Multi-Dimensional Contact List
// Create a 2D array named contactsList where each inner array represents one
// contact’s info. For now, store three pieces of information in each inner array, such
// as ["Name", "Email", "Phone"]. Create two of these inner arrays in
// contactsList.
// 1. Define the outer array contactsList.
// 2. Insert two inner arrays, each with three strings representing a contact’s
// details

let contactsList = [
  ["Alice", "alice@email.com", "000-1234"],
  ["Bob", "bob@email.com", "000-5678"]
];

console.log(contactsList);