// Задача 1 Форматтер чисел

function parseCount(numberOfPuchased) {
  let result = Number.parseInt(numberOfPuchased, 10);
    if (Number.isNaN(result) === true) { 
      throw new Error("Невалидное значение");
    }  
    return result;  
}

function validateCount(purchaseds) {
  let resultParse;
    try {
      resultParse = parseCount(purchaseds);
    } catch(e) {  // перехватили ошибку, выбрасываемую ф.parseCount
      return e;   // вернули ошибку е
      }
      return resultParse;
         
}


// Задача 2 Треугольник

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return (this.a + this.b + this.c);
  }

  getArea() {
    let p = ((this.a + this.b + this.c) / 2); // это полупериметр
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return (+ s.toFixed(3));
   }

}  

  function getTriangle(a, b, c) {
    
    try {
     const triangle = new Triangle(a, b, c);
     return triangle; // пытаемся вернуть треугольник
    } catch(err) {
        return errorResult = {
          getArea: () => {
            return "Ошибка! Треугольник не существует";
            
          },
          getPerimeter: () => {
             return "Ошибка! Треугольник не существует";
          }
          
        }
    } 
  }
