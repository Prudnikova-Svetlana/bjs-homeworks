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
  console.log(picknick.state); // 10
  console.log(picknick.type); // fantastic
  console.log(picknick.releaseDate); // 1972
  console.log(picknick.pagesCount); // 168
  picknick.fix();
  console.log(picknick.state); // 15  

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
        return this.books.splice(n, 1)[0]; 
                                      // здесь n = 0
        // Результатом работы метода splice является массив вырезанных элементов. Если вырезан один элемент, 
       //то массив будет длиной в один элемент, а нужный нам будет находиться под индексом 0.
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
/*
5.   Протестируйте корректность работы классов и методов, разыграв тестовый сценарий:
1. Создайте библиотеку;
2. Добавьте в библиотеку несколько печатных изданий различных типов;
3. Найдите книгу, изданную в 1919 году (создайте такую книгу при необходимости);
4. Выдайте любую книгу;
5. Испортите выданную книгу;
6. Почините выданную книгу;
7. Попытайтесь добавить починенную книгу обратно в библиотеку.
*/

const kristi = new PrintEditionItem("Агата Кристи", "Загадка Эндхауза", 1932, 235);
console.log(kristi.name); // Агата Кристи
console.log(kristi.state); // 100
kristi.fix(); 
console.log(kristi.state); // 100

// 1. Создайте библиотеку;
const cityLibrary = new Library("Городская Библиотека");

// 2. Добавьте в библиотеку несколько печатных изданий различных типов;
cityLibrary.addBook(new DetectiveBook("Гилберт Кийт Честертон", "Тайна отца Брауна", 1935, 150));
cityLibrary.addBook(new DetectiveBook("Агата Кристи", "Загадка Эндхауза", 1932, 235));

cityLibrary.addBook(new FantasticBook("Джон Толкин", "Властелин колец", 1964, 350));
cityLibrary.addBook(new FantasticBook("Фрэнк Герберт", "Дюна", 1972, 168));

cityLibrary.addBook(new NovelBook("Трумен Капоте", "Завтрак у Тиффани", 1958, 250));
cityLibrary.addBook(new NovelBook("Андре Моруа", "Письма незнакомке", 1953, 170));

cityLibrary.addBook(new Magazine("Вокруг света", 1978, 50));
cityLibrary.addBook(new Magazine("Наука и жизнь", 1986, 76));
cityLibrary.addBook(new Magazine("Моделист-конструктор", 1990, 46));

console.log(cityLibrary.findBookBy("name", "Ромео и Джульетта")); //null

// 3. Найдите книгу, изданную в 1978 г;
console.log(cityLibrary.findBookBy("releaseDate", 1978)); //"Вокруг света"

console.log(cityLibrary.findBookBy("author", "Трумен Капоте").name); // Завтрак у Тиффани
console.log(cityLibrary.findBookBy("releaseDate", 1986).name); //"Наука и жизнь"

console.log("Количество книг до выдачи: " + cityLibrary.books.length); //Количество книг до выдачи: 9

// 4. Выдайте любую книгу;
cityLibrary.giveBookByName("Вокруг света");
console.log("Количество книг после выдачи: " + cityLibrary.books.length); //Количество книг после выдачи: 8
// 4. Выдайте любую книгу;
cityLibrary.giveBookByName("Завтрак у Тиффани");
console.log("Количество книг до выдачи: " + cityLibrary.books.length); //Количество книг после выдачи: 7
// 4. Выдайте любую книгу;
cityLibrary.giveBookByName("Письма незнакомке");
console.log("Количество книг после выдачи: " + cityLibrary.books.length); //Количество книг после выдачи: 6

// 5. Испортите выданную книгу;
const spoiledBreakfast = new NovelBook("Трумен Капоте", "Завтрак у Тиффани", 1958, 250);
console.log(spoiledBreakfast.name); // Завтрак у Тиффани
spoiledBreakfast.state = 30;
console.log(spoiledBreakfast.state); //30

// 6. Почините выданную книгу;
const breakfast = new NovelBook("Трумен Капоте", "Завтрак у Тиффани", 1958, 250);
console.log(breakfast.name); // "Завтрак у Тиффани"
breakfast.state = 30;
console.log(breakfast.state); //30
breakfast.fix();
console.log(breakfast.state); //45 

//  Попыталась найти выданную книгу
console.log(cityLibrary.findBookBy("author", "Трумен Капоте")); // null  нет книги
// 7. Обратно вернула в библиотеку починенную книгу
cityLibrary.addBook(new NovelBook("Трумен Капоте", "Завтрак у Тиффани", 1958, 250)); 
// Попыталась найти вернувшуюся с починки  книгу
console.log(cityLibrary.findBookBy("author", "Трумен Капоте")); // Есть книга!

// Задача 3
class StudentLog {
  constructor(name) {
  this.name = name;
  this.grades = {};
  }

   getName(name) {
    return this.name;
   }

    addGrade(grade, subject) {
      let arrGrades = [];
      console.log(this);
      const arrSubject = Object.keys(this.grades); // возвращаем массив ключей(предметов)
      
      if (grade >= 1 && grade <= 5) {
      // Проверяем есть ли в объекте this.grades оценка по предмету 
        if (arrSubject.indexOf(subject) === - 1) {  // если нет предмета с оценкой 
          // пишем в объект this.grades свойство(предмет) и значение(массив оценок)
          this.grades[subject] = this.pushGrade(arrGrades, grade); // пытаюсь добавить сразу массив из оценок
           //this.grades[subject] = grade; // если бы так написала, то только бы оценка попала, а мне надо массив
           return this.grades[subject].length;
          } else {  // если уже есть оценка, то только пуш саму оценку в предмет
            this.grades[subject].push(grade);
            
            return this.grades[subject].length;
          }
      } else {
          console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
          
          return this.grades[subject].length;  
        }

    } 
    // этот метод сделала для того, чтобы при первом попадании предмета с оценкой в журнал
    // сразу для оценок создался массив, куда будем собирать все оценки по предмету
    pushGrade(numberPush, number) {
      if (numberPush.length === 0) {
          numberPush.push(number);
          return numberPush;
        }
    }
    // этот метод сделала для подсчета средней оценки по предмету
    getAverageMark(marks) {
      let arrMarks =[];
      arrMarks = marks;
      let summMarks = 0;
      let averages = 0;
      
        if (arrMarks.length === 0) {
          return averages;
        }
          for (let i = 0; i < arrMarks.length; i ++) {
            summMarks = summMarks + arrMarks[i];
          }
            averages = summMarks / arrMarks.length;
            return (+ averages.toFixed(1));
    }
    // Создайте метод getAverageBySubject(subject), получающий среднюю оценку по названию предмета. 
    // При отсутствии предмета нужно выдать 0.
    getAverageBySubject(subject) {
      let averageRating = 0;
      let summMarks = 0;
      
        if (this.grades[subject].length === 0) {
          return averageRating;
        }
          for (let i = 0; i < this.grades[subject].length ; i ++) {
            summMarks = summMarks + this.grades[subject][i];
          }
            averageRating = summMarks / this.grades[subject].length
            return (+ averageRating.toFixed(1));
    }
 
    // Создайте метод getTotalAverage(), получающий среднюю оценку по всем предметам. 
    // Средняя оценка рассчитывается как сумма всех оценок на их количество. При отсутствии оценок нужно выдать 0.
    getTotalAverage() {
      let average = 0;
      let averageRatingLesson = {};
       
        if (this.grades === {}) {
          return average;
        }
          for (let prop in this.grades) {
            // С помощью цикла перебираем поля this.grades и записываем результаты в новый объект averageRatingLesson
            // Благодаря циклу получаемя массив со средними оценками по каждому предмету 
            averageRatingLesson[prop] = this.getAverageMark(this.grades[prop]);
            //console.log(averageRatingLesson);
          }  
            // с помощью этого метода возвращаем массив значений со средними оценками,
            // чтобы посчитать среднюю оценку по всем предметам используем метод this.getAverageMark
            average = this.getAverageMark(Object.values(averageRatingLesson));
            return (+ average.toFixed(1));           
    }

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra')); // 1
console.log(log.addGrade(2, 'math')); // 1
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra')); // 2
console.log(log.addGrade(5, 'geometry')); // 1
console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
      
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75