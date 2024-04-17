//////map() ////////////////////////////
//****수업내용 ---이해안됨..******* */
/*
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

// posts.map(() => {});
posts.map((abcd, i) => {
  console.log(i);
  if (i % 2 === 0) return; //
  return abcd.title;
});

posts.map((abcd) => abcd.title);
// ["안녕하세요-1", "안녕하세요-2"]
*/

//map() 함수예제
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(function (n) {
  return n * 2;
});
console.log(doubleNumbers);

//  화살표함수로 바꾸면
//const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// ******************ex1 map() 문자열을 소문자로 변환하시오*****************
// const fruits = ["Apple", "Banana", "Cherry"];
// toLowerCase(); // 소문자로 변환
//-->   배열이 아니라 문자열로 바꾸시오. "apple","banana","cherry"
/*

*/
const fruits = ["Apple", "Banana", "Cherry"]; // 배열레터럴을 순회하면서 다른 배열을 생성한다.

const low = fruits.map((fruit) => fruit.toLocaleLowerCase());
console.log(low); //["apple", "banana", "cherry"]

/*
익명함수로 변환.
const low = fruits.map(functon(fruit){
  return fruit.toLocalLowerCase()
})
console.log(low)
*/

/* 자연어 해석
배열을 문자열로 변환 -join
split 문자열을 배열로 변환.
*/
const f_string = low.join("\n");
console.log(f_string);
// apple
// banana
// cherry

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
