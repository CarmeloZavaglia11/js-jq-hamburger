var hamb = $('.header-right>a>.fa-bars');
var cross = $('.hamburger-menu>a>.fa-times');
var hambMenu = $('.hamburger-menu');

hamb.click(function(){
    hambMenu.fadeIn(500);
}
);

cross.click(function(){
    hambMenu.fadeOut(500);
}
);