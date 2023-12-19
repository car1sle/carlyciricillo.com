$(document).ready(function(){

$("#accordion-title").click(function(){

    $(this).next().toggleClass('hidden');
    $(this).children().children('svg').toggleClass('rotate-180');

})

});