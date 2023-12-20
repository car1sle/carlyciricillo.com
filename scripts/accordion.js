$(document).ready(function(){

$(".accordion-title").click(function(){

    $(this).toggleClass('border-b');
    $(this).next().toggleClass('border-b');
    $(this).next().toggleClass('hidden');
    $(this).children().children('svg').toggleClass('rotate-180');
    $(this).children('h2').toggleClass('font-bold');

})

});