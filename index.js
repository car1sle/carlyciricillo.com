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
    $(this).toggleClass('bg-background-dropdown');
    $('svg#chevron-closed').toggleClass('hidden');
    $('svg#chevron-open').toggleClass('hidden');
})

// Undrop mobile menu when resizing up
$(window).on('resize', function(){
    if ($(this).width() >= 640 && !$('#mobile-menu').hasClass('hidden')){
        $('#mobile-menu').addClass('hidden');
        $('svg#mobile-menu-button-closed').removeClass('hidden');
        $('svg#mobile-menu-button-open').addClass('hidden');
    }
    if ($(this).width() >= 640 && !$('#mobile-menu-dropdown').hasClass('hidden')){
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-dropdown-button').removeClass('bg-background-dropdown');
        $('svg#chevron-closed').removeClass('hidden');
        $('svg#chevron-open').addClass('hidden');
    }
});

// Hide mobile menu when clicking elsewhere
$(document).on('click', function(event){
    if(!$(event.target).closest("nav").length){
        $('#mobile-menu').addClass('hidden');
        $('svg#mobile-menu-button-closed').removeClass('hidden');
        $('svg#mobile-menu-button-open').addClass('hidden');
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-dropdown-button').removeClass('bg-background-dropdown');
        $('svg#chevron-closed').removeClass('hidden');
        $('svg#chevron-open').addClass('hidden');
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

// Handlebars partials
Handlebars.registerPartial(
    'mobileDropBullet',
    '<ul class="hidden bg-background-dropdown list-none m-0 p-0" id="mobile-menu-dropdown">{{#each pages}}<li class="block font-sans text-lg leading-none last-of-type:pb-1 border-t-2 border-icon-header-base/40"><a href="{{ ../path }}{{ fileName }}" class="text-text-base block py-3.5 pl-8">{{ name }}{{#if currentPage}}&nbsp;<span class="text-icon-accent">&#x25cf;</span>{{/if}}</a></li>{{/each}}</ul>'
);

Handlebars.registerPartial(
    'desktopDropBullet',
    '<ul class="bg-background-dropdown w-[150px] m-0 group-hover:mt-1.5 rounded-radius-nav list-none overflow-hidden">{{#each pages}}<li class="font-sans text-base leading-none block text-right border-t-2 border-icon-header-base/40 first-of-type:border-0 hover:bg-icon-header-base/40 hover:border-background-dropdown"><a href="{{ ../path }}{{ fileName }}" class="block pr-4 leading-[45px] align-middle text-text-base hover:text-text-header-hover">{{#if currentPage }}<span class="text-icon-accent">&#x25cf;</span>&nbsp;{{/if}}{{ name }}</a></li>{{/each}}</ul>'
);

Handlebars.registerPartial(
    'footer',
    '<footer class="w-11/12 mx-auto my-8"><p class="text-sm pt-3 border-t-[1px]">&#169; Copyright 2022 Carly Ciricillo</p><ul class="flex list-none my-3">{{#each icons}}<li class="pr-4"><a target="_blank" href="{{ url }}"><img width="25" src="{{ img }}" alt="{{ alt }}"></a></li>{{/each}}</ul></footer>'
);

// Handlebars compilers
$('#dropdown-container').append(Handlebars.compile($('#dropdown-template').html())(dropdownPages));
$('#dropdown-container-mobile').append(Handlebars.compile($('#dropdown-template-mobile').html())(dropdownPages));
$('#footer-container').append(Handlebars.compile($('#footer-template').html())(socialIcons));

});