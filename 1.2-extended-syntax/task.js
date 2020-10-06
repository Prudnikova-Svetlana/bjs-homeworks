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
  
    for (let i = 0; i < arrMarks.length; i ++) {
      sumMark = sumMark + arrMarks[i];
    
      if (arrMarks.length === 0) {
        averageMark = 0;
      }
      
      if (arrMarks.length > 5) {
        arrMarks.splice(5);
        console.log("Извините, но количество введенных оценок должно быть меньше 5");
        averageMark = sumMark / arrMarks.length;  
      } 

      if (arrMarks.length <= 5) {
        averageMark = sumMark / arrMarks.length;
      }
    }
        return averageMark;
  
}

function askDrink(name,dateOfBirthday){
    
  let today = new Date();
  let year = today.getFullYear();
  //let yearOfBirthday = dateOfBirthday.getFullYear();
  //let age = year - yearOfBirthday;
  let yearOfBirthday = dateOfBirthday;
  let age = year - yearOfBirthday.getFullYear();
  let result;
  if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}