const loopItem = document.querySelector('.loopItem');

let degree = 0;

loop();

function loop(...param) {
// console.warn("param", param);
    const rotation = (degree * Math.PI) / 100;

    const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
    const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;

    loopItem.style.left = `${targetX}px`;
    loopItem.style.top = `${targetY}px`;

    degree += 10;
    // degree += 1;

    requestAnimationFrame(loop);
}