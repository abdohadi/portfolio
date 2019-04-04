const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.nav-item');

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        // set menu state
        showMenu = false;
    }
}

// footer position
$('main').css({ minHeight: $(window).height() - $('footer').height() });

// manage menu 
$('.menu-items').css({
    marginTop: ($('.menu-nav').height() / 2) - ($('.menu-items').height() / 2)
});
$('.nav-link').css({
    marginRight: ($('.menu-nav').width()) - ($('.nav-item').width())
});
$('.portrait').css({
    marginTop: ($('.menu-branding').height() / 2) - ($('.portrait').height() / 2)
});
$(window).on('resize', function () {
    $('.menu-items').css({
        marginTop: ($('.menu-nav').height() / 2) - ($('.menu-items').height() / 2)
    });
    $('.portrait').css({
        marginTop: ($('.menu-branding').height() / 2) - ($('.portrait').height() / 2)
    });
});

// show menu items with delay
$('.menu-btn').on('click', function () {
    var i = 1;
    $('.menu-items .show').each(function () {
        $(this).animate({
            marginLeft: 0
        }, i * 200);
        i++;
    });
});
$('.menu-btn').on('click', function () {
    if (!$(this).hasClass('close')) {
        $('.nav-item').css('margin-left', '500px');
    }
});