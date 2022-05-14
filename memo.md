# <script>
async
crossorigin
defer
 - 스크립트 로드 전까지 DOMContentLoaded 지연

---

# **연산자 : 제곱
ex) 2 ** 3 = 8

---

# ==, === 차이
==랑 !=는 값 비교
ex) 2 == '2' >> true
===랑 !==는 타입까지 비교
ex) 2 === '2' >> false

---

# Arrow Funtion
const sum = (a, b) => {
    return a + b;
};

const sum = a, b => {
    return a + b;
};

const sum = (a, b) => a + b;
 - 함수 및 정의가 한줄 인 경우 {}와 return 생략 가능
 - parameter에 대한 괄호는 생략 불가
 - const sum = a, b => a + b; >>> 안됨!!!

# function parameter 초기값 정릐
 - function 함수명(parameter1, parameter2 = '1') {}
 - 함수명(parameter1, parameter2 = '1') => {}

# function 다수 parameter 한번에 받기 : rest parameter(...)
 - function 함수명(...parameter) {}
 - 함수명(...parameter) => {}

 >>> parameter[0], parameter[1], ...

 - arguments와 유사
 >>> arguments는 유사 배열 : Array function 사용 불가
 - rest parameter(...)
 >>> Array funtion 사용 가능

 - rest parameter는 함수 당 하나만 사용 가능함

 - [참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)