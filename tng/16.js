const btn_alert = document.querySelector('#btn_alert')
btn_alert.addEventListener('click', ()=>{
  window.alert('안녕하세요. 숨어있는 div를 찾아주세요')
})

// JS 는 함수로 만드는게 편하다?

// 남 코드를 계속 따라 입력 보라.
// 그리 하다보면, 실력이 는다?

const beat = ()=>{
  alert("어떻게 될까?");
}


const container = document.querySelector("#container");
container.addEventListener("mouseenter", beat);

function setRandomPosition(){

  const x = Math.floor((Math.random()+1) * 300) ;
  const y = Math.floor((Math.random()+1) * 300) ;

  // innerwidth, innerheight는, 화면에 보여지는 면적을 의미
  // const y = Math.random() + (window.innerHeight - 50);

  container.style.left = x + 'px'
  container.style.top = y + 'px'

}
setRandomPosition();

let hide = false;
const toggle = ()=>{
  if(!hide){
    alert("들켰다")
    container.classList.remove("hide");
    container.removeEventListener("mouseenter", beat);
    hide = !hide;
  }else{
    alert('숨는다')
    container.classList.add("hide");
    container.addEventListener("mouseenter", beat);
    hide = !hide;
    setRandomPosition();
  }
  
}


container.addEventListener('click', toggle);

