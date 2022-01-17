'use strict'

let json = JSON.stringify(true)
console.log(json)

const rabbit = {
  name : 'tori',
  color : 'white',
  size : null,
  birthDate : new Date(),
  // symbol : Symbol('id'),
  jump: () => {
    console.log(`${name} can jump`);
  } 
}

json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit, ['name', 'color', 'size'])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'won': value;
});
console.log(json)


console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate)