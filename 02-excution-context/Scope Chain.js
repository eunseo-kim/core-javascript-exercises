/*
LexicalEnvironment ▶ ⓑ Outer Environment Reference : Scope Chain
*/

console.log('0', a); // undefined ▶ a 호이스팅 시 undefined로 초기화되었습니다.
var a = 10;

function outer() {
  console.log('1', a); // 10
  // ▶ 현재 outer 실행 컨텍스트 안에서 a를 찾아보았지만 존재하지 않습니다.
  // ▶ 따라서 outerEnvironmentReference에 의해 전역 컨텍스트에 접근하여 a가 있는지 찾습니다.
  // ▶ 전역 컨텍스트에 a가 존재합니다. a의 값 10을 출력합니다.

  function inner() {
    // ▷ inner 실행 컨텍스트가 활성화되면 가장 먼저 "변수 a"를 호이스팅합니다.
    // ▷ a는 var형 이므로 호이스팅 시 undefined로 초기화됩니다.

    console.log('2', a); // undefined

    var a = 30; // ▷ inner 실행 컨텍스트 안에 있는 변수 a의 값을 30으로 바꿔봅니다.

    console.log('3', a); // 30
    // ▷ 이 경우, 현재 inner 실행 컨텍스트 안에서 a를 찾았더니 a가 존재합니다.
    // ▷ 따라서 전역 컨텍스트의 a는 가려지게 됩니다. 이를 섀도잉(shadowing)이라고 합니다.
  }

  // ▶ outer 실행 컨텍스트 안에 a가 존재하지 않습니다.
  // ▶ 따라서 전역 컨텍스트에 접근하여 전역 공간에 있는 변수 a의 값을 변경합니다.
  a = 50;

  inner();
}

outer();
console.log('4', a); // 50 - ▶ 전역 컨텍스트에 존재하는 a의 값을 출력합니다. 50입니다.
