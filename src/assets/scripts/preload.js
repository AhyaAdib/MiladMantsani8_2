// import anime from 'animejs'; // Impor Anime.js

// Fungsi untuk menangani perubahan state dokumen
document.onreadystatechange = function () {
    const state = document.readyState;

    if (state === 'complete') {
        setTimeout(() => {
            // Sembunyikan preloader
            const loadElement = document.getElementById('load');
            const hideHeadElement = document.getElementById('hidehead');

            if (loadElement) {
                loadElement.style.opacity = 0;
                loadElement.style.visibility = 'hidden';
            }

            if (hideHeadElement) {
                hideHeadElement.style.visibility = 'visible';
            }
        }, 5800); // Durasi preloader
    }
};

// // Anime.js timeline untuk animasi preload
// anime.timeline({ loop: false })
//     .add({
//         targets: '.loadalla .word',
//         scale: [3, 1],
//         opacity: [0, 1],
//         easing: "easeOutCirc",
//         duration: 800,
//         delay: (el, i) => 800 * i
//     }).add({
//         targets: '.loadalla',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     });