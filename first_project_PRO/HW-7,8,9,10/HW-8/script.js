//ДЗ 8. Трансформация в массив имен
const amountStudents = 5;
const students = studentsMock.getStudentList(amountStudents);
console.log(students)
const name = students.map(item => item.name);
console.log(name)