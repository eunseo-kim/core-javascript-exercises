/*
[생성자 함수 호출 시]
- 새로 만드는 인스턴스 객체가 this가 됩니다.
- 단, js에서 생성자 함수를 사용하기 위해서는 'new' 연산자를 꼭 앞에 붙입니다.
- new 연산자 없이 사용하는 경우는 그냥 함수를 호출하는 것과 다르지 않습니다.
  (즉, new가 없는 경우의 this는 전역객체입니다.)
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// [1] new 없이 함수를 호출한 경우의 this는 전역 객체입니다.
var eunseo = Person('eunseo', 23);
console.log(global.name, global.age); // 따라서 글로벌 객체에 프로퍼티가 추가되었습니다.

// [2] 생성자 함수로 호출할 경우, 생성된 인스턴스 객체가 곧 this가 됩니다.
var hyunjune = new Person('hyunjune', 27);
console.log(hyunjune); // Person { name: 'hyunjune', age: 27 }
