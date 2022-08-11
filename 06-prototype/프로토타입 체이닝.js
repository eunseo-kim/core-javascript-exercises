console.log([1, 2, 3].toString()); // 1, 2, 3

delete Array.prototype.toString; // [1]

console.log([1, 2, 3].toString()); // [object Array]

delete Object.prototype.toString; // [2]

console.log([1, 2, 3].toString()); // TypeError: [1,2,3].toString is not a function

// ---------------------------------------
/*
[과정 이해하기]
[1, 2, 3]는 Array 객체의 인스턴스입니다.

즉, 인스턴스에 toString이라는 메서드가 없기 때문에 프로토타입 체이닝에 의해
Array prototype의 메서드를 대신 호출합니다.

[1]에서 Array prototype의 toString 메서드를 삭제했습니다.

이제는 Array prototype의 상위 프로토타입인 Object.prototype에서 toString 메서드를 찾습니다.

[2]에서 Object prototype의 toString 메서드를 삭제했습니다.

Object prototype은 최상위 프로토타입 객체입니다.
즉, 더이상 프로토타입 체인을 타고 올라갈 수 없습니다.

따라서 이후에 toString 메서드를 호출하면 Type Error이 발생합니다.
*/
