var hamb = $('.header-right>a>i');
var cross = $('.hamburger-menu>a>i');
var hambMenu = $('.hamburger-menu');

hamb.click(function(){
    hambMenu.fadeIn(500);
}
);

cross.click(function(){
    hambMenu.fadeOut(500);
}
);