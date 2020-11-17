console.clear();

  //Задача 2 Ускорение долгих вычислений (альтернативный вариант задания)

function memorize1() {
  const firstFunction = () => "Это результат возвращаемой функции ";
  return firstFunction;
}
const resultFirstFunction = memorize1();
console.log(resultFirstFunction()); 

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element,index) => element === arr2[index]);
}    
compareArrays([8, 9], [6]); 
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); 
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); 
compareArrays([1, 2, 3], [2, 3, 1]); 
compareArrays([8, 1, 2], [8, 1, 2]); 

function memorize(fn, limit) {
  const memory = [];
    return function (...args) {
      let findObject = memory.find(item => compareArrays(item.args, args)); 
      if (findObject) {
        return findObject.result; 
      }                           
        const result = fn(...args);
        if (memory.length > limit - 1) {
          memory.shift();
        }
        memory.push({args, result});  
        return result;
    }
} 

const resultFunction = memorize(((a, b) => a + b), 6); // 6 - это лимит элементов в массиве memory
console.log(resultFunction(3, 4)); 
console.log(resultFunction(5, 6)); 
console.log(resultFunction(8, 6));
console.log(resultFunction(5, 6));
console.log(resultFunction(7, 13));
console.log(resultFunction(5, 15));
console.log(resultFunction(8, 6));
console.log(resultFunction(3, 9));
console.log(resultFunction(1, 2));
console.log(resultFunction(1, 7));



  
 