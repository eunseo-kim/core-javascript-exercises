function excutionContext1() {
  console.log('Excution Context 1 open');

  function excutionContext2() {
    console.log('Excution Context 2 open');

    function excutionContext3() {
      console.log('Excution Context 3 open');
      console.log('Excution Context 3 close');
    }

    excutionContext3();
    console.log('Excution Context 2 close');
  }

  excutionContext2();
  console.log('Excution Context 1 close');
}

excutionContext1();
console.log('Global Excution Context Close');

/*
콜 스택(Call Stack)에 실행 컨텍스트가 추가/삭제 되는 순서
[1] 가장 먼저, 전역 실행 컨텍스트가 담깁니다.
[2] 20번째 줄에서 excutionContext1() 함수를 만나 excutionContext1 실행 컨텍스트가 담깁니다.
[3] 16번째 줄에서 excutionContext2() 함수를 만나 excutionContext2 실행 컨텍스트가 담깁니다. 
[4] 12번째 줄에서 excutionContext3() 함수를 만나 excutionContext3 실행 컨텍스트가 담깁니다. 
[5] excutionContext3 실행 컨텍스트가 종료되어 콜 스택에서 pop됩니다.
[6] excutionContext2 실행 컨텍스트가 종료되어 콜 스택에서 pop됩니다.
[7] excutionContext1 실행 컨텍스트가 종료되어 콜 스택에서 pop됩니다.
[8] 마지막으로 전역 실행 컨텍스트가 콜 스택에서 pop됩니다.
*/
