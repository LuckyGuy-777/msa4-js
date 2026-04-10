// try 문

// try 문에서 에러가 발생했을때, catch 문이 실행되므로, 
// 시스템자체가 다운되는걸, 막을 수 있다. 

try {
  // 내가 실행할 처리 작성
  console.log('아아아');
  console.log('아아아');
  //user.name

} catch (error) {
  // try문에서 에러가 발생 시, 처리할 로직 작성
  console.log('에러발생!')
  // catch 문의 인수로 받은 에러의 내용을 출력
  console.log(error.name) // 발생한, 에러 이름 출력
  console.log(error.message) // 발생한 에러 내용
  //console.log(error.stack) // 발생한 에러 상세정보 출력
} finally {
  // 예외 여부와 상관없이 무조건 실행시켜야 할 로직.
  // 필수가 아니니, 필요한 상황에서만 작성해주면 됨.
  console.log('finally');
}

  console.log('아아아');
  console.log('아아아');




  try{
    // throw: 강제 예외 발생
    console.log('트라이 시작');


    if(true){

      //  자바스크립트는 에러객체를 받아서, 에러를 처리함.
    // 에러 객체가 던져지는 즉시, catch 문 실행.
     const error =  new Error('내가 강제로 일으킨 에러');
     error.name = '커스텀 에러';
     throw error;
    }


    
   

    console.log('트라이 끝');
  }catch(error){
    console.log(error.stack);
  }


  // 에러를 상세하게 처리하는 방법
  // 여러 종류의 예외를 처리하고플때,
  // instanceof 연산자를 이용해서, 예외를 구체적으로 처리.
  try{

    throw new ReferenceError();

  } catch(error){
    if (error instanceof SyntaxError){
      console.log('신텍스 에러')
    }else if(error instanceof ReferenceError){
      console.log('참조참조!')
    }else{
      console.log('짜장면')
    }
  }