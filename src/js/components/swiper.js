import Swiper from "swiper/swiper-bundle.js";

// swiper init
export default function initSwiper() {
    var bannerCarousel = new Swiper(".banner-carousel", {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        autoplay: true,
        effect: 'fade',
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var partnersCarousle = new Swiper(".partners-carousel", {
        slidesPerView: 2,
        spaceBetween: 25,
        speed: 2000,
        loop: true,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 7,
            },
        },
    });

    var productCarousel = new Swiper(".product-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    var blogCarousel = new Swiper(".blog-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });



    const carousell = document.querySelector('.details-carousel ')

    if (carousell) {
        const numberOfSlides = carousell.querySelectorAll('.swiper-slide').length;

        if (numberOfSlides < 5) {
            carousell.classList.add('disabled')
        }
    }


    const carousel = document.querySelector('.contact-carousel ')

    if (carousel) {
        const numberOfSlides = carousel.querySelectorAll('.swiper-slide').length;

        if (numberOfSlides < 2) {
            carousel.classList.add('disabled')
        }
    }

    let nothing = () => { }

    let something = () => {
        var contactCarousel = new Swiper(".contact-carousel", {
            slidesPerView: 1,
            spaceBetween: 150,
            speed: 1450,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        let options = {};

        if (document.querySelectorAll('.details-carousel .swiper-slide').length < 5) {
            options = {
                slidesPerView: 1,
                spaceBetween: 50,
                speed: 450,
                watchOverflow: true,
                loop: false,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        } else {
            options = {
                slidesPerView: 1,
                spaceBetween: 50,
                speed: 450,
                watchOverflow: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }


        var detailsCarousel = new Swiper('.details-carousel', options)

        something = nothing
    }

    const triggers = document.querySelectorAll('.tabset li a[href="#tab04"]')

    for (const trigger of triggers) {
        trigger.addEventListener('click', () => {
            setTimeout(() => {
                something()
            }, 300);
        })
    }

}

