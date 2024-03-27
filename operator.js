//엘리

//1. String concatenation
console.log("my" + "cat"); // my cat
console.log("1" + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals:1+2=3

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainer
console.log(2 ** 3); //2의 3승..

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //counter에 1을 늘려주고 preINcrement에 할당한다.
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//--> preIncrement:3, counter:3

const postIncrement = counter++;
//postIncrement = counter; //counter를 postIncrement에 할당한 다음에 1을 늘려준다.
//counter =  counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//--> postIncrement:3, counter:4;로 출력된다.
// - 도 마찬가지...그건 패스

//6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first trythy value 하나라도 true이면 true이다.
// 복잡하것을 제일 끝에 놔둔다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value 모두 true이면 true이다.
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //westing time
    console.log();
  }
  return true;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = "5";
const numberFive = 5;

// ==lose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by referendce
// object는 메모리에 탑재될 때 reference로 저장이 된다.
// 똑같은 데이터가 들어있는 objec이지만 실제 메모리에는 다른 reference가 들어있다.
// 그래서 ellie1과 ellie2는 같은 데이터가 들어있지만 서로다른 reference가 들어있다.그러므로 false이다.
// 하지만 ellie3과 ellie1은 같은 reference가 들어있으므로 true이다.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); //true

//문제
//equality - puzzler
console.log(0 == false); // 0과 블리언타입 같은 타입이다.
console.log(0 === false); // f
console.log("" == false); //t
console.log("" === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f --블리언타입과 다르다.

//8. if, else if, else
//9. Ternary operator: ?
const name = "df";
console.log(name === "ellie" ? "yes" : "no");
//10. Switch statement

//11. Loops
//조건이 맞을떄까지 계속 반복돈다.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is excuted first,
// then check the condition.
// 조건은 나중에 일단 블럭먼저 실행하고 조건을 검사한다.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0); //do while:0 출력된다.

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
} // 3--> 2--> 1

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

//문제 1.
//0에서 10까지 짝수만 출력

//내 해답..
for (i = 0; i < 11; i = i + 2) {
  console.log(`짝수: ${i}`);
}
// 엘리해답
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

//문제2.
//iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
