const students = [
  { name: "Marwin", grade: 88 },
  { name: "Rocelyn", grade: 95 },
  { name: "Perfecto", grade: 42 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); 
 
const perfecto = students.find(s => s.name === "Perfecto");
console.log(perfecto.name); 
 
console.log(students.some(s => s.grade < 60)); 
console.log(students.every(s => s.grade >= 60)); 
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // Output: Rocelyn, Marwin, Perfecto

const lowerRanked = [...students].sort((a, b) => a.grade - b.grade);
console.log(lowerRanked.map(s => s.name)); // Output: Perfecto, Marwin, Rocelyn