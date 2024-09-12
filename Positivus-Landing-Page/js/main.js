var avif = new Image();
avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
avif.onload = function () {
    if(true){
        // alert('support');
    }else{
        // alert('not');
    }
}

$('.process').on('click', function (){
    $(this).children('.content').slideToggle();
    $(this).toggleClass('open');
    $(this).siblings().removeClass('open');
    $(this).siblings().children('.content').slideUp();
});

$('.testimonials').owlCarousel({
    center: true,
    items:2.3,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z' fill='#000000'/></svg>","<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z' fill='#000000'/></svg>"],
    responsive : {
        300 : {
            items:1,
            center: false,
        },
        550 : {
            items:1.3,
        },
        768 : {
            items:1.5,
        },
        900 : {
            items:2.3,
        },
    },
});

let didScroll; let lastScrollTop = 0; let delta = 5; let navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 0);
function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').fadeOut();        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {

            $('header').fadeIn();
            $('header').addClass('background');
            
            if ($(window).scrollTop() < 50){
                $('header').removeClass('background');
            }
        }
    }
    lastScrollTop = st;
};

$('div.hamburger').click(function(){
    $('header ul').toggleClass('show');
    $(this).children('svg').toggleClass('show');
    $('header .overlay').fadeToggle();
    $('body').toggleClass('not-scroll');
});

function remove (){
    $('svg.hamburger').addClass('show');
    $('svg.cancel').removeClass('show');
    $('header ul').removeClass('show');
    $('header .overlay').fadeOut();
    $('body').removeClass('not-scroll');
}

$('header .overlay').click(function(){
    remove();
});

$("header nav a, .logo-div, .s1 a, .s4 a, footer nav a").click(function(){
    let id=$(this).attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
    remove();
});

$(document).ready(function(){
    $(".anim").each(function () {
        $(this).addClass('on');
    });
});


$(window).scroll(function () {
    $(".scroll").each(function () {
        let position = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

        if (scroll > position - windowHeight + 50) {
            $(this).addClass('on');
        }
    });
});
$(window).trigger('scroll');