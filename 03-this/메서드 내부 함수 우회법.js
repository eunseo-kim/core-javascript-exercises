/* 
메서드 내부 함수에서 호출한 this가 전역객체가 아닌
자신을 감싸고 있는 obj 객체를 바라보도록 우회하고 싶을 때?
*/

// SOL #1 - Scope Chain을 이용합니다.
var obj1 = {
  a: 100,
  b: function () {
    var _this = this; // 메소드의 this는 자신을 호출한 객체(=obj1)입니다.
    function c() {
      console.log(_this); // 상위 컨텍스트로 가서 _this를 찾습니다.
      console.log(_this.a); // 100
    }
    c();
  },
};
obj1.b();

/*
[MDN - arrow function]
화살표 함수는 자신의 this가 없습니다.
대신 화살표 함수를 둘러싸는 렉시컬 범위(lexical scope)의 this가 사용됩니다.
화살표 함수는 일반 변수 조회 규칙(normal variable lookup rules)을 따릅니다.
때문에 현재 범위에서 존재하지 않는 this를 찾을 때, 
화살표 함수는 바로 바깥 범위에서 this를 찾는것으로 검색을 끝내게 됩니다.
*/

// SOL #2 - arrow function을 이용합니다.
var obj2 = {
  a: 100,
  b: function () {
    const c = () => {
      console.log(this);
      console.log(this.a); // 100
    };
    c();
  },
};
obj2.b();
