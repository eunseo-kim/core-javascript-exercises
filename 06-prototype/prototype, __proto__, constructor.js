function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(`Hello, my name is ${this.name}\nI'm ${this.age} years old!\n`);
};

var eunseo = new Person('은서', 23);

var clone1 = new eunseo.__proto__.constructor('클론1', 10);
var clone2 = new eunseo.constructor('클론2', 20);
var clone3 = new Person.prototype.constructor('클론3', 30);
var originalClass = Object.getPrototypeOf(eunseo);
var clone4 = new originalClass.constructor('클론4', 40);

clone1.introduce(); // Hello, my name is 클론1 I'm 10 years old!
clone2.introduce(); // Hello, my name is 클론2 I'm 20 years old!
clone3.introduce(); // Hello, my name is 클론3 I'm 30 years old!
clone4.introduce(); // Hello, my name is 클론4 I'm 40 years old!

// ---------------------------------------------------
/*

생성자 함수 ------prototype------>  Prototype 객체
           <-----constructor-----       ↑
                                        |
                                        | Object.getPrototypeOf(인스턴스)
                                        | 인스턴스.__proto__
                                        | 숨김 프로퍼티 → 인스턴스.[[prototype]]
                                        |
                                        |
                                     인스턴스
*/
