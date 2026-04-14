// AXIOS 사용
const url = 'https://picsum.photos/v2/list?page=4&limit=7';


// form['page'] 와 , form.page 가 자바스크립트에서 같음
// form['limit'] == form.limit

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  // 기본적으로 현재 하려던, submit기능을 취소함.
  e.preventDefault();

   const baseUrl = 'https://picsum.photos/v2/list';
   const page = form.page.value;
   const limit = form.limit.value;

  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  // axios 기본문법.
  // axios.get(url)
  // .then(response => {
  //   // 요청이 성공 했을때, 처리 작성 부분
  // })
  // .catch(error => {
  //   // 처리중 예외가 발생 했을때, 처리 작성 부분
  // })
  // .finally(() => {
  //   // 성공여부와 관계없이 필요한 처리 작성 부분 (finally 는 생략 가능)
  // })
  
  
  //.catch() 요청이 실패하면 실행 ..
  //.then() 요청이 성공적으로 돌아오면..
  
  // axios.get(url)의 요청에 대한, 응답결과가 반환되서, response 에 저장된다.
  // response에 응답결과에 대한, 정보가 담겨진다.
  
  axios.get(url)
  .then(response => {
    console.log(response);
  
    // 카드들 넣을 컨테이너
    const container = document.querySelector('.container');
    container.textContent = ''; // 텍스트페이지를 초기화?
  
    // response.data : 서버가 보내온 데이터가 저장된 프로퍼티
    response.data.forEach(item => {
      
  
      // 카드 이미지 요소 생성
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');
  
      // 카드 저작권자 요소 생성
      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id}: ${item.author}`;
  
      // 카드 요소 생성
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
  
      // 컨테이너에 카드 삽입
      container.appendChild(newCard);
  
    });
  
  }) // 요청이 성공적으로 돌아오면..
  .catch(error => {
    console.log(error)
  })

});

const btnSearch = document.querySelector('#btnSearch');
btnSearch.addEventListener('click', () => {
  
  const baseUrl = 'https://picsum.photos/v2/list';

  const page = document.querySelector('#page').value;
  const limit = document.querySelector('#limit').value;
  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  // axios 기본문법.
  // axios.get(url)
  // .then(response => {
  //   // 요청이 성공 했을때, 처리 작성 부분
  // })
  // .catch(error => {
  //   // 처리중 예외가 발생 했을때, 처리 작성 부분
  // })
  // .finally(() => {
  //   // 성공여부와 관계없이 필요한 처리 작성 부분 (finally 는 생략 가능)
  // })
  
  
  //.catch() 요청이 실패하면 실행 ..
  //.then() 요청이 성공적으로 돌아오면..
  
  // axios.get(url)의 요청에 대한, 응답결과가 반환되서, response 에 저장된다.
  // response에 응답결과에 대한, 정보가 담겨진다.
  
  axios.get(url)
  .then(response => {
    console.log(response);
  
    // 카드들 넣을 컨테이너
    const container = document.querySelector('.container');
    container.textContent = ''; // 텍스트페이지를 초기화?
  
    // response.data : 서버가 보내온 데이터가 저장된 프로퍼티
    response.data.forEach(item => {
      
  
      // 카드 이미지 요소 생성
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');
  
      // 카드 저작권자 요소 생성
      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id}: ${item.author}`;
  
      // 카드 요소 생성
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
  
      // 컨테이너에 카드 삽입
      container.appendChild(newCard);
  
    });
  
  }) // 요청이 성공적으로 돌아오면..
  .catch(error => {
    console.log(error)
  })
  //.finally(); 



})