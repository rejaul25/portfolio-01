
// this is for autotype text

let typed = new Typed(".autotype-text", {
    strings: ["REJAUL", "DESIGNER", "DEVELOPER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true

})


// function changingbg() {
//     let navbar = document.getElementById('navbar');
//     let scrollvalue = window.scrollY;
//     if (scrollvalue < 150) {
//         navbar.classList.remove('head-color');
//     } else {
//         navbar.classList.add('head-color');
//     }
// }

// window.addEventListener('scroll', changingbg)


// .......faq section

$(document).ready(function () {

    $(".faq-question").on("click", function () {
        var $faqItem = $(this).closest(".faq-box");
        var $faqAnswer = $faqItem.find(".faq-drop");

        if ($faqAnswer.is(":hidden")) {
            $faqAnswer.slideDown("slow");
        } else {
            $faqAnswer.slideUp("slow");
        }
    });

    // menubar-slide-height

    $(".menu").click(function () {
        $(".menubar").animate({
            height: 'toggle',
              width: 'toggle'

        } ,500);
    });



});