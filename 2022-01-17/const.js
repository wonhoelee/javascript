const OBJ = {
  prop1 : 1,
  prop2 : 2,
}
OBJ.prop1 = 3

console.log(OBJ.prop1);
OBJ.prop3 = 4
console.log(OBJ);
console.log(OBJ.prop3);

const ARR = [0, 1, 2]
ARR.push(3)

console.log(ARR);
delete ARR[0]
console.log(ARR);
ARR = 3