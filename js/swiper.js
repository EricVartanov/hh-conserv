const swiper = new Swiper(".idc-swiper", {
    // Default parameters
    loop: false,
    direction: "horizontal",
    grabCursor: true,

    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
    pagination: {
        el: ".idc-swiper-pagination",
        type: "bullets",
    },
});
