// 원시타입

var a = 10;
var b = a;
var c = 10;

// 임시로 10이 저장된 메모리 상 주소값을 #000 이라고 가정합시다.

console.log(a === b); // true → a와 b는 현재 동일한 주소값(#000)을 변수의 값에 저장합니다.
console.log(a === c && b === c); // true → a와 b와 c는 현재 동일한 주소값(#000)을 변수의 값에 저장합니다.
// 즉, 메모리 상에 10이 저장된 공간은 한군데이고, a와 b와 c는 10이 저장된 하나의 주소값을 변수의 값에 저장하고 있습니다.

b = 20;
// b의 값을 20으로 재할당하게 되면 b는 더이상 a와 똑같은 주소값(#000)을 가지고 있지 않습니다.
// b는 이제 20이 저장된 새로운 주소값(→#222라고 가정합시다)을 할당받게 됩니다.

console.log(a === b); // false → a(#000)와 b(#222)가 다른 주소값을 값에 저장하고 있기 때문입니다.
console.log(a === c); // true → a(#000)와 c(#000)는 여전히 동일한 주소값을 가지고 있습니다.

/*
즉, 이처럼 변수의 값을 재할당했을때(b = 20)
새로운 데이터 영역(#222)을 추가하고 b의 값으로 해당 주소값(#222)을 할당함으로써,
이전에 b가 가리키던 주소값(#000)의 값(=10)은 바뀌지 않도록 하는 특성을
[원시타입의 불변성]이라고 합니다.
*/
