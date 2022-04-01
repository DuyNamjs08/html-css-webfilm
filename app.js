$(document).ready(function () {
    $('.ndmotkhoi').slideUp();
    $('.motkhoi h3').click(function (e) {
        // $('.ndmotkhoi').slideUp(); 
        $(this).next().slideToggle()
        $(this).toggleClass('xanh');
    });
});