//HTML 태그 연결
const input = document.querySelector('.input');
const todo = document.querySelector('.todo');
const did = document.querySelector('.did');

//input 이벤트리스너 추가
input.addEventListener('keydown', (k) => {
  if (k.key == 'Enter') {
    //리스트 생성
    const todoLi = document.createElement('li');
    const todoBtn = document.createElement('button');
    const todoP = document.createElement('p');
    const didLi = document.createElement('li');
    const didBtn = document.createElement('button');
    const didP = document.createElement('p');

    //해야할일 리스트 추가
    todo.appendChild(todoLi);
    todoLi.appendChild(todoP);
    todoLi.appendChild(todoBtn);
    todoP.textContent = input.value;
    todoBtn.textContent = '완료';

    //해낸 일
    didP.textContent = todoP.textContent;
    didBtn.textContent = '삭제';

    //input 내용 초기화
    input.value = '';

    //완료버튼 이벤트리스너 추가
    todoBtn.addEventListener('click', () => {
      todoLi.remove();
      did.appendChild(didLi);
      didLi.appendChild(didP);
      didLi.appendChild(didBtn);
    });
    //삭제버튼 이벤트리스너 추가
    didBtn.addEventListener('click', () => {
      didLi.remove();
    })
  }
})