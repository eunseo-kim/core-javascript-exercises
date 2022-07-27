/*
[콜백 호출 시 this]
*/

// 1. 함수로 실행한 경우
var callback1 = function () {
  console.log(this === global); // global
};

var obj1 = {
  a: 1,
  b: function (c) {
    c(); // 콜백을 함수로 호출했기 때문에 콜백의 this는 global입니다.
  },
};
obj1.b(callback1);

// 2. 함수로 실행한 경우
var callback2 = function () {
  console.log(this === obj2); // call을 통해 명시적으로 obj2를 바인딩해주었습니다.
};

var obj2 = {
  a: 1,
  b: function (c) {
    c.call(this); // 이 때의 this는 obj2입니다.
  },
};
obj2.b(callback2);

// 3. setTimeout과 콜백
var callback3 = function () {
  console.log(this); // { a: 1 }
};

var obj3 = {
  a: 1,
};

setTimeout(callback3.bind(obj3), 1000); // bind로 callback3의 this를 obj3로 지정했습니다.

// 4. addEventListener과 콜백
// addEventLister은 this를 별도로 미리 지정해둡니다. 바로 [이벤트가 발생한 타겟 엘리먼트]가 this입니다.
var obj4 = { a: 1 };

document.getElementById('button').addEventListener(
  'click',
  function () {
    console.log('callback', this);
  }.bind(obj4), // addEventLister에서 콜백의 this를 별도로 지정하고 싶다면 다음과 같이...
);
