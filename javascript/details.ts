// let num: number[] = [1, 2, 3];
// let strings: string[] = ["apple", "banana", "cherry"];
// let userInfo: [string, number, boolean] = ["Alice", 25, true];


// let details: [string,number,string] = ["Devranjan",25,"100000"];

// console.log(details);

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

  const allarray = tutoringGroup.concat(students);
  console.log(allarray);

  const filtermarks = allarray.filter(marks => marks.grade>=80)
  console.log(filtermarks);

  //  Calculate the average grade of students who have passed (grade >= 80)
const passingStudents = allarray.filter(student => student.grade >= 80);
const averageGrade = allarray.reduce((total, student) => total + student.grade, 0)

let x = (a,b)=>{
    return a+b;
}
console.log(x(10,20));
