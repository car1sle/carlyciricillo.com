$(document).ready(function(){

// Toggle mobile menu with hamburger button
$('#mobile-menu-button').click(function(){
    $('#mobile-menu').toggleClass('hidden');
    $('svg#mobile-menu-button-closed').toggleClass('hidden');
    $('svg#mobile-menu-button-open').toggleClass('hidden');
})

// Toggle mobile menu dropdown
$('#mobile-menu-dropdown-button').click(function(){
    $('#mobile-menu-dropdown').toggleClass('hidden');
    $(this).toggleClass('bg-background-menu-dropdown');
    $('svg#chevron-closed').toggleClass('hidden');
    $('svg#chevron-open').toggleClass('hidden');
})

// Undrop mobile menu when resizing up
$(window).on('resize', function(){
    if ($(this).width() >= 640 && !$('#mobile-menu-dropdown').hasClass('hidden')){
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-dropdown-button').removeClass('bg-background-menu-dropdown');
        $('svg#chevron-closed').removeClass('hidden');
        $('svg#chevron-open').addClass('hidden');
    }
    if ($(this).width() >= 640 && !$('#mobile-menu').hasClass('hidden')){
        $('#mobile-menu').addClass('hidden');
        $('svg#mobile-menu-button-closed').removeClass('hidden');
        $('svg#mobile-menu-button-open').addClass('hidden');
    }
});

// Hide mobile menu when clicking elsewhere
$(document).on("click", function(event){
    if(!$(event.target).closest("nav").length){
        $('#mobile-menu').addClass('hidden');
        $('svg#mobile-menu-button-open').addClass('hidden');
        $('svg#mobile-menu-button-closed').removeClass('hidden');
    }
})

// If current page, change currentPage key to true
let getEndOfUrl = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
let currPage = getEndOfUrl(window.location.href);
$.each(dropdownPages.pages,function(){
    if (this.fileName === currPage){
        this.currentPage = true;
    }
});

// Create dropdown lists with Handlebars
// TODO: Make function
let compiledDesktopDrop = Handlebars.compile(($('#dropdown-template')[0].innerHTML));
$('#dropdown-container')[0].innerHTML = compiledDesktopDrop(dropdownPages);
let compiledMobileDrop = Handlebars.compile(($('#dropdown-template-mobile')[0].innerHTML));
$('#dropdown-container-mobile')[0].innerHTML = compiledMobileDrop(dropdownPages);

});