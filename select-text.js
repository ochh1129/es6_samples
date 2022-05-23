const paragraph = document.querySelector('.paragraph');

paragraph.addEventListener('selectstart', textSelectHandler);

function textSelectHandler(event) {
    paragraph.addEventListener('mouseup', (event) => {
        const selectText = window.getSelection().toString();
console.warn('selectText', selectText);        
    });
}