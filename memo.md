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

---

# function parameter 초기값 정의
 - function 함수명(parameter1, parameter2 = '1') {}
 - 함수명(parameter1, parameter2 = '1') => {}

---

# function 다수 parameter 한번에 받기 : rest parameter(...)
 - function 함수명(...parameter) {}
 - 함수명(...parameter) => {}

 > parameter[0], parameter[1], ...

 - arguments와 유사
 > arguments는 유사 배열 : Array function 사용 불가
 - rest parameter(...)
 > Array funtion 사용 가능

 - rest parameter는 함수 당 하나만 사용 가능함

 - [참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

# !! 결과 타입을 Boolean으로 변환

---

# Number 범위
 - Number.MAX_VALUE : 최대 정숫값
 - Number.MIM_VALUE : 최소 정숫값
 - Number.MAX_SAFE_INTEGER : 다룰 수 있는 최대 정숫값
 - Number.MIN_SAFE_INTEGER : 다룰 수 있는 최소 정숫값

---

# Math.random() 보다 안전한 난수
crypto.getRandomValues(new Uint32Array(10)).join('');

---

# String.prototype.search()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/search)

---

# String.prototype.includes()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

---

# RegExp.prototype.test()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

# Number.prototype.toFixed()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

# Number.prototype.toPrecision()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)

# shuffle 알고리즘
 - [피셔 예이츠 알고리즘 사용](https://daheenallwhite.github.io/programming/algorithm/2019/06/27/Shuffle-Algorithm-Fisher-Yates/)

# Object.freeze()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

# Object.isFrozen()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)