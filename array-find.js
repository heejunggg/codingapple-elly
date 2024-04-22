/*
1.배열에서 find() 함수로 "green" 찾기


const colors = ["red", "green", "blue"];

*/
//. 콜백함수로 만들어보기
const colors = ["red", "green", "blue"];
function findgreen(color) {
  return color === "green"; // 배열요소가 green과 같은지 확인
}
const green = colors.find(findgreen); // green
console.log(green);

// 배열에서 find() 함수로 "임의의 숫자" 찾기 ----콜백함수로 만들어보기
/*
const numbers = [1, 2, 3, 4, 5];
const target = 5;
function findnum(number) {
  return number === target;
}

const numbern = numbers.find(findnum);
console.log(numbern); // 5
*/
// 위의코드를 콜백함수로 안 만들고 기명함수로 매개변수로 전달하는 형식

const numbers = [1, 2, 3, 4, 5];
const target = 4;

const findnum = numbers.find((number) => {
  return number === target;
});
console.log(findnum);

/*------ 비슷하므로  findIndex*/
//출력: '값 3의 위치는 3 번째입니다.'
//콜백함수로
const nums = [12, 51, 6, 3, 70];
const target2 = 70;
function numf(el) {
  return el === target2;
}

const numtarget = nums.findIndex(numf);
console.log(numtarget);
