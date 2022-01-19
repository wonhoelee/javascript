// const tag = function(strs, arg1, arg2) {
//   return {strs:strs, args:[arg1,arg2]}
// }
// const res = tag `순서가${1} 이렇게 ${2}`
// console.log(res);

const setDecimalSeperators = function (strs, ...args) {
  return args.reduce(function (p, c, i) {
    return p + strs[i] + (c + '').replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
  }, '') + strs[strs.length - 1]
}
const res = setDecimalSeperators `이 사과는 하나에 ${2000}원이고, 총 ${1234567}개를 구입하시면 총 ${2000 * 1234567}원 이에요.`
console.log(res)