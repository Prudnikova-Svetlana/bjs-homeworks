// Задача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(item => item.name);
}
console.log(getNames());

function getCountReliableWeapons(durability) {
  return weapons.filter(item => item.durability > durability).length;
}

console.log(getCountReliableWeapons(200));

function hasReliableWeapons (durability) {
  return weapons.some(item => item.durability > durability);
} 

console.log(hasReliableWeapons(250));

function getReliableWeaponsNames(durability) {
  return weapons
  .filter(item => (item.durability > durability))
  .map(item => item.name);    
}
  
console.log(getReliableWeaponsNames(200));

function getTotalDamage() {
  return weapons.reduce((accumulator, currentValue) => currentValue.attack + accumulator, 0);
}

console.log(getTotalDamage());
