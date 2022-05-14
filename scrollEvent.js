document.addEventListener("scroll", scrollHandler);

window.addEventListener("load", function() {
    document.querySelector('.progressBar').style.width = `0%`;

    const secAnchors = document.querySelectorAll('.secAnchor');

    secAnchors.forEach((el) => {
        el.addEventListener("click", (event) => {
            const scrollHeight = document.querySelector('.content').scrollHeight;
            const pageYSize = window.innerHeight;
            const target = event.target;

            window.scrollTo(0, target.offsetTop - (scrollHeight - window.innerHeight));
        });
    });
});

function scrollHandler(event) {
    const scrollHeight = document.querySelector('.content').scrollHeight;
    const pageYSize = window.innerHeight;
    const currentScrollPercentage = window.scrollY / (scrollHeight - pageYSize);

    document.querySelector('.progressBar').style.width = `${currentScrollPercentage * 100}%`;
}