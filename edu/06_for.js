//  for 문.
// 기본문법

/** for문 형식
 * 
 * 증감값을 조건식에 대비해서, 올바르지 않게 준다면, 무한루프에 빠질 수 있다.
 * 증감 값은, 내가 원하는 수치로 가능함.
 * 
for(초기값; 조건식; 1회루프당 증감 값){
   반복하고 싶은 처리
}

break 문. (for, switch 에서도 사용가능)

처리 중, break 를 만나면 그 즉시 종료한다.
//  */

// for(let i = 0; i < 3; i++){
//   if(i == 1){
//     // 처리 중, break 를 만나면 그 즉시 종료한다.
//     break;
//   }
//   console.log(`${i}루프문`);
// }


// for(let i = 0; i < 5; i++){
//   // continue : 만나는 즉시, 그 다음 루프로 진행한다.(현재 처리를 건너뜀)
//   if(i % 2 === 0){
//     continue;
//   }
//   console.log(`${i}번째 루프문`);
// }

// 브레이크포인트 거는법 :  시작지점, 안쪽의 첫줄에 주로 거는걸 추천
// continue 는, 다음 브레이크 포인트로 이동, step over은, 다음 순서로 이동
// 이해가 안되면 ,브레이크 포인트를 걸라.

// 바깥루트 한번 돌때, 안쪽의 루프를 모두 돌아줌
// for(let i = 0; i < 3; i++){
//   console.log(`부모: ${i}번째`)
  
//   for(let z = 0; z < 3; z++){
//     console.log(`자식: ${z}번째`)
//   }
// }

// 변수의 변천사가 잘 안 와닿을때는, 디버깅모드로,
//  코드 진행사항을 하나씩 하나씩 따라가보라.
// let dan = 2;
// let multi = 19;
// for(let i = 1; i <= multi; i++){
//   console.log(`${dan} x ${i} = ${i * dan} `)
// }


// 구구단 2~9단을 출력
// 내가 쓴 코드
// for(let i = 2; i < 10; i++){
  
//   for(let z = 1; z < 10; z++){
//     if(z === 1){
//       console.log(`${i}단\n`)
//      }
//     console.log(` ${i} x ${z} = ${i*z}`)
//     if(z === 9){
      
//       console.log("\n")
//     }
//   }
// }

// 강사코드
for(let i = 2; i <= 9; i++){
  console.log(`** ${i}단 **`);

  for(let z = 1; z <= 9; z++){
    console.log(`${i} x ${z} = ${i * z}`)
  }
}