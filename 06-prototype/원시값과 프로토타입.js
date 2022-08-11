/*
참고: https://ko.javascript.info/native-prototypes
문자열과 숫자, 불린값은 객체가 아닙니다. 
그런데 이런 원시 타입 값의 프로퍼티에 접근하려고 하면
내장 생성자 String, Number, Boolean을 사용하는 임시 래퍼(wrapper) 객체가 생성됩니다. 
임시 래퍼 객체는 이런 메서드를 제공하고 난 후에 사라집니다.
 */

const string = '문자열';
const number = 100;
const boolean = true;

console.log(string.__proto__ === String.prototype); // true
console.log(number.__proto__ === Number.prototype); // true
console.log(boolean.__proto__ === Boolean.prototype); // true

console.log(string.includes === String.prototype.includes); // true
console.log(number.toFixed === Number.prototype.toFixed); // true
console.log(boolean.toString === Boolean.prototype.toString); // true
