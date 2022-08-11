// [1] 프로토타입을 활용한 메소드 상속
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const eunseo = new Person('은서', 23);
eunseo.sayHi();

const hyunjune = new Person('현준', 27);
hyunjune.sayHi();

const kitty = new Person('kitty', 10);
kitty.sayHi();

console.log(
  '모두 다 같은 프로퍼티를 참조하고 있어요 →',
  eunseo.sayHi === hyunjune.sayHi &&
    hyunjune.sayHi === kitty.sayHi &&
    eunseo.sayHi === kitty.sayHi,
); // true

// 사용하려는 공통 프로퍼티를 prototype에 선언하고
// 각 인스턴스들이 해당 프로퍼티를 '참조'하는 형태로 사용합니다.
// → 장점? 메모리 사용을 최적화시킬 수 있습니다!

// =====================================================================
// [비교] 프로토타입 상속을 사용하지 않고 sayWelcome 메서드를 생성해봅시다.
eunseo.sayWelcome = function () {
  console.log(`Welcome ${this.name}`);
};

hyunjune.sayWelcome = function () {
  console.log(`Welcome ${this.name}`);
};

eunseo.sayWelcome();
hyunjune.sayWelcome();
console.log(eunseo.sayWelcome === hyunjune.sayWelcome); // 💥false
// → 상속된 프로퍼티가 아니므로 서로 다른 메서드입니다.
// 즉, 동일한 역할을 수행하는 함수이지만 메모리를 2배나 차지하게 되어 비효율적입니다.
