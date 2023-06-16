// Test case 1
let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biologyMarks: 95,
    chemistryMarks: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biologyMarks: 90,
    chemistryMarks: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biologyMarks: 95,
    chemistryMarks: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biologyMarks: 85,
    chemistryMarks: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biologyMarks: 99,
    chemistryMarks: 10,
  },
];

// Test case 2
let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biologyMarks: 100,
    chemistryMarks: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biologyMarks: 80,
    chemistryMarks: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biologyMarks: 30,
    chemistryMarks: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biologyMarks: 40,
    chemistryMarks: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biologyMarks: 99,
    chemistryMarks: 10,
  },
];

// Custom sorting function based on the rules
function sortStudents(a, b) {
  if (a.biologyMarks + a.chemistryMarks > b.biologyMarks + b.chemistryMarks) {
    return -1;
  } else if (a.biologyMarks + a.chemistryMarks < b.biologyMarks + b.chemistryMarks) {
    return 1;
  } else {
    if (a.biologyMarks > b.biologyMarks) {
      return -1;
    } else if (a.biologyMarks < b.biologyMarks) {
      return 1;
    } else {
      return 0;
    }
  }
}

// Sort the test case arrays using the custom sorting function
testCase1.sort(sortStudents);
testCase2.sort(sortStudents);

// Print the sorted arrays
console.log(testCase1);
console.log(testCase2);
