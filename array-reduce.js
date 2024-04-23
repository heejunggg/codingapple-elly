// ----- ex 01. reduce( ) 배열의 모든 요소 더하기 ------------------------

/*
const numArr = [1,2,3,4,5,6,7,8,9,10]
numArr.reduce((누적값, 현재요소) => {
    // 누적값 : 그전 값에서 return한 값이다.
})
*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; //
}, 0);
console.log(sum);

// ----- ex02. reduce( ) 최소값 구하기 ------------------------

const numbers12 = [100, 20, 18, 4, 60];

const min = numbers12.reduce((accumulator, currentValue) => {
  //accumulator,currentValue 이 두개를 왜 비교를 하지..누적값이므로.
  //   if (accumulator < currentValue) {
  //     return accumulator;
  //   } else {
  //     return currentValue;
  //   }

  if (accumulator < currentValue) return accumulator;
  return currentValue;
});
console.log(min); // 4

// ----- ex 03. reduce( ) 가격합산하시오 ------------------------

const coffee = [
  {
    name: "마끼야토",
    price: 3000,
  },
  {
    name: "라떼",
    price: 2500,
  },
  {
    name: "바닐라빈라떼",
    price: 5000,
  },
  {
    name: "아메리카노",
    price: 1000,
  },
];
/*
가격표현을??
coffee.price
----> 아님!!. 코드블럭안에서 하나하나의 요소를 currentValue가 하므로 currentValue.price라고 표현함.!!

누적값이 숫자인지 문자인지 정의 해줘야할거같은데.--> ??--> 아님!! 흠 price표현을 fruit.price라고 표현함!!!
*/
// const accumulator = coffee.price;
const total = coffee.reduce((accumulator, fruit) => {
  return accumulator + fruit.price;
}, 0);
console.log(total);

// 수업시간에 했떤 거 해보기---------------------

// -------ex. 04----또다른 문제 !!!!!------------------------

/* 문제 복습
reduce를 이용해서
const ph = ["010", "2345", "4567"]; 출력 010-****-4567되게 함수로 만드시오.

자연어 풀이

ph.reduce((acc,currentValue,index) =>{
    index:0   acc : 010, currentValue: ----,  return: -----
    index:1   acc : 010  currentValue: 2345, return:0102345  -> 010-****
    index:2   acc : 010-**** currentValue: 4567  return:010-****-4567

})
2.핸드폰번호를 입력했을때 별표로 나오게
reducea(010-5698-7894)  -> 출력 : 010-****-7894

자연어풀이 끝
*/

/* 1. 코드시작 - 변수로 출력.
const ph = ["010", "2345", "4567"];
const a = ph.reduce((acc, currentValue, index) => {
  if (index === 1) return (acc = acc + "- ****");
  return acc + "-" + currentValue;
});
console.log(a);
*/

// 2. -함수를 만들어라 - 누적값이 기본값이 있을떄--------------------
// 순회를 하면서 누적값,현재요소,
function reducef(ph) {
  /*자연어 풀이
    //1. 배열로 생성
    //2. 배열로 생성된 입력 값 [a,b,c] --> ["010","3265","6587"] 임의 번호가 들어가면 안됨.
    //3. 누적값
      - 기본값은 없고. 
      if (index ===1) return acc = acc + "****"
          return acc = acc + "-" + currenValue
  */

  // acc(누적값)에 기본값이 있을때,
  const parts = ph.split("-"); //  -를 붙여서 배열이 생성된다.

  const phone = parts.reduce((acc, currentValue, index) => {
    if (index === 0)
      return currentValue; // 초기값이 빈문자열이다.  -010이라고 나오는데 앞에 - 없애기 위해서.
    else if (index === 1) return (acc = acc + "-****");
    else return (acc = acc + "-" + currentValue);
  }, "");
  console.log(phone);
}

reducef("010-2658-6587");
