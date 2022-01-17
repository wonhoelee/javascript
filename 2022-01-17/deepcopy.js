var a = {
  a : 1,
  b : [1,2,3],
  c : {d: 1, e:2}
}
var b = Object.assign({},a);
b.b =Object.assign([],a.b)

console.log(b);