// let num: number[] = [1, 2, 3];
// let strings: string[] = ["apple", "banana", "cherry"];
// let userInfo: [string, number, boolean] = ["Alice", 25, true];
// let details: [string,number,string] = ["Devranjan",25,"100000"];
// console.log(details);
var students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 88 },
    { name: "Eva", grade: 91 }
];
var tutoringGroup = [
    { name: "Charlie", grade: 78 }
];
var passedStudents = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "David", grade: 88 },
    { name: "Eva", grade: 91 }
];
var allarray = tutoringGroup.concat(students);
console.log(allarray);
var filtermarks = allarray.filter(function (marks) { return marks.grade >= 80; });
console.log(filtermarks);
//  Calculate the average grade of students who have passed (grade >= 80)
var passingStudents = allarray.filter(function (student) { return student.grade >= 80; });
var averageGrade = allarray.reduce(function (total, student) { return total + student.grade; }, 0);
var x = function (a, b) {
    return a + b;
};
console.log(x(10, 20));
