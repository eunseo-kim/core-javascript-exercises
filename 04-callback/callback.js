var obj = {
  values: [1, 2, 3],
  foo: function (i) {
    console.log(this === obj);
    console.log(this === global);
  },
};

// [1] 메서드로 호출한 경우? => 메서드 내의 this는 호출한 객체 입니다.
obj.foo(100); // this === obj ▶ true

// [2] 하지만 만약 obj.foo()를 콜백 '함수'로 넘기면?
// this는 forEach에 의해 '메서드'가 아닌, '함수'로서 호출됩니다.
// 즉, 이 경우 '함수로 호출된 경우의 this'이므로 this는 전역 객체입니다.
var arr = [1, 2, 3, 4, 5];
arr.forEach(obj.foo); // this === global ▶ true

// [3] 그렇다면, 이 경우 obj.foo의 this를 명시적으로 obj에 바인딩하려면 어떻게 해야 할까요?
// 2가지 방법이 있습니다.

// [3-1] forEach의 2번째 매개변수에 this로서 사용할 값을 넣어줍니다. (forEach의 기본 특징입니다.)
arr.forEach(obj.foo, obj); // this === obj ▶ true

// [3-2] bind 메소드를 사용할 수도 있습니다.
arr.forEach(obj.foo.bind(obj)); // this === obj ▶ true
