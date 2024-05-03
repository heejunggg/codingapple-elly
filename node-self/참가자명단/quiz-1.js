/*
1. 새로운 요소 tr을 만든다.- const new_tr = document.createElement("tr")
    --tr의 요소가 만들어졌고,

2. td2개를 받아와서 tr과 연결해줘야한다.
    td2를 텍스트노드로 해야하나...??
        -- tr과 td를 연결 -- new_tr.appendChild(textNode)XXX
        -- tr안에  innerHTML로 안에 백틱을 이용해서 변수명을 넣는다.
            new_tr.innerHTML = `${username.value} - ${major.value}
            <span class=remove>삭제</span>--XXXX 이렇게 하면 td구분없이 한줄에 다들어옴.

    --> 여기에서 각 td안에 맞는 value를 넣어줘야할거같은데..

    --> 여기에서 매일 헷갈린다.
    appendChild(td)를 해줘야할거같은데..

    -- 새로운 td2개를 만든다.(셀이 두개이므로)
    -- td1 : 이름의 값을 가져온다. username.value="" / ${username.value}
    -- td2 : 전공의 값을 가져온다. major.value="" / ${major.value}
    --> td를 구분해야한다.
        td1 : 이름의값이 들어오게 const tdone = document.createElement('td')
            tdone = username.value
            tdtwo = major.value
        td2 : 전공의 값이 들어오게 const tdtwo = document.createElement('td')
   */

const username = document.querySelector("#username");
const major = document.querySelector("#major");
const button = document.querySelector("button");
const tbody = document.querySelector("tbody");

// console.log(`${username.value}=dd`);

//이벤트
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.dir(username); // value값이 뭐가 들어갔는지 알수있따.

  // tr요소 만든다.
  const new_tr = document.createElement("tr");
  console.log(new_tr);

  //td요소 만들기
  const tdone = document.createElement("td");
  console.log(tdone);
  const tdtwo = document.createElement("td");

  // 에러가 난 상황
  //   tdone = username.value;--->tdone은 그냥 문자로 인식된다.
  //   tdtwo = major.value;

  tdone.innerText = username.value;
  tdtwo.innerText = major.value;

  //연결하기
  new_tr.append(tdone, tdtwo); // 연결
  console.dir(tdone);

  //   new_tr.innerHTML = `${username.value} - ${major.value}
  //       <span class=remove>삭제</span>
  //       `;

  // 어디에 위치해??
  tbody.appendChild(new_tr);
  console.log(`최종new_tr: ${new_tr}`);

  // 그 전 내용 없애기
  username.value = "";
  major.value = "";
});
