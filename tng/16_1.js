const btn_alert = document.querySelector('#btn_alert')
btn_alert.addEventListener('click', ()=>{
  alert('안녕하세요. 숨어있는 div를 찾아주세요')
})


const beat = () =>{
  alert("어떻게 될까?")
}


const container = document.querySelector("#container");
container.addEventListener("mouseenter", beat);

// 컨테이너 좌표 랜덤화
function setRandomPosition(){

  const x = Math.floor((Math.random()+1) * 300);
  const y = Math.floor((Math.random()+1) * 300);

  container.style.left = x + 'px'
  container.style.top = y + 'px'
}

setRandomPosition();

let hide = false;

const toggle = ()=>{
  // 
  if(!hide){
    alert("들켰다")
    container.classList.remove("hide");
    container.removeEventListener("mouseenter", beat);
    hide = !hide;
  }else{
    alert('숨는다')
    container.classList.add("hide")
    container.addEventListener("mouseenter",beat)
    hide = !hide;

  }
}

container.addEventListener('click',toggle)