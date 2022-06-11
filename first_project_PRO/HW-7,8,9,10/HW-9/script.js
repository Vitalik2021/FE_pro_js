//ДЗ 9. Средний возраст студентов
const amountStudents = 10;
const students = studentsMock.getStudentList(amountStudents)
console.log(students)
const avgMark = students.map(value => {
    return {
        marks: value.marks.reduce((a, i) => a + i) / value.marks.length
    }
})
console.log(avgMark)
const avgAllMark = avgMark.reduce(function (a, i) {
    return a + i.marks / avgMark.length;
}, 0)

console.log(avgAllMark)


