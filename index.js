
// let numbers: number[] = [1, 2, 3];
// console.log("Numbers Array:", numbers);


// let strings: string[] = ["apple", "banana", "cherry"];
// console.log("Strings Array:", strings);
//console.log("Strings Array Length:");
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 88 },
    { name: "Eva", grade: 91 }
  ];
  
  const tutoringGroup = [
    { name: "Charlie", grade: 78 }
  ];
  const passedStudents = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "David", grade: 88 },
    { name: "Eva", grade: 91 }
  ];
  allStudents = tutoringGroup.concat(passedStudents);
  console.log(allStudents);
  const avrStudents =allStudents.filter(student => student.grade >= 80);
  console.log(avrStudents);
  const allAbove80 = allStudents.some(student => student.grade >= 80);
  console.log(allAbove80);
  const anyBelow80 = allStudents.some(student => student.grade < 80);
  console.log(anyBelow80);
  //  Calculate the average grade of students who have passed (grade >= 80)
const passingStudents = allStudents.filter(student => student.grade >= 80);
//console.log(passingStudents);
const averageGrade = passingStudents.reduce((total, student) => total + student.grade, 0)
console.log(averageGrade);


