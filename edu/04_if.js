// IF 문
// 조건에 따라서 서로 다른처리(분기처리)를 하는 문법이다.
// 조건이 true 이면, 처리를 진행.
// 그렇지 않다면, 다음 조건 체크로 넘어간다.

// 1등이면 '우승', 2등이면 '준우승', 3등이면 '3등', 나머지는 '순위 외'
// 5등, 7등 의 경우는 '특별상' 일 경우.
let rank = 4;


// if문을 사용할 때 빈도수 가 높은 값부터  체크하라.

// () 안에 조건식 작성
if(rank === 1){
  // 조건식이 true 일떄, 실행하고싶은 코드를 작성.
  console.log("우승")
}
// else if 로 조건을 여러개 이을 수 있다.
// 첫번째 조건식이 true 가 아닐때 실행
else if(rank === 2){
  console.log("준우승")
}
// 마찬가지로, 직전에 조건식이 false이면, 해당 구문을 실행
else if(rank === 3){
  console.log("3등")
}
else if(rank === 5){
  console.log("특별상")
}
// 위에서 체크한 조건이 모두 false일 경우, 나머지 모든 조건은 else 가 실행된다.
else{

  if(rank !== 5 && rank !== 7){
    console.log('순위외')
  }else{
    console.log('특별상')
  }
}

