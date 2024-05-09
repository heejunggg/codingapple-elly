//////map() ////////////////////////////
//****수업내용 ---..******* */
console.log("------------안녕하세요 예제---------------");
const posts = [
  {
    id: 1,
    title: "안녕하세요-1",
  },
  {
    id: 2,
    title: "안녕하세요-2",
  },
];
[("<div>안녕하세요-1</div>", "<div>안녕하세요-2></div>")];

const hello = posts.map((aaa, i) => {
  //console.log(aaa);
  //console.log(i);
  if (i % 2 === 0) return; // 0번째는 참이므로 undefined
  return aaa.title; // 1번쨰는 거짓이므로title반환.
});
console.log(hello); //[undefined, '안녕하세요2']출력

const titles = posts.map((aaa) => aaa.title); // 모든 index반환.
console.log(titles);
// ["안녕하세요-1", "안녕하세요-2"]출력

console.log("------map [희정아][커피끊자]출력 다른예제------ ");

console.log("------map 2n 다른예제------ ");
//console.log(results); // [20, 40, 60]
//배열을 만들어서 순회를 해서 새배열을 만들고 배열의 두배가 나오게 해라.
// 배열나온 것중에 가운데 숫자를 입력하면 모두 **로 나오게 함수를 만들어라

/* 자연어 풀이
const results = arr2n.map()--> 안에 콜백함수의 매개변수를 넣어서 인덱스에 해당하는
개체를 순회하게 하려면.
const results = arr2n.map((bbb,i) => {
  i인덱스에 담는 bbb 개체내용들을 두배로 하면 되잖아. bbb * 2 
  이걸 코드블럭 console.log에 찍어야하니 return!!!
})
*/
/*
const arr2n = [10, 20, 30];
const results = arr2n.map((bbb, i) => {
  console.log(i); // 0,1,2
  console.log(bbb); // 10,20,30 이 의미를 아니까 이해됨. 콜백함수 조금은.
  return bbb * 2;
});
console.log(results); //[20,40,60]
*/
// 가운데 배열에 **을 추가하고 함수를 만들어라.
// arr2n[1] = "**"

//공통인자로 받고싶을때
function addstar(arr) {
  const results = arr.map((el) => {
    return el * 2;
  });
  console.log(results); //[42,62,82] results는 변수이므로 addstar함수 안에서 쓸수있다.
  return results;
}
addstar([21, 31, 41]); //[42,62,82]
//만약 리턴값을 외부변수로 할당
// let a = addstar([21, 31, 41]);
// console.log(a);

function addstar1(...args) {
  const results = args.map((el) => {
    return el * 2;
  });
  console.log(results);
  return results;
}

addstar1(15, 22, 33);

/****************내가 작성한 오류함수.!!!!*********************
const arrs = [a, b, c]; //오류

function addstar(arr, i) {
  console.log(arr);
  console.log(i);
  const results = arrs.map((arr, i) => {
    return arr * 2;
  });
}
console.log(results);
addstar(20, 40, 60); // 숫자를 넣었음 인자를 배열로 넣기!
*/

console.log("------여기부터 다른 예제-------");
//map() 함수예제
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(function (n) {
  return n * 2;
});
console.log(doubleNumbers);

//  화살표함수로 바꾸면
//const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// ******************ex1 map() 문자열을 대문자로 변환하시오*****************
// const fruits = ["Apple", "Banana", "Cherry"];
// toLowerCase(); // 소문자로 변환
//--> 배열이 아니라 문자열로 바꾸시오. "apple","banana","cherry"

/*
1.
const fruits = ["Apple", "Banana", "Cherry"];
const low = fruits.map((fruit) => fruit.toLocaleLowerCase());
console.log(low); //["apple", "banana", "cherry"]

익명함수로 변환.
const low = fruits.map(functon(fruit){
  return fruit.toLocalLowerCase()
})
console.log(low)

2. 자연어 해석
배열을 문자열로 변환 -join
split는 문자열을 배열로 변환.

const fruits = ["Apple", "Banana", "Cherry"];

const low = fruits.map((fruit) => fruit.toLocaleLowerCase());
console.log(low); //["apple", "banana", "cherry"]
const f_string = low.join("\n");
console.log(f_string);

3. 함수로 정의 - 리터럴 글을 아무글이나 해도 될수있게.*/

function fruitTag(item) {
  const lower = item.map((el) => el.toUpperCase());
  // console.log(lower); //[ 'APPLE', 'BANANA', 'CHERRY' ]
  const f_string = lower.join("\n"); //줄바꿈
  // console.log(f_string);

  return f_string;
}
// console.log(lower); //error
let a = fruitTag(["Apple", "Banana", "Cherry"]);
console.log(a);

// APPLE
// BANANA
// CHERRY

// *************ex2 map() 값추출********************
// 사용자 객체 배열에서 사용자 이름만 추출하여 새로운 배열을 생성하시오. map()

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
// 객체 순회해서 사용자 이름 추출 , 새로운 배열 생성
// 사용자 이름만 추출
const users1 = users.map((n) => n.name);
console.log(users1); // ["Alice","Bob","Charlie"]

// 익명함수로 변환
//const users1 = users.map(function (user) {
//   return user.name;
// });
// console.log(users1);

//***********ex3 map() 조건대체******************** */
// map() 함수는 numbers 배열의 각 숫자가 짝수인지 홀수인지 판별하여,
// 짝수일 경우 'Even', 홀수일 경우 'Odd'로 대체하여
// modifiedNumbers 배열을 생성합니다.
// numbers_map[n+2] = 짝수
// numbers_map[n] = 홀수
/*
자연어풀이
const number s = [10,11,12,13,14,15]
짝수 
const modifiedNumbers = if(number%2 === 0){
  console.log("${number}는 even")
}else {
  console.log("${number}는 odd")
}
*/
const numbers_map = [10, 11, 12, 13, 14, 15];
const modifiedNumbers = numbers_map.map((number) =>
  number % 2 === 0 ? "even" : "odd"
);
//삼항연산자와 화살표함수
// 조건 ? 값1 : 값2

//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });
console.log(modifiedNumbers);

console.log("-----------0503map과 join예제------------");

const items_box = [
  { id: 1, title: "첫 번째 게시글" },
  { id: 2, title: "두 번째 게시글" },
  { id: 3, title: "세 번째 게시글" },
];
/*
이용해서 map과 join을 이용해서
<ul>
  <li>첫 번째 게시글</li>
  <li>두 번째 게시글</li>
  <li>세 번째 게시글</li>
</ul>
만들어라

map은 새로운 배열을 만든다.
요소.map((el) => {
})
*/

//title의 문자열이 와야한다. --> join으로 배열을 문자열로 만들어야한다.
// ul과 li의 태그가 있어야한다.
// const postItemsHTML = items_box.map((item) => `<li>${item.title}</li>`);
const itemsHTML = items_box.map((item) => {
  `<li>${item.title}</li>`;
});
