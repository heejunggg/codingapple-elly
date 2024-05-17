/*
4. 숫자가 입력되지 않도록,길이제한10
    1.-- 만약, 숫자를 입력한다면 alert("숫자를 입력")
        -- 그럼, 숫자인걸 어떻게 확인
            <input type="text" 
            onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"/>

            숫자[0-9]/g ---> 모든문자에서 숫자를 입력했다면, 
            -입력을 어떻게알지?.

    2. -- 길이제한 10
       
*/

// const input_area = document.getElementById("te_input");

// // 입력한다-- 코드작성

// input_area.addEventListener("input", update);
// function update(){
//     if(){
//         alert("숫자로 입력하셨습니다.")
//     }
// }
