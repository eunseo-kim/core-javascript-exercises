/*
[클로저 : Closure]
- 클로저는 함수와 그 함수가 선언된 당시의 어휘적 환경의 조합입니다. (MDN)
- 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수입니다. (poiemaweb)

*참고
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
- https://poiemaweb.com/js-closure

이 클로저만이 가지고 있는 아주 특이한 특징이 있는데요,
바로 함수 안의 지역변수가 함수가 종료된 이후에도 외부 공간에서 좀비처럼 계속 살아있다는 점입니다.😮
어떤 상황인지 다음 예시로 알아봅시다.
*/

function makeFunc() {
  var value = 1; // ← 이 지역변수를 주목해주세요. makeFunc 함수 안에 선언된 지역변수 value입니다.
  function displayValue() {
    console.log(value++);
  }
  return displayValue;
}

var myFunc = makeFunc(); // myFunc 에는 makeFunc의 내부에 선언된 displayValue 함수를 통째로 넘겨주었습니다.
myFunc(); // 1
myFunc(); // 2
myFunc(); // 3 → makeFunc()의 실행이 끝났음에도 계속해서 makeFunc의 지역변수 value 에 접근할 수가 있습니다😱

/*
▶ 어떻게 가능할까요? 
   일반적인 상황이라면 makeFunc의 지역변수 value는 적어도 makeFunc이 처리되는 동안에만 존재할 것 처럼 보이는데요!

▷ 이유는 바로 displayValue가 클로저를 생성하기 때문입니다.
   즉, displayValue는 자신이 생성될 당시의 어휘적 환경(모든 유효 범위 내에 있는 지역변수)을 기억하고 있습니다.
   이때, 이 displayValue에 대한 참조를 myFunc에게 넘기게 되면, 이제는 myFunc을 통해서도 displayValue의 어휘적 환경에 접근할 수 있겠죠?
   이러한 이유로 myFunc으로 '이미 종료된 함수 outer의 지역변수'인 value에 접근할 수 있게 되는 것입니다.

즉, 다시 정리해보면
(1) displayValue가 생성될 당시 클로저를 생성한다. displayValue는자신이 생성될 당시의 어휘적 환경을 기억하고 있다.
(2) displayValue를 감싸고 있는 외부 함수 makeFunc에서 displayValue를 리턴한다.
(3) displayValue에 대한 참조(makeFunc의 리턴값)를 myFunc에게 넘겼다. myFunc을 통해 displayValue를 실행할 수 있다.
(5) displayValue는 자신이 생성될 당시의 어휘적 환경, 즉 makeFunc의 지역변수 value 또한 기억하고 있으므로
makeFunc이 종료된 이후에도 계속해서 "displayValue의 클로저에 의해" value를 접근/조작하는 것이 가능해진다!
가 될 것 같네요 :)
*/
