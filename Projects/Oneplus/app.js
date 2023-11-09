const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animation-played')) {
            entry.target.classList.add('show');
            entry.target.classList.add('animation-played');

            setTimeout(() => {
                entry.target.classList.remove('show');
            }, infinite);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// let lastScrollTop = 0;
// const navbar = document.getElementById('nav-menu');

// window.addEventListener("scroll", function () {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         navbar.style.top = "-80px";
//     } else {
//         navbar.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// });


