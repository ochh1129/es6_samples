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

---

# Number.prototype.toFixed()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

---

# Number.prototype.toPrecision()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)

---

# shuffle 알고리즘
 - [피셔 예이츠 알고리즘 사용](https://daheenallwhite.github.io/programming/algorithm/2019/06/27/Shuffle-Algorithm-Fisher-Yates/)

---

# Object.freeze()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

---

# Object.isFrozen()
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

---

# Window.devicePixelRatio
[참고]([참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen))

---

# location Hash
 - const hash = location.hash;
 - location.hash = 'section';
 - window.addEventListner('hashchange', handleHashChange);
    handleHashChange();

    function handleHashChange() {
        const hash = location.hash;
        document.querySelector('.log').innerHTML = `Current Anchor is ${hash}`;
    }

---

# DOMContentLoaded
 - HTML 로딩 완료 후 발생
 - script defer를 쓰지 않고 include 했을 때 script tag의 위치가 html element보다 상위 일 때 해당 스크립트에서 이후 html 요소를 호출하면 로딩을 완료하지 못한 상태이므로 예외 발생하여 스크립트 깨짐
 - DOMContentLoaded 이벤트 발생 시 스크립트를 실행하면 html 요소를 정상적으로 사용할 수 있음

---

# 마우스 좌표 정리
 - event.clientX : 브라우저 좌측 상단 기준 X 좌표
 - event.clientY : 브라우저 좌측 상단 기준 Y 좌표
 - event.offsetX : html 요소 좌측 상단 기준 X 좌표
 - event.offsetY : html 요소 좌측 상단 기준 Y 좌표
 - event.pageX : 페이지 좌측 상단 기준 X 좌표
 - event.pageY : 페이지 좌측 상단 기준 Y 좌표
 - event.screenX : 디바이스 좌측 상단 기준 X 좌표
 - event.screenY : 디바이스 좌측 상단 기준 Y 좌표

---

# keypress 이벤트 특이사항
 - keypress는 문자를 입력할 때만 발생
 - Alt, Shift, Ctrl, Enter는 이벤트 미발생
 - keydown 혹은 keyup으로 대체할 것

---

# 키보드 이벤트 속성 정리
 - event.key : 입력 키값('a')
 - event.code : 입력 키 코드('keyA')
 - event.altKey : alt 키 입력 여부(true, false)
 - event.ctrlKey : ctrlKey 키 입력 여부(true, false)
 - event.shiftKey : shiftKey 키 입력 여부(true, false)
 - event.meteKey : meteKey 키 입력 여부(true, false)
   > Windows키 혹은 Mac의 command키
 - event.repeat : 현재 키의 눌림 여부
   > [참고](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat)
 - event.isComposing : 입력 중 상태 확인(true, false)
   > 특수 문자 입력 변환 중에도 true : ㅁ > 한자 키 > 특문 목록 확인 중이면 true
 - event.keyCode : 입력 키 아스키(ASCII) 코드


---

# 브라우저 탭 전환 이벤트
event type : visibilitychange
 - 상태 : visible, hidden
[참고](https://developer.mozilla.org/ko/docs/Web/API/Document/visibilitychange_event)

---

# window resize 이벤트
event type : resize
 - 마우스 드래그하는 내내 이벤트 발생해서 부하 엄청 걸림
 - inteval을 1초가량 두고 이벤트 호출하는 편이 나을 수 있음

# matchMedia
media 쿼리 일치 여부 반환
ex)
{
    matches : true,
    media : '(min-width:500xp)'
}

const isLegacyMobile = matchMedia('max-width:500px').matches;

const isOrientation = matchMedia('(orientation: portrait)');

isOrientation.addListener(() => {
console.warn('화면을 전환했어요!');
});

matchMedia는 window.resize와 달리 변경 시 1회만 실행하므로 부하가 덜함
[참고](https://developer.mozilla.org/ko/docs/Web/API/Window/matchMedia)

---

# dispatchEvent
 - 엘리먼트의 click 이벤트 강제 발생
   > jquery의 trigger

const el = document.querySelector('.target').addEventListener('click', (event) => {
console.warn('event', event.target);
});

setTimeout(() => {
    el.dispatchEvent(new Event('click'));
}, 1000);
[참고](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/dispatchEvent)

---

# 이벤트 무효
event.preventDefault();

---

# 마우스 드래그 이벤트
[드래그 요소에서 발생]
dragstart : 마우스 드래그 시작
drag : 마우스 드래그 중
dragend : 마우스 드래그 완료

[드래그 완료 후 요소에서 발생]
dragenter : 드래그 중인 포인터가 요소 위치로 이동한 시점
 - 드래그 가능 항목 드래그 중 dragenter 이벤트가 걸려있는 요소 위에 도착하면 발생
dragover : 드래그 중인 포인터가 요소 위치에 있는 시점
 - 드래그 가능 항목 드래그 중 drag 이벤트가 걸려있는 요소에 있으면 발생
dragleave : 드래그 중인 포인터가 요소에서 벗어난 시점
 - 드래그 가능 항목 드래그 중 dragleave 이벤트가 걸려있는 요소에서 벗어나면 발생
drop : 요소의 드랍 시점
 - 드래그 가능 항목 드래그 중 drop 이벤트가 걸려있는 요소에 떨구면 발생

브라우저 위로 파일을 드래그 & 드롭하면 페이지 이동이 발생하므로 dragover 이벤트에 event.preventDefault()로 해당 이벤트 블럭해야 함

[드래그 이벤트 정보]
event.dataTransfer.files : 드롭한 파일 정보(FileList 객체)
{
    0:File 객체,
    1:File 객체,
    ...
}
요소를 드래그 할 수 있도록 할려면 draggable 속성 지정 필요
<div draggable='true'></div>

drag 이벤트를 window.resize 이벤트와 유사하게 계속 발생하여 부하가 걸리므로 복합한 로직은 피하도록 함

---

# DOCTYPE

dtd에 따라 브라우저에서 처리하는 방식이 달라지므로 주의할 것

html 5 : <!DOCTYPE html>
[참조](http://www.tcpschool.com/html-tags/doctype)

---

# document.querySelectorAll

selector에 일치하는 요소 전부 반환(Array : NodeList)

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    ...
});

---

# Node 관련
[속성 / 의미 / 타입]
부모노드.children : 자식 노드 / 요소군(HTMLCollection)
부모노드.firstElementChild : 첫 번쨰 자식 노드 / 요소(Element)
부모노드.lastElementChild : 마지막 자식 노드 / 요소(Element)
부모노드.nextElementSibling : 다음 노드 / 요소(Element)
부모노드.previousElementSibling : 이전 노드 / 요소(Element)
자식노드.ParentNode : 부모 노드 / 노드(Node)

[메소드 / 의미 / 반환]
부모노드.appendChild(자식노드) : 부모 노드에 자식 노드 추가 / 요소(Element)
부모노드.insertBefore(자식노드, 희망위치의 노드) : 부모 노드 내 노드 추가 / 요소(Element)

노드1.before(노드2) : 노드 1 앞에 노드 2 추가 / 반환 없음
노드1.after(노드2) : 노드 1 뒤에 노드 2 추가 / 반환 없음
부모노드.hasChild(자식노드) / 부모 노드에 자식 노드 존재 여부 확인 / true, false

부모요소.insertAdjacentHTML(삽입위치, 문자열) / 문자열을 HTML로 삽입 / 요소(Element)
 - 'beforebegin' : 부모 요소 바로 앞
 - 'afterbegin' : 부모 요소 제일 앞
 - 'beforeend' : 부모 요소 제일 뒤
 - 'afterend' : 부모 요소 바로 뒤

insertAdjacentElement()도 유사함

부모노드.removeChild(자식노드) / 부모 요소에서 자식 요소 제거 / 제거한 요소(Element)

노드.remove() / 요소를 제거 / 반환 없음

---

# noopener, noreferrer
anchor tag(<a>)에서 부모 창 접근이 불가능하도록 제어
[참조](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener)
[참조](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer)

---

# getComputedStyle
최종적으로 계싼한 스타일 값 반환
ex) getComputedStyle(element).width;

---

# input event(input vs change)
 - 'input' : input 요소 키 입력 시 이벤트
    > 사용자의 인터페이스에 의해 요소의 텍스트 내용을 변경할 때 발생
 - 'change' : input 요소 변경 시 이벤트
    > 요소의 내용을 변경했을 떄 발생

input 이벤트는 키 입력 발생과 함께 발생하지만 change 이벤트를 enter키 혹은 포커스가 벗어났을 때 발생

[참고](https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element)

---

# text area 값
 - text area.value

---
