// Задача 1
console.clear();

//Все последующие функции следует реализовывать без использования циклов

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
// 1. Напишите функцию getNames, которая будет возвращать имена всех оружий.
function getNames() {
  return weapons.map(item => item.name);
}
console.log(getNames());

// 2. Напишите функцию getCountReliableWeapons, которая принимает значение 
//прочности и возвращает количество оружий больше принимаемой прочности

function getCountReliableWeapons(durability) {
  return weapons.filter(item => item.durability > durability).length;
}

console.log(getCountReliableWeapons(200));

// 3. Напишите функцию hasReliableWeapons, которая принимает значение прочности и 
// возвращает вердикт: есть ли оружия прочней принимаемой прочности?

function hasReliableWeapons (durability) {
  return weapons.some(item => item.durability > durability);
} 

console.log(hasReliableWeapons(250));

// 4. Напишите функцию getReliableWeaponsNames, которая принимает значение прочности 
// и возвращает имена оружий, которые прочней полученного значения.

function getReliableWeaponsNames(durability) {
  return weapons
  .filter(item => (item.durability > durability))
  .map(item => item.name);
      
}
  
console.log(getReliableWeaponsNames(200));

// 5. Напишите функцию getTotalDamage, которая вернёт общую сумму урона всех оружий.

function getTotalDamage() {
  const weaponsAttack = weapons.map(item => item.attack);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return weaponsAttack.reduce(reducer, 0); 

}

console.log(getTotalDamage());
