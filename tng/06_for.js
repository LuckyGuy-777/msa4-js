// for(let i = 0; i < 5; i++){
//   console.log('.....')
// }

// let k = '';

// for(let i = 0; i < 5; i++){
//   k +='*'
//   console.log(`${k}`)
// }

// let blank = ''
// let start = ''

// for(let i = 0; i < 5; i++){
  
// }


//  별찍기 1
// let blank = '';
// let star = '';

// for(let i =5; i > 0; i--){

//   for(let j =1; j < i; j++){
//     blank += ' ';
//   }

//   star += '*'
//   blank += star + '\n'
// }
// console.log(blank)

// 별찍기 (정답)
// 구구단은, 면접할때 시키기 좋음.
for(let i = 0; i < 5; i++){

  let space = '';
  
  
  // 공백 주기위한, for문
  for(let z = 4; z > i; z--){
    space += ' ';
  }

  // 별 주기위한 for문
  let star = '';
  for(let y = 0; y <= i; y++){
    star += '*';
  }


  console.log(`${space}${star}`);
}