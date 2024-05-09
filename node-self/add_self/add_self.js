// 주문하기 버튼클릭하면 그 아래에있는 목록에 추가하기
/*
const orderInfoBtn = document.querySelector("#orderInfo")

1.새로운 노드만들고 --> 텍스트 노드만들고. ---> 둘이 연결
2. 근데 버튼을 클릭해야 나와야하므로..
...addEventListener('click',( 함수? ) => {

})

3. 함수로 하게되면 노드를 어떻게 함수로 만들지?
function nodeadd(){
    let newp = document.createElement("p")
    // let textNode = document.createTextNode("사과")
    //document.body.appendChild(newP)
}
*/
const orderInfoBtn = document.querySelector("#order"); // 주문하기 버튼
const title = document.querySelector("#container > h2"); // title
const orderInfo_add = document.querySelector("#orderInfo"); // 추가하는 영역
const newImg = document.createElement("img"); // img
console.log(orderInfoBtn);

function nodeadd() {
  let newp = document.createElement("p"); // 요소생성
  let textNode = document.createTextNode("여기는 목록들");

  //let textNode = document.createTextNode(title.innerText); // 노드 생성

  newp.appendChild(textNode); // 부모요소에 추가됨
  console.log(newp);

  orderInfo_add.appendChild(newp);
}
orderInfoBtn.addEventListener("click", nodeadd);

// 이미지추가하기 - 속성노드 만들기
//1. 삭제버튼 만들기-- 임의로 만들고.--> Node를 만들고 그안에 삭제버튼 어떻게?--
//2. 클릭하면 삭제되게.

// [수정] 목록에서 클릭하면 -- 세부로 들어간다 --- [수정] 체크박스 생성 --> [삭제]버튼 클릭하면 삭제
let newImg2 = document.createElement("img"); // 이미지 요소 노드 만들기
let srcNode = document.createAttribute("src"); // 이미지 속성 노드 만들기
srcNode.value = "img/starbuck.jpg";
console.log(srcNode);

// 요소노드와 속성노드 연결하기 setAttributeNode()
newImg2.setAttributeNode(srcNode);

// 자식노드 연결하기.어디에 위치시킬건지
orderInfo_add.appendChild(newImg2);

//********************************************************************** */

/*
실습 : 
웹문서를 열었을때,
시간이 12시 이전이면 images/morning.jpg
시간이 12시 이후이면 images/afternoon.jpg을 표시하려고 한다. 
현재시간을 알아내려면 알아내는 방법은 아래 제공 : 
const today = new Date(); // 현재 날짜와 시간 정보를 담은 today 객체
const hrs = today.getHours() // 현재 시간중 시 정보를 가져온다.

1. 현재 시간에 따른 이미지를 다르게 하려면 어떻게 해야할까?
    -- if(hrs > 12) images/afternoon.jpg
        images/morning.jpg

2. img 요소를 만들고 이미지 파일 경로를 지정하려면 어떻게 해야할까?
    --let imgE = document.createElement("img") // 이미지 태그를 만든다
    --let srcNode2 = document.createAttribute("src") // 이미지 속성만들기
    srcNode2.value = "img/morning.jpg"
    srcNode2.value = "img/afternoon.jpg"
    imgE.setAttributeNode(srcNode2) // 요소와 속성 연결하기

    // 어디에 위치 시킬지 자식노드 연결하기
    document.orderInfo_add.appendChild(imgE)

*/
const orderInfo_add2 = document.querySelector("#orderInfo"); // 추가하는 영역
const today = new Date();
const hrs = today.getHours();
console.log(hrs);

let imgE = document.createElement("img");

// let srcNode2 = document.createAttribute("src");
// srcNode2.value = "../img/morning.jpg";
// srcNode2.value = "../img/afternoon.jpg";
// imgE.setAttributeNode(srcNode2); // 요소와 속성 연결하기

// 위의코드 말고 직접 할당한다.
imgE.src = hrs < 12 ? "img/morning.jpg" : "img/afternoon.jpg";
// 어디에 위치시킬지 자식노드 연결하기
orderInfo_add2.appendChild(imgE);

//********노드삭제하기 ******** */
// const orderInfoBtn = document.querySelector("#order"); // 주문하기 버튼
// const title = document.querySelector("#container > h2"); // title
// const orderInfo_add = document.querySelector("#orderInfo"); // 추가하는 영역
// const newImg = document.createElement("img"); // img
// console.log(orderInfoBtn);

const title_h1 = document.querySelector("h1");
console.log(title_h1);

title_h1.addEventListener("click", () => {
  title_h1.remove();
}); // 왜안지워지지...

const ul_remove = document.querySelector("#items"); //ul
const items = document.querySelectorAll("#items > li"); //li들

console.log(items);

items.parentNode;
// console.log(items.parentNode); //ul로 나옴
//자식노드 지우기

//*** 예시3. li를 클릭하면 삭제하기 해보기 *****/
/*
1. li가 100개일수있다.
    -- li의 부모노드로 가서 부모노드에서 내가 선택한 li를 삭제한다.
        -- li가 여러개이다. 순회.어떤 for문을 돌아야하나.
        -- 유사배열 객체 forEach로 돌리자.
        --요소.forEach()-??

*/
/*
items.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item.parentNode); // ul
    // item.parentNode.remove(item); // ul 자체를 없앤다.
    item.parentNode.removeChild(item);
  });
});
*/

//**** 2. x표시를 클릭하면 삭제하게 하기 */
/* 
1.li 안에 있는 X표시 span을 클릭시 li의 요소를 지운다.
  - li가 많아서 for를 돌린다.
  - button을 클릭하면 button의 부모를 가져와서 li를 지운다.
  - span을 클릭하면 li를 지운다.
  span.parentNode.remove
*/

const buttons = document.querySelectorAll("li > span");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.remove();
  });

  //***************forEach로 안하고 부모노드 선택해서 지워주면 될거같은데. 실행안됨. */
  /*
  const button = document.querySelector("li > span");
  button.addEventListener('click', (button) => {
    button.parentNode.remove();
  })
    
  */
});

//*********예시3********** */
/*
/*
map과 join을 이용해서
<ul>
  <li>첫 번째 게시글</li>
  <li>두 번째 게시글</li>
  <li>세 번째 게시글</li>
</ul>
만들어라
*/

const items_box = [
  { id: 1, title: "첫 번째 게시글" },
  { id: 2, title: "두 번째 게시글" },
  { id: 3, title: "세 번째 게시글" },
];
console.log(items_box);

const itemsHTML1 = items_box.map((item) => `<li>${item.title}</li>`); // 대괄호로 배열로 표시된다.
const itemsHTML = items_box.map((item) => `<li>${item.title}</li>`).join("\n"); // 문자로 되어야한다.
console.log(itemsHTML1);
console.log(itemsHTML);
//ul로감싸야한다.
const itemsUl = `<ul>${itemsHTML}</ul>`;
console.log(itemsUl);

//**************배열을 문자로 변환해서 넣어보기!!!*****/
/* html에 
1.  <li>사과 - 1000원</li><li>바나나 - 500원</li><li>체리 - 1500원</li>
표시하기
2. items(ul)의 아래에 넣는다.
*/
const products = [
  { id: 1, name: "사과", price: 1000 },
  { id: 2, name: "바나나", price: 500 },
  { id: 3, name: "체리", price: 1500 },
];

const productHTML = products
  .map((product) => `<li><span>&cross;</span>${product.name}-${product.price}`)
  .join("\n");
console.log(productHTML);

// items아래에 넣으려면.노드추가.

/*
const ul_remove = document.querySelector("#items"); //ul
const items = document.querySelectorAll("#items > li"); //li들
*/

//ul_remove.appendChild(productHTML);//---> 왜추가가 안되지. --> 아래처럼 하니 추가가 되지만 삭제는 안된다.
// productHTML.parentNode;
// console.log(productHTML.parentNode);

// 기존 내용에 새로운 HTML 추가---이게맞음
ul_remove.innerHTML += productHTML;
