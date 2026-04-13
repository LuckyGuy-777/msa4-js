//Event 이벤트.
// 웹페이지에서, 유저의 행위에 따라 특정처리를 실행하도록 하는 처리 

// inline 방식 
// 이벤트 대상인 요소의 속성으로 이벤트를 지정하는 속성
// HTML문서에 JS가 혼재되므로 관리상의 문제가 발생한다.



// property Listener 방식
// DOM 을 이용해서, 해당 노드의 이벤트 프로퍼티를 통해 저지어하는방ㅂ법
// const btn1 = document.querySelector('button');
// btn1.onclick= () => {
//   alert("프로퍼티 ");
// }


// addEventListener 방식
// DOM 요소에 이벤트 리스너를 추가하는 가장 현대적인 방법으로 권장
// 동일한 이벤트를 여러번 사용가능
// const btnNow = document.querySelector('#=#'l)



// window.addEventListener('scroll', () => {
  //   console.log('스크롤 실행')
  // })
  
  
  
  
  // window.addEventListener('scroll', printScroll)

//removeEventListener
// DOM 요소에추가된 이벤트를 제거하는 방법
//window.removeEventListener('scroll', printScroll);
// 문제 : 처음에는 스크롤 이벤트가 살아있다가,
// 삭제 버튼을 눌럿을떄, window의 스크롤 이벤트가 제거되도록 수정해보자.

const btnDelete = document.querySelector('#btnDelete');
btnDelete.addEventListener('click', () => {
  window.removeEventListener('scroll', printScroll);
});


function printScroll(){
  console.log('스크롤 실행')
}



// 이벤트 객체
// 이벤트가 발생 했을때, 해당 이벤트에 대한 정보를 포함하는 객체
const btnObj = document.querySelector('#btnObj');
btnObj.addEventListener('click', e => {
  console.log(e);
  e.target.textContent = 'XXXXX';
})


function eventInformation(e){
  console.log(e);
}


const container = document.querySelector('.container');
container.addEventListener('scroll', eventInformation);


