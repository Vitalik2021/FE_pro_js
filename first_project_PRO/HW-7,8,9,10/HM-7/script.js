//ДЗ 7. Фильтрация по диапазону
const filterRange = (array, a, b) => {
return array.filter(index => a <= index && index < b)
};
const array = [5, 3, 8, 1];
let filtered = filterRange(array, 1, 4);
console.log(array);
console.log(filtered)


