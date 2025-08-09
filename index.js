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
    `<ul class="hidden bg-background-dropdown list-none m-0 p-0" id="mobile-menu-dropdown">
        {{#each pages}}
        <li class="block text-lg leading-none last-of-type:pb-1 border-t-2 border-text-base/10">
            <a href="{{ ../path }}{{ fileName }}" class="block py-3.5 pl-8">{{ name }}{{#if currentPage}}&nbsp;<span class="text-icon-accent">&#x25cf;</span>{{/if}}</a>
        </li>
        {{/each}}
    </ul>`
);

Handlebars.registerPartial(
    'desktopDropBullet',
    `<ul class="bg-background-dropdown w-[150px] m-0 group-hover:mt-1.5 rounded-radius-nav list-none overflow-hidden">
        {{#each pages}}
        <li class="text-base leading-none block text-right border-t-2 border-text-base/10 first-of-type:border-0 hover:bg-text-base/10 hover:border-background-dropdown">
            <a href="{{ ../path }}{{ fileName }}" class="block pr-4 leading-[45px] align-middle">{{#if currentPage }}<span class="text-icon-accent">&#x25cf;</span>&nbsp;{{/if}}{{ name }}</a>
        </li>
        {{/each}}
    </ul>`
);

Handlebars.registerPartial(
    'footer',
    `<footer class="w-11/12 mx-auto mt-20 mb-8">
        <p class="text-sm pt-3 border-t-[1px] border-text-base">&#169; Copyright 2025 Carly Ciricillo</p>
        <ul class="flex list-none my-3">
            {{#each icons}}
            <li class="pr-4">
                <a target="_blank" href="{{ url }}">
                    <img width="25" src="{{ img }}" alt="{{ alt }}">
                </a>
            </li>
            {{/each}}
        </ul>
    </footer>`
);

Handlebars.registerPartial(
    'skills',
    `{{#each skills}}
    <li class="icon-container float-left overflow-hidden">
        <div class="icon w-[65px] sm:w-[75px] h-[85px] box-border m-0">
            <div class="h-11 flex justify-center items-center">
                <img class="block my-0 mx-auto max-w-[32px] sm:max-w-[44px] max-h-8 sm:max-h-11" src="./img/{{ icon }}" alt="{{ label }}" />
            </div>
            <span class="block text-[10px] sm:text-xs text-center mt-2 sm:mt-4">{{ label }}</span>
        </div>
    </li>
    {{/each}}`
);

Handlebars.registerPartial(
    'creds',
    `{{#each creds}}
    <li class="basis-[48%] xs:basis-[45%] lg:basis-[24%] shrink bg-[#ffffff] border border-[#d4d4d4] rounded-radius-card shadow-[0_17px_10px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_37px_20px_-20px_rgba(0,0,0,0.3)] hover:translate-x-0 hover:-translate-y-[10px] ease-in-out duration-300">
        <a href="{{ url }}" target="_blank" class="text-text-base">
            <div class="text-center my-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto mb-2 stroke-icon-base">{{{ icon }}}</svg>
                <span class="text-xs">{{ copy1 }}</span><br><b class="text-sm xs:text-base">{{ copy2 }}</b><br><span class="text-xs xs:text-sm">{{ copy3 }}</span><br><i class="text-text-small text-xs">{{ copy4 }}</i>
            </div>
        </a>
    </li>
    {{/each}}`
);

// Handlebars compilers
($('#dropdown-container').length > 0) && $('#dropdown-container').append(Handlebars.compile($('#dropdown-template').html())(dropdownPages));
($('#dropdown-container-mobile').length > 0) && $('#dropdown-container-mobile').append(Handlebars.compile($('#dropdown-template-mobile').html())(dropdownPages));
($('#footer-container').length > 0) && $('#footer-container').append(Handlebars.compile($('#footer-template').html())(socialIcons));
($('#skills-container').length > 0) && $('#skills-container').append(Handlebars.compile($('#skills-template').html())(mySkills));
($('#creds-container').length > 0) && $('#creds-container').append(Handlebars.compile($('#creds-template').html())(myCreds));

});