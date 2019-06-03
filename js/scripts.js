/* -------------------------------------------------------- */
/*                     Switch Navbar                        */
/* -------------------------------------------------------- */

$(function () {
    var height = document.getElementById('homepage').offsetHeight;

    $(window).scroll(function () {
        if ($(window).scrollTop() > (height-50)) {
            $('.nav').addClass('nav-color');
            $('.main-menu ul li a').addClass('colorWhite');
        }

        else {
            $('.nav').removeClass('nav-color');
            $('.main-menu ul li a').removeClass('colorWhite');
        }



        if ($(window).scrollTop() > (height-80)) {
            $('#line').addClass('line-nos-services');
            $('#line').removeClass('line');
        }

        else {
            $('#line').removeClass('line-nos-services');
            $('#line').addClass('line');
        }



        if ($(window).scrollTop() > (2 * height - 80)) {
            $('#line').addClass('line-portfolio');
            $('#line').removeClass('line-nos-services');
        }

        else {
            $('#line').removeClass('line-portfolio');
        }



        if ($(window).scrollTop() > (3 * height - 80)) {
            $('#line').addClass('line-a-propos');
            $('#line').removeClass('line-portfolio');
        }

        else {
            $('#line').removeClass('line-a-propos');
        }



        if ($(window).scrollTop() > (4 * height - 80)) {
            $('#line').addClass('line-contact');
            $('#line').removeClass('line-a-propos');
        }

        else {
            $('#line').removeClass('line-contact');
        }

    });
})


/* -------------------------------------------------------- */
/*                    Active On Scroll                      */
/* -------------------------------------------------------- */



$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.main-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-menu ul a').removeClass("active");
            currLink.addClass("active");
            console.log(refElement.position().top);
        }
        else {
            currLink.removeClass("active");
        }
    });
}




/* -------------------------------------------------------- */
/*                     VIDEO LIGHTBOX                       */
/* -------------------------------------------------------- */


window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    // window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }



/* -------------------------------------------------------- */
/*                       Footer YEAR                        */
/* -------------------------------------------------------- */

document.getElementById("year").innerHTML = new Date().getFullYear();