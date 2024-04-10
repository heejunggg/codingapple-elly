// 엘리의 콜백함수의 정의

// 첫번쨰
function add(num1, num2) {
  return num1 + num2;
}

/*add가 가리키는 그 함수의 코드블럭을 실행한다. 즉 복사되어 
doSomething에 레버펀스가 복사되어진다. 즉, add와 doSomething은 같은
같은 함수를 가리키고 있다. 
*/

const doSomething = add;
const result = doSomething(2, 3);
console.log(result);

const result2 = add(30, 20);
console.log(result2);

// 두번째
/*
function add(num1, num2) {
  return num1 + num2;
}

function surprise(operator) {
  let result = operator(10, 100);
  console.log(result);
}
surprise(add);
*/

// 세번쨰.
function add(num1, num2) {
  return num1 + num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  let result = operator(100, 2);
  console.log(result);
}
// surprise(add);
surprise(divide);
