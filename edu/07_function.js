// 함수 (function)
// 입력을 받아서 출력을 하는 일련의 과정을 정의한것.
// 특정 처리를 모듈화해서, 코드의 중복 최소화

// 함수 선언식. a,b 는 각 파라미터
// parameter : 함수 정의에서 전달받은 argument를 저장하는 변수인(소괄호 안) a와 b
function fnc1 (a,b){
  let sum = a + b;

  // 반환방법. 봔환하고싶은값 리턴
  return sum;  // return : 함수의 연산결과를 반환함.
}

// 1,2는 argument(인수) 라고 함. (함수를 호출해서, 전달하는 값.)
// 함수 호출에서 전달되는 값인(소괄호 안) 1과 2
let result = fnc1(1,2);
console.log(result)



function fnc2(a,b){
  return a + b;
}
console.log(fnc2(3,5));


// fnc3(1,1)

// // 함수 표현식
// // 함수의 이름을 생략한 익명함수를, 변수에 할당해서 사용하는 방식.
// const fnc3 = function(a,b){

// }


// 화살표 함수
const fnc4 = (a,b) => {
  return a+b;
}

// 함수내용이 1줄이면 한줄료 표현가능
const fnc5 = (a,b) => a+b;

// 파라미터가 1개인 경우, 소괄호도 생략가능
const fnc6 = a => `ttt ${a}`;


// 파라미터가 없다면, 소괄호를 쳐 줘야함.
const fnc7 = () => 'test';



// 콜백함수
function callBackTest(bool, cb){
  if(bool){
    cb();
  } else {
    console.log('콜백 실행 안함');
  }
}



function test(){
  console.log('테스트 함수 실행');
}

// 비동기 처리: (나중에)따로 혼자 움직이는 로직 (유저가 클릭 또는 어떤 액션을 취하면 발생하는 처리)
// 동기 처리 : 페이지가 뜨면 , 일괄적으로 실행되는 로직
callBackTest(true, test);  // 콜백함수를 인수로 줄때는, ()를 주면 안됨. test() 처럼, 입력하면 에러.


callBackTest(true, () => console.log('tttt'))