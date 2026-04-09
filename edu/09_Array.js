// // 배열 (Array) 객체
// // 하나의 변수에, 여러개의 값을, '순차적으로' 저장할수 있는 데이터구조.
// // 각 요소에 인덱스 라는 번호를 부여받음. 이를 이용해서, 순서를 정한다.
// // 데이터타입 : Object
// // 자바스크립트는, 데이터 타입과 관련없이, 배열에 삽입할수 있다.
// // 배열의 크기가 동적으로 변화 가능하다.
// // 반복문을 통해서, 배열의 각 요소에 쉽게 접근가능
// // 인덱스는 0부터 시작함.
// const arr1 = [1, 2, 3, 4, 5];

// // 인덱스 번호를 줘서, 배열 요소에 접근함
// console.log(arr1[1]);


// // length : 배열의 길이를 반환
// console.log(arr1.length);
// const obj = {
//   length: 1, // 프로퍼티 : 객체 안에 선언한 변수
//   fnc: () => { // 메소드 : 객체 안에 선언한 함수.
//     console.log('함수임');
//   }
// }


// // Array.isArray(arg) arg는 argument의 약자.
// //  Array.isArray(arg) 의 리턴타입은, boolean
// // 이것은, 배열인지 아닌지 체크한다.
// Array.isArray(arr1); // true
// console.log(Array.isArray('어래이')); // false


//  Array.includes(searchElement): boolean
//  배열의 특정요소의 존재여부를 확인하고, true/false를 반환
 //console.log(arr1.includes(5))
//console.log(arr1.includes(100))




// 요소의 인덱스 번호를 알고싶을떄는, indexOf를 사용함.
// 찾고자 하는 요소가 존재하면, 해당 인덱스 번호를 반환
// 요소가 없으면 -1 반환
let arr = ['홍길동', '둘리', '도우너'];
console.log(arr.indexOf('둘리')); // 1 반환
console.log(arr.indexOf('도우너')); // 2 반환
console.log(arr.indexOf('또치')); // -1 반환


// Array.push(...args)
// push는, 원본 배열 자체를 수정한다. 주의해야한다.
// 원본 배열에 마지막요소를 추가하고, 변경된 length를 반환함.
arr = [1,2,3]; 
let arr2= [arr]; // arr의 주소를 저장
let result = arr2.push(5); // arr2에 저장된, arr주소에 가서, push(5) 실행
console.log(result, arr, arr2); // arr2, arr 모두 값이 바뀌어있다.


arr3 = [1,2,3]; 
let arr4= [...arr]; // 스프레드 카피 를이용해서, arr3의 주소가 아닌 배열을 복사함.
let result1 = arr2.push(5); // arr4에서 push(5) 작업 실행
console.log(result, arr, arr2); // arr4 만 바뀌어있다.


// Array.concat(...args): T[]
// 배열의 마지막 요소를 추가한 새로운 배열을 반환
arr = [1,2,3];
resultArr = arr.concat(4,5,6);
console.log(arr, resultArr);


// Array.pop() : T | undefined   주의점은, 원본이 변경된다.
// 원본배열의 마지막요소를 제거하고, 제거된 요소를 반환한다.
arr = [1,2,3];
resultArr1 = arr.pop();
console.log(arr, resultArr1)

// Array.unshift(...args)   주의점 : 원본변경, 
// 원본배열의 첫번쨰요소를 추가하고, 변경된 length를 반환
// 프론트엔드 분야에서 자주 사용할 요지가 있음.
arr2 = [1,2,3];
resultArr3 = arr2.unshift(100,200,300);
console.log(arr, resultArr3);


// Array.shift() 
// 해당요소를 반환하거나, undefined를 반환.
// 원본변경을 한다.
// 원본배열의 첫번째요소를 제거하고, 해당요소를 반환함.
arr = [1,2,3];
resultArr = arr.shift();
console.log(arr, resultArr);


// ...args 는 생략가능
// Array.splice(start, count, ...args)
// 해당 인덱스 요소부터 모두 제거하고, 제거한 요소들을 배열로 반환함.
// 해당요소를 반환하거나, undefined를 반환.
// 원본변경을 한다.

// 1. start 만 전달 했을 때.
//  - start가 양수일 경우
//  -> 해당 인덱스 요소부터 모두 제거하고, 제거한 요소들을 배열로 반환
//  - start가 음수일 경우
//  -> 끝 요소부터 start 수 만큼의 해당인덱스 요소를 모두 제거, 제거한 요소들을 배열로 반환
arr=[1,2,3,4,5];
resultArr = arr.splice(2); // 이때 2는 인덱스 번호. 2번인덱스 부터 전체가 잘려나감
console.log(arr,resultArr);



arr = [1,2,3,4,5]
resultArr = arr.splice(2,2); // 2번 인덱스부터, 2번을 포함해서 2개를 잘라서, 배열로 반환
console.log(arr, resultArr)


// 3. start 와 count와 args 를 전달했을 경우
//  - 해당인덱스 요소부터, count 수 만큼의 요소를 제거하고,
//  해당위치에 args를 삽입하고, 제거한 요소들을 배열로 반환,
arr = [1,2,3,4,5]
resultArr = arr.splice(2, 1, 100,200,300);
console.log(arr, resultArr)


// Array.join(separator), string 을 반환
//배열에 요소를, 구분자로 연결한 문자열을 만들어서 반환하는 메소드
// 배열의 요소가 없다면, 빈문자열을 반환하고,
// separator을 생략하면, 기본구분자가 ',' 로 연결
arr = [1,2,3,4,5];
resultArr= arr.join(', ');
console.log(arr, resultArr)



// Array.sort( ) 배열반환, 원본변경
// 배열의 요소를 "문자열로 변환 후", "오름차순 정렬"을 하고, 정렬한 배열을 "반환"
// 문자를 정렬하기 위해 만들어진 메서드.
arr = [6,4,7,1,11];
// 작동예시
//  (a - b)가 양수 일경우, a가 큰수, b가 작은수로 인식하여 정렬
//  (a - b)가 음수 일경우, a가 작은수, b가 큰수로 인식하여 정렬
//  (a - b)가 0일 경우, 같은 값으로 인식하여 정렬
resultArr = arr.sort((a,b) => a - b); // 숫자비교 할때는, 콜백함수를 줘야함
console.log(arr,resultArr)




//  # 중요 # 다른건 잊어도 이건 기억하자.
// Array.map( 콜백함수 ) 
// 배열을 반환함. 기존 원본은 유지됨
// * 배열의 모든요소에 대해 콜백함수를 반복실행 한 후,
// 콜백 함수의 리턴 값들을 모아서, 새로운 배열을 반환함.
// 모든 배열에 대해 루프를 돌림. 루프마다 콜백함수를 돌림. val는 arr의 요소에서 값을 받아옴.
// ex: arr의 1 이 콜백함수 실행 후 로직 실행, arr의 2 또한 콜백함수 실행 후 로직실행...
// 배열 끝까지 반복
// # 배열의 요소를 하나 하나 가져와서, 콜백함수를 실행한다 라는 의미임. (요약)
// 반복이 돌 때마다 val에, 배열의 n번째 요소가 대입됨
arr = [1,2,3,4,5,6];
resultArr = arr.map(val => {
  // 주의점 : 리턴이 없으면 안됨
  // 3의 배수를 체크하고싶다면?
  if(val % 3 === 0){
    return '짝'
  }else{
    return val
  }
});

console.log(arr, resultArr)

class MyArr {
  arr = [1,2,3,4,5,6];

  // map 메소드의 내부구조 형식
   map(cb) {
    // 새로운 배열
    const newArr = [];

    for(let i = 0; i < this.arr.length; i++){
      newArr.push(cb(this.arr[i]));
    }

    return newArr;
  }

}



// Array.some()   boolean 반환함.
// 설명 : 배열의 모든요소에 대해 콜백함수를 실행 한 후,
// 조건에 맞는 결과가 하나라도 있으면 true, 없으면 false 를 반환
arr = [
  {name : '홍길동', age : 20},
  {name : '둘리', age : 50},
  {name : '또치', age : 45},
];
// item으로 item.key값 으로 접근하나봄.
resultArr = arr.some(item => item.name === '홍길동'); // => 조건  부분에서, 해당되는게 있다면, true 아니면 false
console.log(arr, resultArr);

// map, push, pop, shift, unshift 정도를 기억해두면 충분.




// Array.every(callback)    boolean 반환
// 배열의 모든 요소에 대해 콜백함수를 실행한 후,
// 모두 조건에 맞으면 true, 아니면 false를 반환
arr = [
  {name : '홍길동', age : 20},
  {name : '둘리', age : 50},
  {name : '또치', age : 45},
];
resultArr = arr.every(item => item.age >= 20);
console.log(resultArr);



// Array.filter(callback).   boolean이 반환된다.
// 배열을 반환하는듯 하다.
// 배열의 모든요소에 대해서, 콜백함수를 실행 한 후,
// 조건에 만족한 요소만 모아서, 새로운 배열로 반환
arr = [
  {name : '홍길동', age : 20},
  {name : '둘리', age : 50},
  {name : '또치', age : 45},
];
resultArr = arr.filter(item => item.age < 50);
console.log(resultArr)

// 쇼핑몰의 낮은가격순, 높은가격순... 등  정렬기준에 따라 출력할때,
// 백엔드에, 요청을 보내고, 응답을 받으면, 그 응답 받은 값을
// map으로 출력한다.



// Array.foreach(callback)    리턴 값 없음
// 배열의 모든요소에 대해 콜백함수를 반복 실행하고 싶을 때 사용.
arr = [
  {name : '홍길동', age : 20},
  {name : '둘리', age : 50},
  {name : '또치', age : 45},
];
arr.forEach((val, idx) => {
  //내가 하고싶은 처리
  console.log(val,idx)

})

// for(let i = 0; i < arr.length; i++){
//   // 내가 하고 싶은 처리

// }


// -------------------------------------------------

// 배열 [2,4,5,6,9] 가 존재.
// 여기서 특정요소가 있는지 확인하고, true/false를 반환하는
// myIncludes 함수를 만들어 달라.
// 특정 요소는 1, 2

// break는 해당 그 구문만 빠져나온다.
// return이 어디든 나오면, 함수 자체를 빠져나온다.

// const myArr = [2,4,5,6,9];

// function myIncludes(arr1,search){

//   for(let i = 0; i < arr1.length; i++){

//     if(arr1[i] == search){
//       return 'true'
//     }
    
//   }

//   return 'false'
// }


// console.log(myIncludes(myArr,4))

