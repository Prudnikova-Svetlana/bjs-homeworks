// Задача 1

class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
    state = 100;
    type = null;

    // метод увеличивает state в 1.5 раза
  fix() {
    return this.state = this.state * 1.5;
  }

  set state(newCondition) {
    if (newCondition < 0) {
        this.state = 0;
    }
    if (newCondition > 100) {
        this.state = 100;
    } 
    return newCondition;
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
    this.type = "book";
    this.author = author;
  }
}

  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "novel";      
  }
}

  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.type = "fantastic";
    }
  }

  class DetectiveBook extends NovelBook {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.type = "detective";
    }
  }
  const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15  

  // Задача 2

class Library extends Book {
  constructor(author, name, releaseDate, pagesCount) { 
  super(author, name, releaseDate, pagesCount)
  this.name = name;
  }
    
  books = []; // это хранилище книг
  // принимает объект (книгу или журнал) и добавляет книгу в хранилище books
   addBook(book) {
    if (this.state > 30) {
      this.books.push(book.name);
      console.log(book.name + " -- это название книги book.name");
      console.log("Добавлена книга в хранилище:  " + book.name + ".  Это массив-хранилище с книгами : " + this.books);
    }
   }

   findBookBy(type, value) {
    
    type = {
     
    }
   }

   giveBookByName(bookName) {
    if (bookName === true) {
      delete this.books[bookName];
      return bookName;
    }
    if (bookName === false) {
        return bookName = null;
    }
  } 
}

const library = new Library("Библиотека имени Ленина");
console.log(library.name);

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(library.findBookBy("name", "Властелин колец")); //null
//console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
    }
}