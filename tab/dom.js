/*
출력 - 1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오. 
disp의 위치에서 innerText로 변경한다.
 --페이지가 로딩될때---1.
 --글씨 변경,노드추가로 해보기 --2
    ---p태그에 글씨 추가 노드추가 -2.1
        -- const body_disp = document.querySelector('.disp')
        -- const newP = document.createElement('p') --생성해서 노드를추가 
        // -- newP.classList.add("p")
        // -- body_disp appendChild(newP)

        텍스트노드 만든다.
        -- const text = document.createTextNode("안녕")

        // 연결시킨다.
        newP.appendChild(textNode)
       
    --글씨변경
        const text = newP.appendChild(textNode) //글씨
        text.innerText = "하시오"

*/

const body_disp = document.querySelector(".disp"); // 어디에 생기게할꺼야
const body_form = document.querySelector("form");
const text_change_t = document.querySelector("text-change");
console.log(body_form);

// form을 연결한다.
// const textNode = document.createTextNode("안녕");

// const newP = document.createElement("p");
// newP.classList.add("p");
// const text_modify = body_form.appendChild(newP); // 변수에 담는다. 부모노드.appendChild(자식노드)

// console.log(text_modify);

document.addEventListener("DOMContentLoaded", () => {
  body_disp.innerText = "안녕.";
});

/*
2. 탭을 선택하면 탭의 배경와 글자색을 바꾼다.
선택한 탭. addEventListener('click', (event) => {
    선택한 탭.style.background = "#ebebeb"
    선택한 탭.style.color ="#3333"
})
*/
const $tab_btns = document.querySelectorAll(".tab"); // tab의 모두
const $block_btns = document.querySelectorAll(".block"); // block의 모두
console.log($tab_btns);

$tab_btns.forEach(($tab, index) => {
  $tab.addEventListener("click", (event) => {
    // 선택 안한거는 style과 background가 none 내가 선택한것만 배경과 글자색을 바꾼다.
    // 아래예제보니 이렇게 하면 안되겠네.

    // tab 클래스
    $tab_btns.forEach((el) => {
      el.classList.remove("active");
    }); // 모두 삭제해라.

    // block 클래스
    $block_btns.forEach((block) => {
      block.classList.remove("active");
    }); // 모두 삭제해라.

    // event.target.style.background = "pink";
    // console.log(index); //index나옴.
    $tab_btns[index].classList.add("active");
    $block_btns[index].classList.add("active");
  });
});

// block도 foreach로 돌린다.--> 아닌거같지만.해보자
// $block_btns.forEach(($block, index) => {
//   $block.addEventListener("click", (event) => {
//     $block_btns.forEach((el) => {
//       el.style.display = "none";
//     });
//     event.target.style.display = "block";
//     console.log(index); //index나옴.
//   });
// });

// 1. 탭1 클릭시 -- 탭1을 선택했습니다. 콘솔로 찍으면 키값이 몬지 알수있을거같은데--index로 하면 됨.
// 2. 같은 index를 표시할때.
//  -- 모두 다 꺼주고 같은 index만 켜준다.

/*
3.tab버튼 클릭시 탭 숫자와 같은 contents만 보이게 하기
  --탭1과 탭1컨텐츠와 같아야한다. 
    -- 같다는걸 어떻게 표현할까.
      -- $tab클릭시 순회를 한다. 
*/
