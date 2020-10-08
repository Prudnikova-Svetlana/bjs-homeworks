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
      return x;
    }
    
function getAverageMark(marks){
    
  let arrMarks = [];
  let averageMark = 0;
  let sumMark = 0;
  arrMarks = marks;
    
    if (arrMarks.length === 0) {
      return averageMark;
    }
    if (arrMarks.length > 5) {
      arrMarks.splice(5);
      console.log("Извините, но количество введенных оценок должно быть меньше 5");
    } 
    
      for (let i = 0; i < arrMarks.length; i ++) {
        sumMark = sumMark + arrMarks[i];
      }
        averageMark = sumMark / arrMarks.length;
        return averageMark;
}

function askDrink(name,dateOfBirthday){

  if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  
}