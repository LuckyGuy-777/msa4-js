// 변수 (variable): 변하는 데이터(값)를 저장하는 공간


// var의 특징  중복선언 가능  재할당 가능  함수레벨 스코프를 가진다.	
var num1; // 변수선언
var num1; // 중복선언 가능
var age = 1;  // 변수 선언 및 초기화
age = 20 // 재할당
num1 = 90;  // num1변수의 초기화
str1 = 'sadsd'; //str1 변수 var 으로 선언 및 초기화


// let = 중복선언이 불가능하다. 재할당가능 , 블록레벨 스코프
let name = '홍길동';
// let name;   중복선언 안됨
name = '둘리';
console.log(name);

// 상수
const gender = 'M'

/* 호이스팅 은,
 * 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는것.
 * ( 미리 선언해서, 메모리에 할당해두는것. )
 * 
 * 코드나 변수를 메모리에 올려두고, 에러처리를 시키지 않는다.
 * 이후에 값이 주어졌을때, 값이 표현됨. 
 * var를 사용했을때 주로 호이스팅이 나타남
 */
console.log(hoho); // undefined 가 출력됨.
var hoho = '호호';
console.log(hoho) // '호호' 출력


console.log(haha);  // 참조 에러 발생 (fatal error #중대한 에러라는 의미)
let haha = '하하';
console.log(haha);
