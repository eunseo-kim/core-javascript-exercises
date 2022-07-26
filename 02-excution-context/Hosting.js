/*
LexicalEnvironment ▶ ⓐ Environment Record : Hosting
*/

function origin() {
  sayHello();

  console.log(a);

  var a = 10;

  console.log(a);

  function sayHello() {
    console.log('Hello World!');
  }
}

origin();
/* [결과]
undefined
10
Hello World!
*/

// 결과가 예상과 다르게 나옵니다. 왜 그런걸까요?
// 바로 실행 컨텍스트가 활성화되면서 가장 먼저 LexicalEnvironment의
// environmentRecord에 현재 실행컨텍스트의 식별자 정보를 수집합니다.(=Hoisting)

// environmentRecord에 식별자 정보가 어떻게 저장되는지 쉽게 이해하기 위한 가상의 개념,
// hoisting(변수의 선언을 최상단으로 끌어올리는 것)에 대해 알아봅시다.

function hoisting() {
  // ----------------------------------------
  // environmentRecord에 수집된 식별자 정보
  // → 함수 선언문은 전체를 끌어올립니다.
  function sayHello() {
    console.log('Hello World!');
  }

  // → 변수의 선언만 (초기화는 X) 호이스팅합니다.
  var a;
  // ----------------------------------------

  sayHello();

  console.log(a);

  a = 10;

  console.log(a);
}

hoisting();

// origin()과 hoisting()의 출력 결과가 같습니다.

// [참고 - var, let, const]
// 참고로 var로 선언한 변수는 호이스팅 시 undefined로 변수를 자동으로 초기화합니다.
// 따라서 별도의 초기화 과정을 거치지 않았음에도 변수를 출력했을때 에러가 발생하지 않고, undefined가 출력됩니다.
// 하지만 let, const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.
// 즉, 별도의 초기화 과정을 거치지 않고 let, const로 선언된 변수를 출력하면 에러가 발생합니다.
