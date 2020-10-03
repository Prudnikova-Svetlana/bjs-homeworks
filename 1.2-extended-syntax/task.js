"use strict";
function getResult(a,b,c){
    let x_1;
    let x_2;
    let x = [];
    let discriminate =  b ** 2 - 4 * a * c;
    let squareRoot = Math.sqrt(discriminate);
    
    if (discriminate > 0) {
        x_1 = (- b + squareRoot) / (2 * a);
        x.push(x_1);
        x_2 = (- b - squareRoot) / (2 * a);
        x.push(x_2);
    }
    if (discriminate === 0) {
        x_1 = (- b + squareRoot) / 2 * a;
        x.push(x_1);  
    }
if (discriminate < 0) {
    x = [];
    }
    return x;
}
    
function getAverageMark(marks){
    // код для задачи №2 писать здесь
let arrMarks = [];
let averageMark;
let sumMark = 0;
arrMarks = marks;

for (let i = 0; i < arrMarks.length; i ++) {
    sumMark = sumMark + arrMarks[i];
if (arrMarks.length > 5) {
    arrMarks.splice(5, (arrMarks.length - 1));
    console.log("Извините, но количество введенных оценок должно быть меньше 5");
    console.log(arrMarks);
    averageMark = sumMark / arrMarks.length;  
} 
if (arrMarks.length <= 5) {
   averageMark = sumMark / arrMarks.length;
}
   if (arrMarks = []) {
    averageMark = 0;
}
}
  return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
let today = new Date();
let year = today.getFullYear();
let yearOfBirthday = dateOfBirthday.getFullYear();
let result = year - yearOfBirthday;
console.log(result);
console.log(yearOfBirthday);
console.log(year);
if (result >= 18) {
    console.log("Не желаете ли олд-фэшн, " + name + ", ?");
}
else {
    console.log("Сожалею, " + name + " , но я не могу продать вам алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
}
    return result;
}