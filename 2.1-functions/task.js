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
    }
    squareRoot = Math.sqrt(d);
    x1 = (- b + squareRoot) / (2 * a);
    roots.push(x1);

    if (d == 0) {
      equation = {
        D: d,
        roots: roots
      }
        console.log(equation);
    }

    if (d > 0) {
      x2 = (- b - squareRoot) / (2 * a);
      roots.push(x2);
      equation = {
        D: d,
        roots: roots
      }
        console.log(equation);
    }
    return equation;
}

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

let arrMarks =[];
let marks;
let data;
let averageRating;

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

//console.log(getAverageScore({
    //algebra: [],
    //geometry: [],
    //russian: [],
    //physics: [],
    //music: [],
    //english: [],
   // poetry: [],
    //chemistry: [],
    //rench: []
//}));

function getAverageScore(data) {

  let average = 0;
  let averageRatingLesson = {};
   //average: average  

  if (data === {}) {
    return average;
  }
  for (let prop in data) {
// Перебираем поля аргумента data и записываем результаты в новый объект averageRatingLesson
// Благодаря циклу получаемя массив со средними оценками по каждому предмету 
    averageRatingLesson[prop] = getAverageMark(data[prop]);
  }
    // с помощью этого метода возвращаем массив значений со средними оценками,
    // чтобы посчитать среднюю оценку по всем предметам
    average = getAverageMark(Object.values(averageRatingLesson));
    //Добавляем свойство average со значением average
    averageRatingLesson.average = average;
    
    return averageRatingLesson;
        
}
    
   
function getAverageMark(marks) {
  arrMarks = marks;
  let summMarks = 0;
  averageRating = 0;

  if (arrMarks.length === 0) {
    return averageRating;
  }
      for (let i = 0; i < arrMarks.length; i ++) {
        summMarks = summMarks + arrMarks[i];
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






