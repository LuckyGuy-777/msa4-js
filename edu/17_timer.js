// 타이머 함수
// 비동기 적으로 코드를 실행함

//setTimeout(콜백함수, ms[, ...args])    number 을 리턴함
// 설정한 일정 시간 후(ms) 에, 콜백함수를, 실행하는 메소드
// 콜백함수에, 파라미터가 필요한 경우, ...args 를 추가함.
// 리턴값은 timeoutID , 0이 아닌 정수값 (해당 타이머의 고유한 식별값)
const timeoutId1 = setTimeout(() => {
  console.log('1초')
}, 1000 );

// node환경이나, 터미널에서 실행하면, timeout 객체가 반환되고,
// 브라우저에서, 실행시켜야 number가 반환됨.
console.log(timeoutId1);


//clearTimeout(timeoutId1)
//clearTimeout(timeoutId1);

//setInterval(콜백함수, ms[, ...args])  number 반환
// 설정한 일정시간마다 콜백함수 실행
// 반환값은 intervalID로, 0이아닌 정수값 ( 해당 인터벌의 고유한 식별값 )
const intervalId1 =setInterval(()=> {
  console.log('인터벌')
}, 1000)


// 인터벌 4번찍히고 그다음엔 안찍힘.
setTimeout(() => {
  clearInterval(intervalId1)
}, 5000);