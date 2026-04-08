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
// -------------------------------------------------

// 배열 [2,4,5,6,9] 가 존재.
// 여기서 특정요소가 있는지 확인하고, true/false를 반환하는
// myIncludes 함수를 만들어 달라.
// 특정 요소는 1, 2

// break는 해당 그 구문만 빠져나온다.
// return이 어디든 나오면, 함수 자체를 빠져나온다.

const myArr = [2,4,5,6,9];

function myIncludes(arr1,search){

  for(let i = 0; i < arr1.length; i++){

    if(arr1[i] == search){
      return 'true'
    }
    
  }

  return 'false'
}


console.log(myIncludes(myArr,4))

