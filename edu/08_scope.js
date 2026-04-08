// 스코프

// 어디에 선언되었는지에 따라서 접근 가능 여부가 달라진다.

// 전역 스코프 
// 전역 스코프로 선언된 변수와 함수는, 코드 어디에서나 접근가능
// 프로그램이 실행되는 동안 계속 유지된다.
// 보통 전역 스코프는, const로 만듬
let test = '전역 스코프'; // gloabal scope.


function output(){
  // 지역 스코프()
  // 함수 내에서 선언된 변수와 함수는, 해당 함수 내부에서 유효함
  // 함수가 실행될 때마다 새로운 지역 스코프가 생성됨

  let test = '지역 스코프'
  // 로컬. 함수 output의 영역. 지역 scope

  if(true){
    // 블록레벨 스코프 (block level scope)
    // '{ }' 로 둘러싸인 범위를 의미

    // 이 if문 안에서만 유효햔 변수
    let test = '블록레벨 스코프'
    console.log(test);
  }

  console.log(test)
}


output();
console.log(test)