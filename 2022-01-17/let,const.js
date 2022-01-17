// ES6에서 let 과 const 만 사용
// let 값 자체의 변경이 필요한 예외적인 경우에만 사용
// const -> 객체  대부분의 사용


var a = 10
// console.log(window.a); // 10
console.log(a); // 10

// 전역위치에서 var 선언하면 전역변수임과 동시에 전역객체의 prop이다. >> 전역변수 선언을 최소화

let b = 30
delete b
console.log(b);
