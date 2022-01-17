// 1. use strict 스트릭모드로 선언하고 시작하기
// added in ES 5
// use thi for Valina Javascript
'use strict'

// 2. Variavle
// let (add on ES 6)
let globalName = 'globalName'
{
  let name = 'won';
  console.log(name);
  name =  'hello';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declartion from bottom to top 파일 제일위로 올려서 선언) 

{
  age = 4;
  var age
}
console.log(age)

// 3. constanc (immutable 한번 할당하고 나서 변경불가)
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not anumber ' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 12345678945612345648979874652132n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)


// Boolean
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`)
console.log(`value: ${test}, type: ${typeof test}`)

// null
 let noting = null;
 console.log(`value: ${noting}, type: ${typeof noting}`)

 // undefined 
 let x;
 console.log(`value: ${x}, type: ${typeof x}`)


// symbol 
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2)

const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object
const won = {name: 'won' , age: 29};
console.log(won.age)

// 5. Dynamic typning
let text = 'hello';
console.log(text.charAt(0))  // 0번째 스트링 출력
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`)
// console.log(text.charAt(0))

