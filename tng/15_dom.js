// 1. 사과게임 위에 장기 삽입

// ul의 자 

// 부모노드 중간에 노드 삽입하기
// Node s는 부모, newNode는 새로만든 노드, 새로만든 노드 바로뒤에 오는 노드
// Node.insertBefore(newNode, referenceNode);
const parentUl= document.querySelector('#ul')

const newChild = document.createElement('li')
newChild.textContent = '장기'
parentUl.insertBefore(newChild,)
