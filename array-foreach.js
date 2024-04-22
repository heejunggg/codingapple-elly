/*
arr.forEach(function(currentValue[, index[, array]]) {
    // 실행할 코드
}[, thisArg]);

*/

// 배열요소 출력하기  const numbers = [1, 2, 3, 4, 5];
/*
const numbers = [1, 2, 3, 4, 5];
// 내가 작성한 코드 numbers.forEach((el) => console.log(el));
numbers.forEach(function (number) {
  console.log(number); // 1 2 3 4 5
});
*/

// ----- ex 02. 배열 요소들을 합산하기 ------------------------
/*
합산하려면 1+2+3+4+5를 어떻게 표현? sum=0으로 시작 
sum = 0
sum = 0+1 ==> 1
sum = sum+2 ==> 3
sum = sum +3 ==> 6
sum = sum + 4 ==> 10
sum = sum +5 ==> 15 // sum += number
*/
console.log("----- 배열요소합산.----------");
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((number) => (sum += number));
console.log(sum);

//위의코드를 reduce()로 변환하기
const sumN = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sumN);

// ----- ex 03. forEach()를 사용해서 배열 요소들을 문자열로 앞에 "moring" 추가해서 새로운 배열을 생성하기------------------------
/* 원본배열에 추가
   ex) arr = ["짱구", "흰동이"]
        arr.push("신형만")
*/

/* 자연어풀이
const names = ['hee', 'young', 'old']; ---> 출력 : ["moring",'hee', 'moring','young']
1 . 어떤배열.push(`"mornig", ${name})
*/
const names = ["hee", "young", "old"];
const greeting = [];

names.forEach((name) => {
  greeting.push(`"morning", ${name}`);
});
console.log(greeting);
