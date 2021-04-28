$(function() {
    $('#main_navbar').bootnavbar();
    /* ============================ start slider============================ */
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        on: {
            slideChangeTransitionStart: function() {
                $('.special-header').hide(0);
                $('.content').hide(0);
                $('.special-pargraph').hide(0);
                $('.special-buttom').hide(0);
                $('.special-header').removeClass('aos-init').removeClass('aos-animate');
                $('.content').removeClass('aos-init').removeClass('aos-animate');
                $('.special-pargraph').removeClass('aos-init').removeClass('aos-animate');
                $('.special-buttom').removeClass('aos-init').removeClass('aos-animate');
                $('.swiper-slide-next').removeClass('showdiv');
                $('.swiper-slide-prev').removeClass('showdiv');

            },
            slideChangeTransitionEnd: function() {
                $('.special-header').show(0);
                $('.content').show(0);
                $('.special-pargraph').show(0);
                $('.special-buttom').show(0);
                $('.swiper-slide-active').addClass('showdiv');
                AOS.init();
            },
        }
    });
    /* ============================ end slider============================ */
    /* ============================ start AOS============================ */
    AOS.init();
    /* ============================ end Aos============================ */
    /* ============================ start About-us ============================ */
    //create pop with image
    let ourGallery = document.querySelectorAll(".container-img img");
    ourGallery.forEach(img => {
        img.addEventListener("click", (e) => {
            let overlay = document.createElement("div");
            //add class to overlay
            overlay.className = 'popup-overlay';
            //append overlay to body
            document.body.appendChild(overlay);
            //create img in popup box
            let photo = document.createElement("img");
            //add src to phott
            photo.src = img.src;
            //add image to popupbox
            overlay.appendChild(photo);
            //create close span
            let closebutton = document.createElement("span");
            //create span Text
            let closebuttontext = document.createTextNode("x");
            //append text to close button
            closebutton.appendChild(closebuttontext);
            //add class to close buttom
            closebutton.className = 'close-button';
            closebutton.classList.add('text-secondary');
            //add colse button to popup box
            overlay.appendChild(closebutton);
            if (img.alt !== null) {
                //Create heading 
                let imageHeadingo = document.createElement("h5");
                //crate image text
                let imgtxt = document.createTextNode('About Us');
                //add text to heading
                imageHeadingo.appendChild(imgtxt);
                //append the heading to popup box
                imageHeadingo.className = 'footer-popup';
                overlay.appendChild(imageHeadingo);
            }
        });
    });
    //close popup
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains('close-button')) {
            //remove popup
            e.target.parentNode.remove();

        }
    });
    /* ============================ end About-us ============================ */
})