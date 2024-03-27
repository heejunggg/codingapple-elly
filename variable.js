//엘리

//유연하다 --위험하다.
//2강. use strict 상식적인, 성능 개선
"use strict";

//3강. 데이터타입
//let (added in ES6)

let globaName = "global name";
{
  let name = "heejung";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name); //콘솔창에 안나온다.
console.log(globaName);

/*
변수 선언 --> 변수 할당 순이다.

변수 호이스팅 :
 (변수선선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 
자바스크립트 고유의 특징을 변수 호이스팅이라고 한다.)
*/
//var (don't ever use this!)
//var hositing (move declaration from bottom to top)
// has no block scope

{
  age = 4;
  var age;
}
console.log(age); //콘솔창에 나온다. 선언먼저안하고 하물며 {}밖에 콘솔을 했는데도 잘출력이 된다.

//let을 쓸경우
/*
{
  age = 4;
  let age;
}
console.log(age); //let을 쓸경우 error가 나온다.
*/

//3. const 절대 변하지 않는 것을 넣어둔다.
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable tyopes
//primitive
//object, box container

/*

*/

//4. number
//5. string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value:${greeting} type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type : ${typeof helloBob}`);

//boolean
//false:0,null, undefined, NaN;

//null
let nothing = null;
console.log(`value: &{nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// object, real-life object, ;
const heejung = { name: "heejung", age: 20 };
heejung.age = 21; //이렇게 변경이 가능하다.

//symbol, create unique 우선순위를 주고싶을때
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

//5. Dynamic typing : dynamically typed language
//
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; //숫자에서 쓰는 나누기기호를쓰네 숫자인가보다.8을 숫자로 인식함.
console.log(`value: ${text}, type: ${typeof text}`);
