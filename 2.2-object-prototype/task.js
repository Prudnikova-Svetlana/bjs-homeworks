//String.prototype.isPalindrome - для задачи №1

/*
Используйте прототип класса String для добавления новой возможности
В прототип класса String добавьте функцию isPalindrome, которая будет проверять строку на полиндром
Используйте this для обращения к текущей строке на которой применяется функция
Не используйте стрелочную функцию (предпочитая обычную) для того, что бы не потерять контекст
Функция должна возвращать true если строка читается одинаково в любую сторону, и false если строка читается по-разному.
Реализуйте регистронезависимость функции
Проверьте вашу функцию: console.log("А роза упала на лапу Азора")//true

у вас isPalindrome будет в прототипе строки, и соответственно появится у все строк, то есть после:

String.prototype.isPalindrome = function () {
можно будет вызывать

"пример строки".isPalindrome();
а откуда вы узнаете к какой строке применили isPalindrome? строка упадет в this

String.prototype.isPalindrome = function isPalindrome() {
    const str = this;
*/ 

String.prototype.isPalindrome = function() {
  const str = this.toLowerCase;
  let word = str.length;
  let middleWord = Math.floor(word/2);
    
    for ( let i = 0; i < middleWord; i++ ) {
      if (str[i] !== str[word - 1 - i]) {
        return false;
      }
    }
      return true;
}
//console.log("А роза упала на лапу Азора ");

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
let arrMarks = marks;
let averageSumm = 0;
let average = 0;
let roundedAverage;

  if (arrMarks.length === 0) {
      return average;
  }
    for (let i = 0; i < arrMarks.length; i ++ ) {
      averageSumm = averageSumm + arrMarks[i];
    }
      average = averageSumm / arrMarks.length;
      roundedAverage = Math.round(average);
   
  return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
  let date = new Date();
  let now = + date;
  let birthdayDate = + new Date(birthday);
  console.log(birthdayDate);
  let diff = now - birthdayDate; // это разница в миллисекундах
/*
     Расчет количества миллисекунд в году
   1 000 мс * 60 секунд * 60 минут * 24 часа * 365 дней = 31 536 000 000 мс
   1 000 мс * 60 секунд * 60 минут * 24 часа * 366 дней = 31 622 400 000 мс (високосный год).

     Примечание
В Григорианском календаре принято, что средняя продолжительность года составляет 365,2425 суток. 
Подсчитаем среднее количество миллисекунд в году:
1 000 мс * 60 секунд * 60 минут * 24 часа * 365,2425 дней = 31 556 952 000 мс
  

  // Определяем возраст пользователя в годах и затем округляем 
*/ 
  let age = diff / 31556952000; 
  let verdict = age >= 18 ? true : false;
    return verdict;
}