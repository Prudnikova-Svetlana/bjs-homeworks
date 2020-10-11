"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    if (Number.isNaN(percent) === false) { 
      percent = parseInt(percent, 10);
    } else {
        console.log(`Параметр Процентная ставка содержит неправильное значение ${percent}`);   
      }
    
    if (Number.isNaN(contribution) === false) { 
      contribution = parseInt(contribution, 10);
    }  else {
         console.log(`Параметр Начальный взнос содержит неправильное значение ${contribution}`);  
       }

    if (Number.isNaN(amount) === false) { 
      amount = parseInt(amount, 10);
    }  else {
        console.log(`Параметр Общая стоимость содержит неправильное значение ${amount}`);  
       } 

      let bodyCredit = amount - contribution;
      let creditTerm = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
      let rate = percent / 1200;
      let monthlyPayment = bodyCredit * (rate + rate / (((1 + rate) ** creditTerm) - 1));
      let totalAmount = monthlyPayment * creditTerm;
      totalAmount = +totalAmount.toFixed(2);
      console.log(totalAmount);
        return totalAmount;
}

function getGreeting(name) {

    let greeting;
 
      if ((name === undefined) || (name === "") || (name === null)) {
        name = "Аноним";
        greeting = `Привет, мир! Меня зовут ${name}`;
        console.log(greeting);
      } else {
          greeting = `Привет, мир! Меня зовут ${name}`;
          console.log(greeting);
        }
          return greeting;
}
