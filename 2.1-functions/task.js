"use strict";
// Задача 1 Корни квадратного уравнения
let equation;
let d;
let squareRoot;
let x1;
let x2;
function getSolutions (a, b, c) {
  d = b ** 2 - 4 * a * c;
  let roots = [];
    if (d < 0) {
      equation = {
          D: d,
          roots: []
      }
        console.log(equation);
        console.log(d);
    }
    if (d == 0) {
      squareRoot = Math.sqrt(d);
      x1 = (- b + squareRoot) / (2 * a);
      roots.push(x1);
      equation = {
        D: d,
        roots: x1
          
      }
    
        console.log(equation);
        console.log(d);
    }
    if (d > 0) {
      squareRoot = Math.sqrt(d);
      x1 = (- b + squareRoot) / (2 * a);
      roots.push(x1);
      x2 = (- b - squareRoot) / (2 * a);
      roots.push(x2);
      equation = {
        D: d,
        roots: x1, x2
        
      }
        console.log(equation);
        console.log(d);
    }
    return equation;
}
//getSolutions(1, -4, -5);

function showSolutionsMessage (a, b, c) {

  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${d}`);

    if (d < 0) {
      console.log("Уравнение не имеет вещественных корней");
    }
    
    if (d === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`);
      }
     
    if (d > 0) {
      console.log(`Уравнение имеет два корня X₁ = ${x1}, X₂ = ${x2}`);
    }




}
showSolutionsMessage (1, 2, 3);
showSolutionsMessage (7, 20, -3);
showSolutionsMessage (2, 4, 2);


// Задача 2 Журнал успеваемости

//Светлана, здравствуйте. Вам нужно считать средние оценки из того объекта, который вы получаете аргументом, 
//а не того, который вы сформировали....И у вас должна быть отдельная функция для подсчёта средней оценки из массива, этой функции у вас нету
//Вы сформируйте новый пустой объект и его заполняйте в процессе перебора предметов объекта

//Внутри функции getAverageScore() вам нужно последовательно 
//перебрать все поля аргумента data и каждый массив обработать с помощью функции getAverageMark()
//У вас ведь средние значения по каждому предмету тоже можно в массив поместить, а для того, 
//чтобы считать среднее значение по массиву у вас уже есть функция
//Да, for..in для этих целей подойдет как нельзя лучше)

let arrMarks =[];
let marks;
let data;
let value;
let summMarks;
let averageRating;
let averageRatingLesson;
console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));

function getAverageScore(data) {
// Перебираем поля аргумента data и заполняем массив arrMarks

  for (let prop in data) {
    marks = data[prop];
    console.log(`Свойство: ${prop}, значение: ${marks}`);
    arrMarks.push(marks);
    console.log(marks + " это массив с оценками по каждому предмету");

    averageRatingLesson = {
      prop: getAverageMark(marks)
      
    }
   //console.log(`${prop}: ${averageRating}`); 
  }
  console.log(averageRatingLesson);
  return averageRatingLesson;
}

function getAverageMark(marks) {
 arrMarks = marks;
  for (let i = 0; i < arrMarks.length; i ++) {
    summMarks = summMarks + arrMarks[i];
    console.log(summMarks);
  }
    averageRating = summMarks / arrMarks.length;
    return averageRating;
}



// Задача 3 Расшифровка данных 

let firstName;
let lastName;
let aaa;
let bbb;
let secretData;
   

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
}

let getDecodedValue = secret => !secret ? "Родриго" : "Эмильо";


console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));






