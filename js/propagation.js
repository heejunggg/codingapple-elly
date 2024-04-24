const elements = document.querySelectorAll("*");

for (let element of elements) {
  element.addEventListener("click", (e) => {
    console.log(
      `event.target : ${e.target.tagName}, event.currentTarget:${e.currentTarget.tagName}`
    );
  });
}

// for반복문으로도 할수 있음.
/*
for (let i = 0; i < element.length; i++) {}

1. i 가 무엇을 의미하지.i가 횟수 /  element는 모든요소중 하나의요소
2. 출력 : 클릭했을떄 event.target과 event.currentTarget이 나와야해.
    -클릭이벤트.
        - elemnt.addEventListener('click', (e) => {
            console.log(`event.target : ${e.target.tagName}, event.currentTarget:${e.currentTarget.tagName}`
            );
        })
*/
/*
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", (e) => {
    console.log(
      `event.target : ${e.target.tagName}, event.currentTarget:${e.currentTarget.tagName}`
    );
  });
}
*/
