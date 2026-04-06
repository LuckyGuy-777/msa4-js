import readline from 'readline'


// IF로 만들어주세요!
// 성적
// 범위 :
//    100   :   A+
//    90이상 100미만 : A

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//', (line) => {
//     line.trim();

//     let score = parseInt(line)
//     let grade;

//     if(score === 100 ){
//       grade = 'A+'
//     
//     }
//     else if(score >= 90 ){
//       grade = 'A'
//     
//     }
//     else if(score >= 80 ){
//       grade = 'B'
//     
//     }
//     else if(score >= 70 ){
//       grade = 'C'
//     
//     }
//     else if(score >= 60 ){
//       grade = 'D'
//     
//     }
//     else {
//       grade = 'F'
//     
//     }


// })


let score = 55;
let grade = 'F';

if(score > 100 || score < 0 || typeof score !== 'number') {
  console.log('입력값 오류!')
} else {
  
  if(score === 100 ){
    grade = 'A+'
  }
  else if(score >= 90 ){
    grade = 'A'
  }
  else if(score >= 80 ){
    grade = 'B'
  }
  else if(score >= 70 ){
    grade = 'C'
  }
  else if(score >= 60 ){
    grade = 'D'
  }
  else {
    grade = 'F'
  }
  
  console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`)

}