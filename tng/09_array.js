// 원본은 보존하면서 오름차순 정렬 해주세요.
// 정답 코드
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
const copy = [...ARR1]; 
copy.sort((a,b) => a-b);
console.log(ARR1, copy);



// 내 답
// for(let i = 0; i < ARR1.length; i++){
//   if((ARR1[i] - ARR1[i+1]) >= 0){
//     let tmp = ARR1[i]
//     ARR1[1] = ARR1[i+1]
//     ARR1[i+1] = tmp;
//   }
// }
// console.log(ARR1)


// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2,0];

// filter 를 사용해보자. return이 boolean 이어야함. true, false를 반환할수 있게끔 해야함
resultArr = ARR2.filter(item => item % 2 == 1)
resultArr1 = ARR2.filter(item => item % 2 == 0)

console.log(resultArr,resultArr1)

// 각 요소에 3으로 나눈 나머지를 구해서, 그 나머지를 모아, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];

resultArr = ARR3.map(val => {
  return val % 3
})

console.log(resultArr)


// number, string, boolean, null, undefined = primitive 타입
// symbol, object 는 레퍼런스 타입