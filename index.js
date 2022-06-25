$(function(){

// Toggle mobile menu
$('button#mobile-menu-button').click(function(){
    $('#mobile-menu').toggleClass('hidden')
    $('svg#mobile-menu-button-closed', this).toggleClass('hidden')
    $('svg#mobile-menu-button-open', this).toggleClass('hidden')
})

// Toggle mobile menu dropdown
$('button#mobile-menu-dropdown-button').click(function(){
    $('#mobile-menu-dropdown').toggleClass('hidden')
    $(this).toggleClass('bg-background-menu-dropdown')
})

})