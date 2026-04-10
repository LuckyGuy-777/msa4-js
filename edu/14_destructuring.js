// Destructuring (구조분해) 문법 
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1,2,3,4,5];
//let arrVal1 = rr[0];
//let arrVal2 = arr[1];

//const [] = arr;



// --------------------

const user = {
  name : '홍길동',
  age : 20,
  gender : 'M',
  addr : '서울시'
}


// 값을 가져올떄, 가져오고자 하는 키값을 가져오면됨
// addr 처럼, 해당 프로퍼티가 없을떄는 디폴트값을 설정해서 사용.
// 해당 키가 있다면, 객체에서 가져와서 사용함.
// user.name, user.age 와 비슷함.
const { name, age, addr = '없음' } = user;
console.log(name);