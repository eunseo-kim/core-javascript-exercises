/*

[ Person ]      ----------->   [ Person Prototype ]
- name                          - getName()
- age                           - getAge()
|
|
↓
[ Employee ]    ----------->   [ Employee Prototype ]
- name                          - getPosition()
- age
- position

*/

// 위 관계를 함수로 구현해봅시다. 단, es6의 class를 사용하지 않고 구현해봅시다!
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
  this.name = name || '이름없음';
  this.age = age || '나이없음';
  this.position = position || '직책모름';
}

// 이제 Employee의 인스턴스는 원하는 프로퍼티(또는 메서드)를 Employee의 prototype에서 찾고,
// 없으면 프로토타입 체인에 의해 Person prototype에서 찾게 됩니다.
// 왜냐하면 Employee의 prototype을 Person의 인스턴스로 지정해주었기 때문이에요.
Employee.prototype = new Person();
Employee.prototype.constructor = Employee; // constructor을 다시 설정해주어야 해요.

// 자식 클래스에 원하는 prototype 메서드를 다음과 같이 추가할 수 있습니다.
Employee.prototype.getPosition = function () {
  return this.position;
};

const eunseo = new Person('Eunseo', 23); // 아직 취뽀를 하지 못한 Eunseo는 Person 클래스의 인스턴스입니다.
console.log(eunseo.getName()); // Eunseo
console.log(eunseo.getAge()); // 23

const hyunjune = new Employee('Hyunjune', 27, 'newcomer'); // 취뽀에 성공한 Hyunjune은 이제 직장인이므로 (부모 클래스가 Person인)Employee 클래스의 인스턴스입니다.
console.log(hyunjune.getName()); // Hyunjune
console.log(hyunjune.getAge()); // 27
console.log(hyunjune.getPosition()); // newcomer

/*
💥하지만 위 방식으로 코드를 짜면 문제가 있습니다💥

- 만약 실수로 hyunjune의 name 프로퍼티를 지워버렸다고 가정합시다.
- 그렇게 되면 상식적으로 hyunjune.getName()을 호출한 결과가 'undefined'가 되어야 합니다.
- 하지만, Employee의 prototype을 Person의 인스턴스로 지정해주었기 때문에
프로토타입 체이닝에 의해 Person의 name 값인 '이름없음'이 출력될 것입니다.
- 이렇게 되면 Employee의 name 프로퍼티를 실수로 지워버렸다는 사실을 알아차리기 더욱 어려워질 것입니다.
- 따라서 이를 해결하기 위해 Employee와 Person 클래스 중간에 빈 껍데기 클래스 'Bridge'를 추가합니다.

아래의 예시를 확인해봅시다.
*/

delete hyunjune.name; // 실수로 hyunjune의 name 프로퍼티를 삭제했습니다!
console.log(hyunjune.getName()); // '이름없음'이 출력됩니다.
// 이 경우, (1) hyunjune의 name 프로퍼티를 삭제한것인지? / (2) hyunjune의 name 값을 전달하지 않은 것인지?
// 쉽게 판단하기가 어려워집니다!

// [비교]
delete eunseo.name;
console.log(eunseo.getName()); // undefined ▶ 이처럼 undefined가 출력되는 것이 자연스러워 보입니다!
