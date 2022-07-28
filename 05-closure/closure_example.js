function user(_name) {
  var _logged = true;
  // ⓐ

  return {
    get name() {
      return _name; // ⓑ
    },
    set name(v) {
      _name = v;
    },

    login() {
      _logged = true; // ⓒ
    },

    logout() {
      _logged = false;
    },

    // status는 setter없이 getter만 만들었습니다. 즉, 데이터를 가져오는 것만 가능합니다.
    get status() {
      return _logged ? 'login' : 'logout';
    },
  };
}

const eunseo = user('은서');
console.log(eunseo.name); // 은서
eunseo.name = '김은서';
console.log(eunseo.name); // 김은서

console.log(eunseo.status); // login
eunseo.logout();
console.log(eunseo.status); // logout

eunseo.status = 'hello!'; // status setter은 정의하지 않았습니다. 따라서 status의 값을 직접 바꿀 수는 없습니다.
console.log(eunseo.status); // logout

/* 
클로저의 개념이 어디에 사용되었을까요? 
번호 ⓐ ⓑ ⓒ로 표시해둔 부분을 다시 확인해봅시다.

- ⓐ : user이라는 함수의 지역변수 '_logged'와 매개변수 '_name'은 원래 user이라는 함수가
종료될 때(return문이 실행된 이후) 함께 사라지는게 자연스럽습니다. 그러나!

- ⓑ : user 함수 안에서 매개변수 _name에 대한 getter & setter을 리턴해주었네요.
getter, setter도 함수입니다. 즉, '클로저'를 생성하므로 함수가 생성될 당시의 렉시컬 환경을 모두 기억하고 있습니다.
따라서 user 함수가 종료되더라도, getter/setter 함수에 남아있는 렉시컬 환경 정보에 의해
user의 매개변수로 전달된 _name을 계속해서 접근/조작할 수 있게 됩니다.

- ⓒ : _name과 마찬가지의 상황입니다. 이 경우는 login(), logout()이라는 별도의 함수를 만들었습니다.
login, logout 함수에서 user의 지역변수 _logged를 사용합니다. 따라서 login/logout이 생성한 클로저에도 그 정보가 저장됩니다.
따라서 user가 종료되더라도 login, logout을 통해 계속해서 지역변수 _logged에 접근/조작할 수 있습니다.
*/

/*
+(추가) 클로저를 사용하니~
1. 전역변수 없이도 이전 상태를 계속해서 기억할 수 있습니다! (이전 _logged 상태 등...)
2. 전역변수를 사용하면 의도치 않은 변경의 위험성이 있지만,
내부함수를 반환하고 그 함수를 통해서만 변수를 조작할 수 있기 때문에 오류 발생의 위험이 적습니다!
2. 흔히 알고있는 class의 private 키워드를 흉내낼 수 있습니다! 중요한 변수를 보호할 수 있습니다.
*/
