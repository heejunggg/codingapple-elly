/*
1. 입력폼에 제목 / 저자에 글을 입력 후 / 저장하기 버튼을 클릭하면
    -- bookList 목록에 표시된다.
        bookList 목록 밑에 표시된다. 그위치에 표시되게 하려면?

            1. 요소를 만들고, const item = document.createElement("li")
            2. li안에 글자를 넣는다.
                입력폼에 입력한 글자를 넣어야겠찌..어떻게 받아오지..
               item.innerHTML= `${title.value} - ${author.value}
               <span class="buttonDelete>삭제</span>"`
                li와 그안의 글과 연결한다.
                bookList.appendChild(item)
            
            3. '저장하기'버튼을 클릭하면 위의 처럼 나오게 1차로 코드작성.
        
*/

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
  //form button의 기본속성을 막는다.(화면에서 사라짐.)
  e.preventDefault();

  // 요소를 만든다.
  const item = document.createElement("li");
  console.log(item);
  //   console.log((title.value = "dd")); //input text안에 글씨공간

  // 요소 안에 글씨 입력 --- 제목과 저자는 변수로 둔다.
  item.innerHTML = `
  ${title.value} - ${author.value}
  <span class="deletBtn"> 삭제</span>
  <hr>
  `;

  console.log(item);
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  // 삭제버튼 클릭시 li지우기 삭제는 저장하기 버튼 클릭 후에야 나오므로 여기 안에
  const deletBtns = document.querySelectorAll(".deletBtn");
  //- 삭제의부모를 찾아와서 remove()

  /* 내가작성*/
  deletBtns.forEach((deletBtn) => {
    deletBtn.addEventListener("click", () => {
      deletBtn.parentNode.remove();
    });
  });

  /*순회를 안하고 그부모찾아서 삭제하기 클릭하면 지우면 될거같은데.*/
  const deletBtn = document.querySelector(".deletBtn");
  deletBtn.addEventListener("click", (deletBtn) => {
    deletBtn.parentNode.remove();
  });
});
