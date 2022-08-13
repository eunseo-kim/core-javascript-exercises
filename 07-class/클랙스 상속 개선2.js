// 조금만 더 개선해봅시다. 매번 Bridge 클래스를 만들지 않고, 클로저를 사용해서 범용성을 높일 수 있을 것 같아요.

function Person(name, age) {
  this.name = name || '이름없음';
  this.age = age || '나이없음';
}

Person.prototype = {
  constructor: Person,
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

function Employee(name, age, position) {
  this.superClass(name, age); // 💡이 부분을 이해해봅시다.
  this.position = position || '직책모름';
}

/* -------------------------------------- */
// 이제 Parent/Class의 상속 구조를 연결할 때 이 extendClass를 사용하면 됩니다.
const extendClass = (function () {
  function Bridge() {}
  return function (Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.superClass = Parent; // 💡이 부분을 이해해봅시다.
  };
})();

/*
💡this.superClass 동작 과정

[1] this.superClass는 '메서드'입니다. 즉, 이 때의 this는 인스턴스 객체입니다.
그러나 Employee에는 superClass라고 하는 메서드가 없습니다.

[2] 이번에는 Employee Prototype에 superClass가 있는지 찾아봅니다.
마침 Employee의 Prototype에 superClass 메서드를 추가해주었군요!
superClass는 Parent, 즉 Person 생성자 함수가 연결되어있습니다.
즉, superClass(name, age)는 Person(name, age)를 실행하는 것입니다.

[3] 이때 this.superClass의 this는 '인스턴스 객체'입니다.
따라서 Person(name, age)를 실행하되, 이때 Person 내부의 this는 호출한 '인스턴스 객체'로 바인딩 될 것입니다.

[4] 최종적으로 Person의 this.name, this.age를 사용하여 Employee의 인스턴스 객체의 name, age 프로퍼티를 구현할 수 있습니다.

*/

/* -------------------------------------- */

// 사용해봅시다!
extendClass(Person, Employee);
Employee.prototype.getPosition = function () {
  return this.position;
};

const eunseo = new Person('Eunseo', 23);
console.log(eunseo.getName()); // Eunseo
console.log(eunseo.getAge()); // 23

const hyunjune = new Employee('Hyunjune', 27, 'newcomer');
console.log(hyunjune.getName()); // Hyunjune
console.log(hyunjune.getAge()); // 27
console.log(hyunjune.getPosition()); // newcomer

// 잘 동작합니다! 삭제하더라도 예측가능한 결과가 출력됩니다.
delete hyunjune.name;
console.log(hyunjune.getName()); // undefined
