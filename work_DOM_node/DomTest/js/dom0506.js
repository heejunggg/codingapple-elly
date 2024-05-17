/*
5번.
1.input의 공간
2. 저장버튼 / 초기화버튼
3. 저장하면 어디에 생기게? ul인 #list-- 부모
    - document.createElement("li")
    - li.textConent = "liclass"
    - 부모.append(변수)

6번.
수정,삭제하기

*/
const $input = document.querySelector("#list_data");
const $saveBtn = document.querySelector("#send");
const $resetBtn = document.querySelector("#reset_one");
const $ul_list = document.querySelector("#list"); //ul
const $items = document.querySelectorAll("li"); // li들
console.log($items);

//요소만든다.
function update() {
  const $li = document.createElement("li");
  $li.className = "liclass";
  $li.textContent = $input.value;
  $ul_list.appendChild($li);

  // 삭제버튼
  const $removeBtn = document.createElement("button");
  $removeBtn.className = "remove_btn";
  $removeBtn.textContent = "삭제";

  $removeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    $removeBtn.parentNode.remove();
    const target = e.target.parentNode;
    console.log(target);
  });

  // 수정버튼
  const $modifyBtn = document.createElement("button");
  $modifyBtn.className = "modify_btn";
  $modifyBtn.textContent = "수정";
  $li.append($removeBtn, $modifyBtn);

  // 수정버튼시 prompt
  $modifyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("수정");

    /*prompt로하니..안되네''' 다른방법 검색
    const modify_text = prompt("수정사항을 입력하시오", $li.textContent);
    console.log(modify_text);

    if (modify_text !== null) {
      $li.textContent = modify_text;
    }
    */

    // 수정버튼시 modal 나온다.
    // $li.textContent =  모달input.value
    // 저장버튼 시
    //  - 모달input.value = $li.textContent
    const $modal = document.getElementById("myModal"); // 전체모달
    const $modaContent = document.getElementsByClassName("modal-content");
    const $modalInput = document.getElementById("modalInput"); //input
    const $modalSaveBtn = document.getElementById("modalSave");

    $modal.style.display = "block";
    $modalInput.value = $li.textContent;
    console.log($modalInput.value);

    $modalSaveBtn.addEventListener("click", () => {
      $li.textContent = $modalInput.value;
      $modal.style.display = "none";
    });
  });
}

//저장할떄
$saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 입력 값이 빈 문자열인 경우 alert 표시
  //  검색 trim()메소드 : 입력 값의 앞뒤 공백을 제거한 뒤 빈 문자열인지 확인
  if ($input.value.trim() === "") {
    alert("글을 입력하시오");
  } else {
    update();
    $input.value = "";
  }
});

// 초기화 버튼 클릭하면 모두 사라진다.
$resetBtn.addEventListener("click", () => {
  $ul_list.innerHTML = ""; // 초기화.
});
