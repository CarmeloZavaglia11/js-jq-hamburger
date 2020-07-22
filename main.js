var hamb = $('.fa-bars');
var cross = $('.fa-times');
var hambMenu = $('.hamburger-menu');

hamb.click(function(){
    hambMenu.fadeIn(500);
}
);

cross.click(function(){
    hambMenu.fadeOut(500);
}
);