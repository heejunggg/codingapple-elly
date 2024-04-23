const isIerable = (v) =>
  (v !== null) & (typeof v[Symbol.iteraotr] == "function");

//배열, 문자열, Map, Set 등은 이터러블이다.
isIerable([]); // true
isIerable(""); // true
isIerable(new Map()); // true
isIerable(new Set()); // true
isIerable({}); // false

// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1, 2, 3];

// Symbol.iterator 메서드는 이터레이터를 반환한다
const iterator = array[Symbol.iterator]();

// Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
console.log("next" in iterator); //true

// ----------codingEverybody ----------------
/*
JavaScirpt -구문


for(variable of iterable){
  // 반복할코드
}
*/

const iterable = [1, 2, 3, 4, 5];
for (const item of iterable) {
  console.log(item); // 1 2 3 4 5출력
}

console.log("forEach 부분");
// forEach
iterable.forEach((item) => {
  console.log(item); // 1 2 3 4 5 출력
});
// for in
// - 객체의 키값을 반복문을 통해 사용가능
// - 순서가 보장되지 않는다.(인덱스가 없기때문에.)

// "for...in" 문으로 배열 순회 (인덱스 정보 포함)
// for (const index in myArray) {
//   console.log(index, myArray[index]); // 인덱스와 배열의 요소 출력
// }

const heejung = { name: "아무개", age: 30 };

for (let k in heejung) {
  // console.log(k); // name , age
  // console.log(heejung[k]); //아무개, 30
  console.log(k, heejung[k]); // name 아무개   age 30
}

console.log("----person--");
const person = {
  name: "John",
  age: 30,
  occupation: "developer",
  length: 3,
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`); // value값만 나오네.
}

const person1 = {
  0: 10,
  1: 20,
  2: 30,
};

const arr = Array.from(person);
console.log(arr); // 왜 배열로 안된다는거지? person이 유사객체배열이 아니라서? 유사배열객체의 뜻은?

const arr2 = Array.from(person);
console.log(arr2);

/*
const obj = {
  0: "a",
  1: "b",
  length: 2,
};
// obj[0];
// obj[1];
// obj.length;

const arr_2 = Array.from(obj); // [a,b]
console.log(arr_2);
const arr_3 = Array.from({ length: 6 }); // empty로 채워진 길이 6


*/

console.log(
  "------------------------object.entries( )---------------------------------"
);

// 올바른 방법은 for...in 문이나
// for of를 사용할 경우 Object.keys(), Object.values(), Object.entries() 메서드를 사용하는 것입니다.

const myObject = { a: 1, b: 2, c: 3 };

// 인덱스와 요소 모두 출력
// 배열을 출력하는것은 for ..of이다. for of는 인덱스가 배열로 출력되는것이다.

for (let [key, value] of Object.entries(myObject)) {
  console.log(key, value); // a 1  b 2 c 3 으로 출력
}

for (const key in myObject) {
  console.log(myObject[key]); // 1 2 3 으로 출력
}

console.log("------------------일반객체 빌트인객체----------------------");
// 일반객체이다. 유사배열객체 아님
const heejung1 = {
  age: 30,
  interest: "coding",
  height: 170,
};

// for문으로 순회하기
for (let i = 0; i < heejung1.length; i++) {
  console.log(heejung1[i]); // 30, coding, 170
}

// 키와 값을 for in
for (const key in heejung1) {
  console.log(heejung1[key]); // value가 온다. 30 coding, 170출력
}

// 유사배열 객체는 배열처럼 push, pop, join, map과 같은 메서드 사용은 불가하며, 일반 객체처럼 프로퍼티로 접근할 수 없다.
/*
heejung1.push("web");
console.log(heejung1.push("web")); heejung1.push is not a function라고 출력
*/

// 그래서 유사객체배열을 배열화 할 때.. Object.keys(object)
console.log(Object.keys(heejung1)); //[ 'age', 'height' ]
console.log(Object.values(heejung1)); // [ 30, 170 ]
console.log(Object.entries(heejung1)); // [ [ 'age', 30 ], [ 'height', 170 ] ]

/************************* */
console.log("----유사배열 객체로 다시 만들기------------------");
//유사배열 객체 key값이 숫자여야한다. length를 꼭 써줘야한다.

const heejung2 = {
  0: "age",
  1: "coding",
  2: "haenam",
  length: 3, // 나중에 4로 바꿔줘도 됨.
};

// const b = Array.from(heejung2);
// console.log(b);
heejung2[3] = " 이녀석";
heejung2.length = 4; // length 업데이트

const b = Array.from(heejung2);
console.log(b); // [ 'age', 'coding', 'haenam', ' 이녀석' ]

//2. push( )를 이용해서 추가해주기
