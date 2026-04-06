// 검증대상이, 인수로 들어감
let food = '떡볶이';

switch(food){
  
  // case 검증하고자 하는 값.
  case '김밥' :
    // 김밥일떄, 실행할 처리
    console.log('분식');
    //멈출때는 break 가 있어야함.
    // break가 없으면, break를 만날때까지, 아래구문을 실행하게됨.(검증함)
    break;
  
  case '돈까스' :
    console.log('양식');
    break;

  default:
    console.log('이상한 음식');
    break;
}