$(function(){

// Toggle mobile menu with hamburger button
$('button#mobile-menu-button').click(function(){
    $('#mobile-menu').toggleClass('hidden')
    $('svg#mobile-menu-button-closed', this).toggleClass('hidden')
    $('svg#mobile-menu-button-open', this).toggleClass('hidden')
})

// Toggle mobile menu dropdown
$('button#mobile-menu-dropdown-button').click(function(){
    $('#mobile-menu-dropdown').toggleClass('hidden')
    $(this).toggleClass('bg-background-menu-dropdown')
    $('svg#chevron-closed', this).toggleClass('hidden')
    $('svg#chevron-open', this).toggleClass('hidden')
})

// Hide mobile menu when clicking elsewhere
$(document).on("click", function(event){
    if(!$(event.target).closest("nav").length){
        $('#mobile-menu').addClass('hidden')
        $('svg#mobile-menu-button-open').addClass('hidden')
        $('svg#mobile-menu-button-closed').removeClass('hidden')
    }
})

})