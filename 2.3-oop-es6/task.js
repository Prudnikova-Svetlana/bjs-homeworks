// Задача 1

class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  // метод увеличивает state в 1.5 раза
  fix() {
    return this.state = this.state * 1.5;
  }
  
  set state(newCondition) {
    if (newCondition < 0) {
        this._state = 0;
    } else if (newCondition > 100) {
        this._state = 100;
    } else {
        this._state = newCondition;
  }
}
  get state() {
    return this._state;
  }

}
  const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
  console.log(sherlock.releaseDate); // 2019
  console.log(sherlock.state); // 100
  sherlock.fix(); 
  console.log(sherlock.state); // 100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount)
  this.type = "magazine";
  }
  
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount)
  this.author = author;
  this.type = "book";  
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
  super(author, name, releaseDate, pagesCount)
  this.type = "novel";      
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) { 
  super(author, name, releaseDate, pagesCount)
  this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
  super(author, name, releaseDate, pagesCount)
  this.type = "detective";
  }
}
  const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  console.log(picknick.type);
  console.log(picknick.releaseDate);
  console.log(picknick.pagesCount);
  picknick.fix();
  console.log(picknick.state); //15  

  // Задача 2

class Library  {
  constructor(name, books) { 
  this.name = name;  // Название библиотеки
  this.books = []; // это массив - хранилище книг
  }

/*
Реализуйте метод addBook(book), который будет в качестве аргумента принимать объект (книгу или журнал).
Метод должен добавлять книгу в хранилище books, только если состояние state книги больше 30.
*/
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
/* 
Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ, 
по которому будет производиться поиск (тип, автор, название, год выпуска и пр.) и искомое значение. 
Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
*/
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i ++) { 
      if (this.books[i][type] === value) {
        return this.books[i];
      } 
    }
        return null;
  }

/*
Создайте метод giveBookByName(bookName), который будет в качестве аргумента принимать название книги, 
запрошенной читателем. Если запрошенная книга найдена, метод должен удалять книгу из хранилища books, 
и возвращать её. Если книга не была найдена, метод должен возвращать null.
*/
  giveBookByName(bookName) {
    for (let n = 0; n < this.books.length; n ++) {
      if (this.books[n].name === bookName) {
        return this.books.splice(n, 1)[n];
        
      }
    }
        return null;
  }

}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4

library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задача 3

class StudentLog {
  constructor(name) {
  this.name = name;
  }
  
  getName(name) {
    return this.name;
  }
/*
 Метод возвращает количество поставленных оценок по данному предмету.
Оценка ставится числом в пределах от 1 до 5.
При неверной оценке дополнительно выдаётся сообщение с ошибкой, оценка в журнал не заносится. 
Текущее количество оценок все равно требуется вернуть.

Напишите пустую функцию.
Определитесь, как хранятся оценки внутри объекта (самый простой вариант - массив). 
Представьте, что предмет один и аргумент пока только оценка (без предмета) (edited) 
напишите в пустую функцию добавление оценки в "туда, где остальные"
добавьте проверку оценки
добавьте подсчет количества жлементов в массиве
добавьте деление по предметам

Создайте метод addGrade(grade, subject), который будет вносить оценку по соответствующему предмету. 
При этом grade — оценка, subject — предмет. Условия работы метода:
- Метод возвращает количество поставленных оценок по данному предмету.
- Оценка ставится числом в пределах от 1 до 5.
- При неверной оценке дополнительно выдаётся сообщение с ошибкой, оценка в журнал не заносится. 
- Текущее количество оценок все равно требуется вернуть.

*/
  addGrade (grade, subject) {
    //let arrGrade = [];
    //let arrSubject =[];
    //for (let i = 0; i < this.arrGrade.length; i ++) {

      //  arrGrade.push.grade[i];
        //return this.grade;
      //} else {
      //console.log("Вы пытались поставить оценку " + this.grade + "! по предмету " + this.subject + " Допускаются только числа от 1 до 5.");
        // }
    //}    
  }

  getAverageBySubject(subject) {

  }

  getTotalAverage() {

  }

}
const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров

//const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1