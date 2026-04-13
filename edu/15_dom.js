ㅁ// 요소 선택

// 자바스크립트에서 배열이나, 객체 같은건 보통 const

//document.getElementById() 요소의 ID로 선택 (잘 안쓴다고함)
// 이 변수는, id가 title인 요소를 저장한다 
const titleEle = document.getElementById('title');
titleEle.style.color = 'blue'; // 자바스크립트 파일에서 html 제어

// 요소의 태그명으로 선택
// document.getElementByTagName(tagName): 요소의 태그명으로 선택
// 해당 요소들을 HTMLCollection 객체로 획득 (잘 안씀)
const tagEle = document.getElementsByTagName('h1');

// 태그명으로, 각 요소에 접근하는 방법. defer가 있어야 유효함.
for(let i = 0; i < tagEle.length; i++){
  tagEle[i].style.color = '#fff000'
}


//document.getElementsByClassName(classname) : 클래스 명으로 요소를 선택
// 해당 요소들을 HTMLCollection 객체로 모아옴. (요소들을 for문으로 접근해야함)
const classEle = document.getElementsByClassName('title2');


//  ***** 매우 중요함 ******
// (현업에서 가장 많이 사용하는거) 라고 함.
// document.querySelector(Selector) :  CSS 선택자를 사용해서 요소를 찾는 메소드
// 선택된 요소가 '복수'일 경우, '가장 첫번째 요소만 선택'
const queryId = document.querySelector('#title'); // 아이디선택자. id가 title인거. # 붙어서 id
queryId.style.color = 'skyblue';

const queryType = document.querySelector('h1');
queryType.style.color = 'green';


//  ***** 매우 중요함 ******
// document.querySelectorAll(selector)  : css 선택자를 사용해 요소를 찾는 방법
// 선택된 요소가 복수일 경우 ,전부 선택함
// 해당 요소들을 NodeList 객체로 획득
const queryAll = document.querySelectorAll('h1');
queryAll.forEach(item => {
  item.style.fontSize = '2rem'; // h1 태그의 크기 모두에 적용
})


//  요소 조작
// -----------------------
// Element.textContent: 컨텐츠를 획득 및 변경
// 순수한 텍스트 데이터를 전달. 
// 쿼리선택자.
const title1= document.querySelector('#title');
title1.textContent; // 콘텐트 접근
title1.textContent = '테스트'; // 콘텐트 변경
// element.innerHTML : 컨텐츠를 획득 및 변경
// 태그는 태그로 인식해서 전달
title1.innerHTML = '<p> 피태그 </p>'


// 자바스크립트로 html요소는,
//  setAttribute와, removeAttribute 로 제어할수있다.

// Element.setAttribute(attributeName, value)
// 요소에 속성과, 속성 값을 추가하는 메서드.
const setAttrInput = document.querySelector('.set-attr');
setAttrInput.setAttribute('placeholder', 'js에서 추가');
setAttrInput.setAttribute('style', 'color:red'); // 띄어쓰기 하면 안됨.

//Element.removeAttribute(attributeName)
/// 요소의 특정 속성을 제거. placeholder 속성을 제거함.
setAttrInput.removeAttribute('placeholder')



// ---------------
// 요소 스타일링
// ----------------
// Element.style : 요소에 인라인 스타일 추가
title1.style.color = 'red';

// Element.classList : DOMTokenList 객체로 클래스를 제어함.
// add : 속성을 추가하는거
title1.classList.add('display-none', 'test') // 클래스 추가
//  remove : 속성을 제거하는거.
title1.classList.remove('display-none') // 클래스 제거 
// toggle : 있으면 빠지고 없으면 들어오고.
title1.classList.toggle('display-none') // 클래스 토클


// --------------
// 새로운 요소 생성
// --------------
//document.createElement(tagName) : 해당 tag 요소를 생성하는 메서드
const newP = document.createElement('p'); 
newP.textContent = '탕수육'
newP.style.color = '#9d00ff'

// Node.appendChild(node)
// 해당 부모노드의 가장 마지막 자식 노드로 추가 (appendChild)
const parentContainer = document.querySelector('.container')
parentContainer.appendChild(newP);


const newSpan = document.createElement('span');
newSpan.textContent='크림새우';
parentContainer.appendChild(newSpan)


// 부모노드 중간에 노드 삽입하기
// Node s는 부모, newNode는 새로만든 노드, 새로만든 노드 바로뒤에 오는 노드
// Node.insertBefore(newNode, referenceNode);
const newH3 = document.createElement('h3');
newH3.textContent = '짬뽕';
parentContainer.insertBefore(newH3,newSpan);

// newSpan.textContent = '라조기';


// Node.removeChild(node)
// 해당 부모 노드의 특정 자식 노드를 제거
parentContainer.removeChild(newH3)