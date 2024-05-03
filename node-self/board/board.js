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

$saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // form에 값을 받아온다.
  const $username = document.querySelector("#username");
  const $bigtitle = document.querySelector("#bigtitle");
  console.log($username);

  //tr요소를 만든다.
  const $new_tr = document.createElement("tr");

  //td요소를 만든다. 2개이다.
  const $td_username = document.createElement("td");
  const $td_title = document.createElement("td");

  //삭제 버튼과 버튼안에 '삭제' 글씨를 입력
  const $removeBtn = document.createElement("button");
  const $removeText = document.createTextNode("삭제");
  $removeBtn.appendChild($removeText);

  console.log($removeBtn);

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

  // 삭제하기 버튼 클릭하면 해당 tr 삭제하기
  // 생기는 tr이 많고 삭제하기도 많다. 순회를 해서 어디를 $new_tr, 삭제하기
  // 삭제의 부모를 찾아와서.tr을 삭제하기
  // 삭제 버튼 클릭 이벤트 리스너 추가

  // 현재 tr 요소 삭제
  $removeBtn.addEventListener("click", () => {
    $new_tr.remove();
  });
});
