// 참조타입

var origin = { c: 10, d: 'ddd' };
var clone = origin;

console.log(origin === clone); // true

// clone의 프로퍼티 c의 값을 바꿔봅시다.
// 이때 c는 원시타입과 동일한 방법으로 (20이 저장된) 새로운 주소값을 변수(=c)의 값에 저장하게 될 것입니다.
clone.c = 20;

// 하지만 origin와 clone는 여전히 동일한 객체를 가리킵니다.
// 따라서 clone의 값을 바꿔도 원본객체(origin)의 값도 동일하게 바뀌는 현상이 발생합니다.
console.log(origin === clone); // true
console.log(origin.c); // 20

// 비교 [1] - obj1와 obj2는 "서로 다른" 객체 2개입니다.
var obj1 = {};
var obj2 = {};
console.log(obj1 === obj2); // false
console.log(obj1 == obj2); // false

// 비교 [2]
var obj3 = { name: 'eunseo' };
var obj4 = { name: 'eunseo' };
console.log(obj3 === obj4); // false
console.log(obj3.name === obj4.name); // true

// 비교 [3]
var obj5 = { age: 10 };
var obj6 = { money: 10 };
console.log(obj5 === obj6); // false
console.log(obj5.age === obj6.money); // true
