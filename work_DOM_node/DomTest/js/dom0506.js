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
  // $li.textContent = $input.value;
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

  // $span.textContent = $input.value;
  // 텍스트를 담을 별도의 요소 생성
  const $textContent = document.createElement("span");
  $textContent.textContent = $input.value;
  $li.append($textContent, $removeBtn, $modifyBtn); // li의 자식이 생김.

  // 수정버튼시 prompt
  $modifyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // 수정버튼시 modal 나온다.
    // $li.textContent =  모달input.value
    // 저장버튼 시
    //  - 모달input.value = $li.textContent
    //    - $li.textContent에서 자식요소가 텍스트, 삭제버튼, 수정버튼이 있다.
    //      - 텍스트를 span 요소를 만들어서 span안에 텍스트를 넣어놓자!
    const $modal = document.getElementById("myModal"); // 전체모달
    const $modaContent = document.getElementsByClassName("modal-content");
    const $modalInput = document.querySelector("#modalInput"); //input
    const $modalSaveBtn = document.getElementById("modalSave");

    //let currentLi; // 현재 수정하고자 하는 li 요소를 저장하기 위한 변수-- 없어도 되긴됨.
    // $modalInput.value = $li.textContent;
    $modal.style.display = "block";
    console.log($modalInput.value);

    // currentLi = $li;

    // console.log(target); // button수정이 선택
    // console.log(target.parentNode); //li
    // li의 #text를 선택하면 된다.--#text를 어떻게 선택해?..
    // 그러므로 span요소를 만들자

    const target = e.currentTarget;
    const targetParent = target.parentNode;
    console.log(targetParent); // li가 나옴

    for (const child of targetParent.children) {
      // targetParent.chlidren는 text, 삭제버튼, 수정버튼
      // 그럼 child는 $textContent, 삭제버튼, 수정버튼의 각 자식들...
      console.log(child);
      $modalInput.value = targetParent.textContent;
      if (child.matches("span")) {
        //
        // $modalInput.value = child.childNodes[0].textContent; // 이렇게 해도 되고.
        $modalInput.value = child.innerText;
        break; //<span> 태그를 찾았으므로 더 이상 순회할 필요 없음
      }
    }

    const $close = document.querySelector(".close");
    //위의것을 getElementsClassName으로 하면 선택이 안된다..왜????
    $close.addEventListener("click", () => {
      $modal.style.display = "none";
    });

    // 모달창에서 저장하기
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
