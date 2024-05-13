/*
최종1.
# 목록화면
-- 등록하기 버튼을 클릭하면.

tbody

1. 하나의 tr에 두개의 td를 만들고 옆에 삭제하기 버튼을 만든다.
-- const new_tr = document.createElement('tr')
-- td요소를 만든다.
    const td_title = document.createElement('td')
    const td_username = document.crateElement('td')
-- 삭제버튼 만든다.
    const removeBtn = document.createElement('button')
-- 둘을 합쳐서 tr안에 두개의 td와 삭제버튼이 있게한다.(여러개 append)
    new_tr.appen(td_title, td_username, removeBtn)



2. 삭제하기 버튼을 클릭하면 tr이 없어진다.
3. #목록화면에서
    1. 제목 클릭시 ---수정으로 간다.---이건 다른페이지로 이동 쌤이 location과 history를 이용하라고 하심
    

*******다른버전 최종2.*******
쌤 화면으로 만들기

******* textarea에 img넣기 *******
*/

/*
화면구상
*/

//등록하기 버튼을 변수로
const $saveBtn = document.querySelector("#save");
const $tbody = document.querySelector("tbody");
const $textarea = document.querySelector("#text-input");

// form에 값을 받아온다.
const $username = document.querySelector("#username");
const $bigtitle = document.querySelector("#bigtitle");
console.log($username);

// 함수를 만든다.- 요소생성--자식노드만들기
function creadAndappend() {
  //tr요소를 만든다.
  const $new_tr = document.createElement("tr");

  //td요소를 만든다. 2개이다.
  const $td_username = document.createElement("td");
  const $td_title = document.createElement("td");

  //삭제 버튼과 버튼안에 '삭제' 글씨를 입력
  const $removeBtn = document.createElement("button");
  const $removeText = document.createTextNode("삭제");
  $removeBtn.appendChild($removeText);

  //   console.log(`삭제버튼이다.${$removeBtn}`);

  //둘을 합쳐서 tr안에 두개의 td와 삭제버튼이 있게한다.(여러개 append)
  $new_tr.append($td_username, $td_title, $removeBtn);

  // 어느위치에?--목록에 표시
  $tbody.appendChild($new_tr);

  // value입력
  $td_username.innerText = $username.value;
  console.log($td_username);
  $td_title.innerText = $bigtitle.value;
  console.log($td_title);

  // 입력 후 빈공간
  $username.value = "";
  $bigtitle.value = "";
  $textarea.value = "";

  // 삭제하는 함수 호출
  addremove($removeBtn, $new_tr);

  // 수정하는 호출
  modify($td_username, $td_title);
}

// 저장할때 addEventListener
$saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  creadAndappend();
});

// 삭제할때 addEventListener

// 삭제하기 버튼 클릭하면 해당 tr 삭제하기
// 생기는 tr이 많고 삭제하기도 많다. 순회를 해서 어디를 $new_tr, 삭제하기
// 삭제의 부모를 찾아와서.tr을 삭제하기
// 삭제 버튼 클릭 이벤트 리스너 추가

// $removeBtn라는 변수는 creadAndappend() 함수안에 있어서 밖에 못쓴다..어떻게하면되지
// 그럼, 삭제하는 함수를 어떻게 만들어야하나....매개변수를 쓰면 되나?

// 현재 tr 요소 삭제
function addremove($removeBtn, $new_tr) {
  $removeBtn.addEventListener("click", () => {
    $new_tr.remove();
  });
}

//*********** 수정하기 **************************

/*
** 수정을 위해서는 --> 입력했던 내용을 불러와야 한다.
1.--const $textarea = document.querySelector("#text-input");--전역변수
  const $td_username = document.createElement("td");--지역변수
  const $td_title = document.createElement("td"); -- 지역변수
  값을 받아와야한다.

2. 프롬프트로 제목과 사용자명만 업데이트 하는걸루하자..내용은 시간이 오래걸릴듯.
*/

/*
1. 사용자명을 업데이트
const $td_username = document.createElement("td");
$td_username.innerText = "기존 사용자 이름"; // 예시로 기존 내용을 설정

rompt 함수는 사용자에게 간단한 입력을 요청할 때 사용되며, 
첫 번째 인자로는 사용자에게 보여질 메시지를, 두 번째 인자로는 입력 필드의 기존의이름

*/
function modify($td_username, $td_title) {
  $td_username.addEventListener("click", () => {
    const modify_username = prompt("이름을 입력하시오", $td_username.innerText);
    console.log(modify_username);

    //이걸 안했더니 undefined가 되었다.
    if (modify_username !== null) {
      $td_username.innerText = modify_username;
    }
  });

  $td_title.addEventListener("click", () => {
    const modify_title = prompt("제목을 입력하시오", $td_title.innerText);
    console.log(modify_title);

    //
    if (modify_title !== null) {
      $td_title.innerText = modify_title;
    }
  });
}
