const targetEl = document.querySelector('.full');

targetEl.addEventListener('dblclick', toggleScreen);

function toggleScreen(event) {
    const el = event.target;

    if (!document.fullscreenElement) {
        el.requestFullscreen().catch(err => {
console.warn(err.name, err.message);
        })
    }
    else {
        document.exitFullscreen();
    }
}