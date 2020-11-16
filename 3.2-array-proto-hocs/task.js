console.clear();
/*
  Задача 2 Ускорение долгих вычислений (альтернативный вариант задания)

2.1 Возвращение функции
Напишите функцию memorize, которая должна возвращать другую функцию. Сначала пустую функицю. 
Это важный момент, так как если это у вас не получается, значит вы не усвоили материал занятия функций высшего порядка.

const resultFunction = memorize();
resultFunction(); // <= должно вызываться без ошибок
*/

function memorize1() {
  const firstFunction = () => "Это результат возвращаемой функции ";
  return firstFunction;
}
const resultFirstFunction = memorize1();
console.log(resultFirstFunction()); // <= должно вызываться без ошибок

/*
2.2 Получение аргументов
Переделайте возвращаемую функцию, чтобы она принимала набор аргументов и 
выводила их на консоль. Тоесть выполнение должно быть примерно такое:

const resultFunction = memorize();
resultFunction(1,2,3,4); // <= должно вывести: 1,2,3,4
*/

function memorize2() {
  return function secondFunction() {
  console.log(Array.from(arguments).join(","));
  }

}
const resultSecondFunction = memorize2();
resultSecondFunction(1,2,3,4); // <= должно вывести: 1,2,3,4

/*
2.3  Вычисление функции
Переделайте memorize, чтобы она принимала функцию, возвращённой функции выполнять эту полученную функцию
const resultFunction = memorize(a => a ** 2);
resultFunction(2); // <= должно вывести: 4
resultFunction(5); // <= должно вывести: 25
Важно! Вы не должны возвращать полученную функцию, вы должны вернуть другую функцию, которая будет выполнять эти вычисления.
*/
function memorize3(fn) {
  return function thirdFunction() {
  console.log((fn)(Array.from(arguments)));
  }  
}
const resultThirdFunction = memorize3(a => a ** 2);
resultThirdFunction(2); // <= должно вывести: 4
resultThirdFunction(5); // <= должно вывести: 25

/*
  2.4 Поиск посчитанного элемента
В memorize сделайте массив с некоторыми значениями объектов. Например возьмите тот же пример из задания:
Из аргументов возвращаемой функции с помощью find находите объект в памяти. 
То есть вы создали этот массив и дальше выполнение должно быть примерно таким:

const resultFunction = memorize((a,b) => a+b);
resultFunction(3,4); // <= должно вывести: 7
resultFunction(5,6); // <= ничего не найдёт в памяти.

Необходимо в памяти найти такой объект у которого в свойстве args будет такое же значение, 
как и массив полученных аргументов. Для сравнения массивов используйте compareArrays.

2.1.3. compareArrays
Создайте вспомогательную функцию compareArrays( arr1, arr2 ), которая с помощью функции
высшего порядка будет сравнивать значения двух массивов. Если массивы имеют одинаковые 
значения на одинаковых индексах, compareArrays должна выдавать true (иначе false). 
Используйте метод every для сравнения элементов одного массива с соответствующими элементами другого массива.
*/

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element,index) => element === arr2[index]);
}    
compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize4(fn, limit) {
  const memory = [];
    return function fourthFunction(...args) {
      let findObject = memory.find(item => compareArrays(item.args, args)); // находим объект в памяти
      // Необходимо в памяти найти такой объект у которого в свойстве args будет такое же значение, 
      // как и массив полученных аргументов. Для сравнения массивов используйте compareArrays.
      if (findObject) {
        return `Результат = ${findObject.result} берется из памяти`; // Если история о вызове функции fn найдена, 
      }                           //то функция должна вернуть свойство result найденного объекта.
       // Вычислить результат fn с переданными аргументами.
       //Добавить запись о вызове fn в memory.
       //При количестве элементов memory более limit удалить лишнее.
       //Вернуть результат fn с переданными аргументами.
        const result = fn(...args);
        memory.push({args, result});  
        if (memory.length > limit) {
          memory.splice(limit);
        }
        return `Функция вызвана не из памяти: результат = ${result}`;
    }
} 
const resultFunction = memorize4(((a, b) => a + b), 6); // 6 - это лимит элементов в массиве memory
resultFunction(3, 4); // <= должно вывести: 7 
resultFunction(5, 6); // <= ничего не найдёт в памяти.
console.log(resultFunction(8, 6));
console.log(resultFunction(5, 6));
resultFunction(5, 6);
console.log(resultFunction(7, 13));
console.log(resultFunction(5, 15));
console.log(resultFunction(8, 6));

/*
Критерии выполнения
Добавьте внутрь передаваемой функции fn вывод в консоль системной информации о том, что функция вызвана не из памяти.
Добавьте внутрь memorize вывод в консоль о том, что результат берётся из памяти.
Убедитесь на основе вывода в консоль, что параметр limit работает корректно.
*/



  
 