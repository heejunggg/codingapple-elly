/* filter
-특정한 배열에서 내가 원하는 요소들만 찾아서 새로운 배열을 반환
-특정한 조건에 맞는 배열, 특정한 값을 삭제한 배열
*/

const userList = [
  {
    name: "박희정",
    age: 30,
    height: 190,
  },
  {
    name: "김사과",
    age: 23,
    height: 170,
  },
  {
    name: "이멜론",
    age: 17,
    height: 153,
  },
  {
    name: "이사랑",
    age: 25,
    height: 153,
  },
];
//20살이 넘는 사람을 찾고싶으면 일단 찾아라.
const user = userList.filter((el) => el.age > 20);
// console.log(user);

const nouser = userList.filter((el) => el.name !== "박희정");
console.log(nouser);

// splice는 원본 배열의 값을 삭제하지만
// filter는 원본 배열의 값을 삭제하지 않고 새로운 복사본을 생성.

/***************filter() 예제1 ****************************/
// filter() 함수를 사용해서 배열의 요소중에서 짝수만 필터링해서 필터링된 배열로 반환
/*
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

자연어
짝수만 나머지가 0인것. 
i%2 === 0  ---> i는 인덱스  순회하면서 true이면 새로운복사본 생성
num.filter((el,i) => {
  el%2 !=== 0 return
  el%2 === 0
})

*/
/*--------내가 처음 작성한 풀이1-------------------------------
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = num.filter((el, i) => {
  // console.log(el);
  // console.log(i);
  if (el % 2 !== 0) {
    return;
  } else {
    return el; // 그 숫자를 나오게 해라를 어떻게 표현
  }
});
console.log(result2);
*/

// ------풀이2  초보 개발자가 작성한 콜백함수를 만들어서 대입 풀이2---
/*
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(value) {
  return value % 2 === 0;
}

const result_2 = num.filter(even);
console.log(result_2);
*/
// --------------------풀이 3*---------------------
/*
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even_1() {
  const result_4 = num.filter((el) => {
    return el % 2 === 0;
  });
  console.log(result_4);
}
even_1();
*/
// console.log(result_3);

// -----------------풀이 4*-----콜백함수 만들어서 대입-------------
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even2(item) {
  return item % 2 === 0;
}

const result_5 = num.filter(even2);
console.log(result_5);
// even2가 콜백함수가 됨

/*************** filter() 예제2 **수업내용과 같다.************************/
// filter() 함수로 나이가 30 이상인 학생들만 필터링하기

const students = [
  ["Alice", 25],
  ["Bob", 30],
  ["Charlie", 22],
  ["David", 35],
];
/* 1. 자연어표현
const student_age = students.filter((el) => {
  // console.log(el);
  //el의 두번쨰 배열리터럴이 나이이다.이걸 어떻게 표현?
  // el[1];
  // console.log(el[1]);

  return el[1] >= 30;
});
console.log(student_age); // [ [ 'Bob', 30 ], [ 'David', 35 ] ]출력
*/

//2. 이제,함수로 표현하기
/*
나이가 30인이상의 학생들만 나오게 하기
함수의 정의 >> 돌아서 순회해서 참인것만 가져오기 새로운배열로.
*/

function student_search() {
  const result_stu = students.filter((el) => {
    return el[1] >= 30;
  });
  console.log(result_stu);
}
student_search();

/*************** filter() 예제3  배열의 중복 제거하기.************************/

//indexof
/*
const arr = [1, 1, 2, 3, "1", 3, 1, "1", 2];

console.log(arr.indexOf(1, 0)); //0
console.log(arr.indexOf(1)); //0
console.log(arr.indexOf("1")); //4
console.log(arr.indexOf(1, 1)); //1 두번째부터 값이 1인 인덱스값
console.log(arr.indexOf(0)); // -1
console.log(arr.indexOf(1, 3)); //6  네번째부터 값이 1인 인덱스 값.
console.log(arr.indexOf(2, 1)); //2
console.log(arr.indexOf("1", 2)); //4 세번째(즉 index 3부터 "1"이 있는 인덱스 값)
*/

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 5];

const uniqueNumbers = numbers.filter((element, index, arr) => {
  return arr.indexOf(element) === index; //
});

console.log(uniqueNumbers); //

// indexOf( ) 에서 배열에서 요소의 존재 여부 확인
/*
const arr = ["red", "pink", "blue", "lightblue", "salmon"]
const element = "blue";

자연어풀이
1. 요소3이 없으면 -1 이 나온다.
3이 있으면 "3은 존재합니다."

2. indexOf(3) !== index ---> -1이 나온다.--> index를 어떻게 표현??

*/
console.log("-------indexOf 다른문제ㅣ-----");

const arr5 = ["red", "pink", "blue", "lightblue", "salmon"];
const element = "green";

if (arr5.indexOf(element) !== -1) {
  console.log(`${element}는 존재합니다.`);
} else {
  console.log(`${element}는 존재하지 않습니다..`);
}
