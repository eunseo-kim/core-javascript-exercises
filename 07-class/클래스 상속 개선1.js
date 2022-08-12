/*

Person을 상속받는 Employee 클래스를 만들어봅시다.

그런데 Person의 prototype 메서드는 같이 쓰고 싶은데...
Person의 프로퍼티는 사용하고 싶지 않아요. 어떻게 구현해야 할까요?

💡Person의 prototype만 동일한 Bridge 클래스를 만들고
Person이 아닌, Bridge 클래스를 Employee 클래스에 상속합니다!

Person   -----------   Person Prototype   
- name                 - getName()
- age                  - getAge()

                           ↕ (같습니다.)

                       Bridge Prototype   -----------   Bridge
                       - getName()
                       - getAge()

                            |              
                            |
                            |
                            ↓

                        Employee  -----------  Employee Prototype
                        - name                 - getPosition()
                        - age 

                            |
                            |
                            |
                            ↓

                        인스턴스

*/

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

/* -----------이 부분 주의깊게!----------- */
function Bridge() {}
Bridge.prototype = Person.prototype;

Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;

Employee.prototype.getPosition = function () {
  return this.position;
};
/* -------------------------------------- */

// 사용해봅시다!
const eunseo = new Person('Eunseo', 23);
console.log(eunseo.getName()); // Eunseo
console.log(eunseo.getAge()); // 23

const hyunjune = new Employee('Hyunjune', 27, 'newcomer');
console.log(hyunjune.getName()); // Hyunjune
console.log(hyunjune.getAge()); // 27
console.log(hyunjune.getPosition()); // newcomer

// 잘 동작해요! 그렇다면 '실수로' hyunjune의 name 프로퍼티를 삭제했다고 가정합시다.
delete hyunjune.name;

// 이제는 getName으로 name 프로퍼티를 호출해도 Bridge 클래스에 name 프로퍼티가 없기 때문에
// 프로토타입 체인이 발생하더라도 예측 가능한 결과, 'undefined'가 출력돼요!
console.log(hyunjune.getName()); // undefined
