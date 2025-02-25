
    document.addEventListener("DOMContentLoaded", function() {
        var swiper = new Swiper(".swiper", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                slideChangeTransitionEnd: function () {
                    let activeSlide = document.querySelector(".swiper-slide-active");
                    if (activeSlide) {
                        let bgColor = activeSlide.getAttribute("data-bg");
                        if (bgColor) {
                            document.body.style.backgroundColor = bgColor;
                        }
                    }
                }
            }
        });
        
        // Set initial background color
        setTimeout(() => {
            let initialSlide = document.querySelector(".swiper-slide-active");
            if (initialSlide) {
                let initialColor = initialSlide.getAttribute("data-bg");
                if (initialColor) {
                    document.body.style.backgroundColor = initialColor;
                }
            }
        }, 100);
    });

