// 데이터 타입 : 여러 종류의 데이터를 식별하는 분류체계
// JS는, 하나의 변수에 어떤 타입의 데이터든, 저장이 가능하다.

// number : 숫자
let num1 = 1;

// typeof는, 파일의 타입을 표현함.
console.log(typeof num1);

// string : 문자열. 문자가 나열되있다 라는뜻.
// 자바스크립트는, 홑따옴표로 문자열을 주로 표현해주는 경향
// 
let str = '문자열';
let str1 = "문자열";


// 문자열 사이에, 변수를 가져오고싶을때, 아래와 같이함.
// 문자열을 합치기 할때 사용함
let str2 = `문자열${num1}`;  // 템플릿 리터럴 : 변수에 저장된 값을 이용해, 문자열을 합칠때 사용함.

console.log(str2);




let id = '아이디';
let pw = '비밀번호';
let msg = '가 틀렸습니다.';
console.log(`${id}${msg}`);
console.log(`${pw}${msg}`);


// boolean : 논리(참/거짓) 데이터타입
let bool1 = true;
let bool2 = false;


// undefined : 변수는 선언했으나, 변수안에 값이 할당되지 않은 상태. (시스템의 선택)
// 자바스크립트가 스스로 생성하는 값의 형태.
let undefinedVal;

// null : 변수의 값이 없음을, 의도적으로 명시한 데이터타입 (개발자의 선택)
// 지금은 값이 없으나, 나중에는 값이 생길거라는걸, 의미하는 형태
let nullVal = null;


// Symbol : 절대 중복되지 않는 원시 타입(primitive Type) 
const Symbol1 = Symbol('dis'); 


// 오브젝트의 기본적인 형태.
//  Object : (객체) 라고함.  키(key) - 값(value)를 쌍으로 저장하는 reference type
// 크게 2가지 방식으로 선언

// 방법 1
let obj = {
  // 키 값 이 세트로이루어짐 키 : '값' 형식
  key1: 'val1',
  // key2: 1 현업에서는 삭제할때, 그냥 없애지 않고, 코멘트아웃하고, 언제 없앴는지 명시
  // key3: 3  // del v2.0.0
  key3: 3, // add v2.0.0
};

let obj1 = {
  key1: 'val1',
  key2: 1,
};

// 변수명.키 형식으로 출력.
console.log(obj1.key1);