const themeDark = 'theme-dark';
const colorScheme = '(prefers-color-scheme: dark)';

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.matchMedia && window.matchMedia(colorScheme).matches) {
        document.body.classList.add(themeDark);
    }
});

const themeChangeButton = document.querySelector('.theme-change-button');

themeChangeButton.addEventListener('click', () => {
    document.body.classList.toggle(themeDark);
});