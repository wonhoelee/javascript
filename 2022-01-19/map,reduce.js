// foreach : for문을 돌리는거랑 같은개념
// map : for문을 돌려 새로운 배열을 만드는 목적, return 필수
// reduce : for문을 돌 려서 최종적으로 다른 무언가를 만드는 목적 return 필수

const a = [1, 2, 3]
const b = a.map(function (v, i, arr) {
  console.log(v, i, this);
  return this[0] + v;
}, [10])

console.log(b);


const arr = [1, 2, 3]
const res = arr.reduce(function (p, c, i, arr) {
  console.log(p, c, i);
  return p + c
}, 10)
console.log(res);

const c = [ 1,2,3,4,5,6,7,8,9,10]
const d = c.reduce((p,c) => (p+c))
console.log(d);