// Date 객체
// 시간과 날짜를 처리하기 위한 속성과 메서드를 가진 내장 객체
// 내부적으로 Local Timezone(로컬타임존)에 따른 UNIX Timestamp(유닉스 타임스탬프) 기반의 동작을 함.
// asia/seoul 이 우리나라 시간포맷.
// kr 은 북한 시간포맷

// 객체들은 파스칼기법으로 표현
// 인스턴스 라고함. (메모리상에 올려서 사용할준비가 된 객체)
const now = new Date(); // * 현재시간으로 Date 객체를 생성함.

 // toString없이 객체를 출력하면, toString이 자동으로 적용되서 출력됨
console.log(now);


// 특정 내가 지정한 시간으로 시간세팅함.
// * 'YYYY-MM--DD hh:mi:ss' 이 양식을 준수해야 유효함.
const date1 = new Date('1995-12-17 13:59:36');
console.log(date1);



const date2 = new Date(33445566);
console.log(date2);


const date3 = new Date(1995,11,17,3,24,0);



// Date.getfullyear()   number 타입 반환
// 연도를 정수로 반환함
console.log(now.getFullYear());

// Date.getMonth()    number타입 반환
// 월을 정수로 반환함. 0~11의 값은 반환
// 우리나라 월을 표현하려면, 아래처럼 + 1 을 해야함
console.log(now.getMonth() + 1);



// Date.getDate()     number타입 반환
// 일을 정수로 반환
console.log(now.getDate());

// Date.getHours()    number타입 반환
// 시간을 정수로 반환
console.log(now.getHours());


// Date.getmMinutes()   number 타입반환
// 분을 정수로 반환
console.log(now.getMinutes());



// Date.getSeconds(): number
//  초를 정수로 반환
console.log(now.getSeconds());

// Date.getMilliseconds(): number
console.log(now.getMilliseconds());

// Date.getDay(): number
//  오늘 요일을 정수로 반환
//  0(일요일) ~ 6(토요일) 반환
console.log(now.getDay());

// Date.getTime(): number
//  `1970-01-01 00:00:00` 기준으로 얼마나 흘렀는지 Unix 타임스탬프를 반환
//  단위: 밀리초
console.log(now.getTime());

let nowFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(nowFormat);

const dayjs = require('dayjs');

const now2 = dayjs();
console.log(now2.add(-1, 'day').format('YYYY-MM-DD HH:mm:ss'));