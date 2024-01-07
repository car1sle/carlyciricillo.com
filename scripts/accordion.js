const emailExamples = {
    "examples": [
        {
            "clientName": "Saks Off 5th",
            "logoImg": "../img/client-logos/S05.png",
            "headline1": "Sent <b>~60k+ emails/day</b> with Wunderkind in 2023<sup>1</sup>",
            "headline2" : "<b>Spotlight</b>: Personalized loyalty modules with Merkle",
            "paragraph": `Since relaunching their loyalty program with Wunderkind in 2023, Saks has cited <a href="https://www.wunderkind.co/resources/case-studies/saks-off-5th/" target="_blank">2x revenue from triggered programs</a>. This email brings site visitors back to their abandoned shopping category, and integrates a personalized loyalty module to encourage spending with points. I was the lead email engineer on this program pilot with Saks, working with the PM to productize the way loyalty data is passed and displayed.`,
            "webview1": "../html-emails/Saks_CategoryLoyalty_December2023.html",
            "webview1Copy": "See it online",
            "webview2": "",
            "webview2Copy": "",
            "img1": "../html-emails/figma-renders/Saks_CategoryLoyalty_Mobile.png",
            "img2": "../html-emails/figma-renders/Saks_CategoryLoyalty_Tablet.png"
        },
        {
            "clientName": "Sonos",
            "logoImg": "../img/client-logos/Sonos.png",
            "headline1": "Sent <b>~10k+ U.S. emails/day</b> with Wunderkind in 2023<sup>1</sup>",
            "headline2" : "<b>Spotlight</b>: Triggered abandonment sends with AMPscript personalization",
            "paragraph": `Wunderkind's triggered emails help Sonos <a href="https://www.wunderkind.co/resources/case-studies/sonos/" target="_blank">solve high onsite abandonment rates by highlighting product quality over discounts</a>. Only returning customers are shown an incentivization, to upgrade previous purchases. I led email development for a sequence of dynamic Sonos campaigns running across 22 geos, featuring live text, mobile responsiveness and dark mode media queries for supporting open environments.`,
            "webview1": "../html-emails/Sonos_CartAbandon_January2023.html",
            "webview1Copy": "Cart abandonment",
            "webview2": "../html-emails/Sonos_BackInStock_September2022.html",
            "webview2Copy": "Back in stock",
            "img1": "../html-emails/figma-renders/Sonos_BackInStock_Mobile.png",
            "img2": "../html-emails/figma-renders/Sonos_CartAbandon_Desktop.png"
        }
    ]
};

$(document).ready(function(){

    Handlebars.registerPartial(
        'emailExamples',
        `{{#each examples}}
        <div class="bg-background-dropdown first:rounded-t-radius-nav mb-4 drop-shadow-md">
            <button class="accordion-title relative flex items-center w-full text-left group px-6 h-[80px] border-b cursor-pointer border-[#b8b8b8] hover:bg-text-base/5 transition-[border]">
                <div>
                <div class="w-[120px]">
                    <img src="{{ logoImg }}" alt="{{{ clientName }}}" class="max-h-[35px] min-h-0 max-w-[85px] min-w-0" />
                </div>
                </div>
                <div class="sliding-text-container hidden overflow-hidden static min-h-0 w-0 md:block md:relative md:min-h-[23px] md:w-full">
                <div class="sliding-text-1 absolute bottom-[0%]">
                    <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    <div class="text-[15px]">{{{ headline1 }}}</div>
                    </div>
                </div>
                <div class="sliding-text-2 absolute bottom-[-100%]">
                    <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <div class="text-[15px]">{{{ headline2 }}}</div>
                    </div>
                </div>
                </div>
                <span class="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-5 h-5 arrow">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
            <div class="accordion-content hidden overflow-hidden px-6 pt-3 pb-7 border-icon-base">
            <p class="mb-2 leading-7">{{{ paragraph }}}</p>
            <div>
                <a href="{{ webview1 }}" target="_blank" target="_blank" class="text-text-base inline-flex items-center gap-1 group mb-2">
                    <p class="leading-7 group-hover:underline">{{{ webview1Copy }}}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24"><path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path></svg>
                </a>
            </div>
            {{#if webview2}}
            <div>
                <a href="{{ webview2 }}" target="_blank" target="_blank" class="text-text-base inline-flex items-center gap-1 group mb-2">
                    <p class="leading-7 group-hover:underline">{{{ webview2Copy }}}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24"><path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path></svg>
                </a>
            </div>
            {{/if}}
            <div class="mt-8 flex justify-around items-start gap-2.5">
                <img src="{{ img1 }}" class="max-w-[230px] h-auto object-contain shrink min-w-0" />
                <img src="{{ img2 }}" class="max-w-[430px] h-auto object-contain shrink min-w-0" />
            </div>
            </div>
        </div>
        {{/each}}`
    );

    ($('#html-examples-container').length > 0) && $('#html-examples-container').append(Handlebars.compile($('#html-examples-template').html())(emailExamples));

const contentIsOpen = (that) => {
    return that.hasClass('open') === true ? true : false;
}

const contentIsHidden = (that) => {
    return that.children('.sliding-text-container').is(':visible') ?  false : true;
}

let hoverTimer;

$('.accordion-title').hover(
    function() {
        if (!contentIsOpen($(this)) && !contentIsHidden($(this))) {
            hoverTimer = setTimeout(() => {
                $(this).find('div.sliding-text-1').animate({
                    bottom: '100%'
                }, 300);
                $(this).find('div.sliding-text-2').animate({
                    bottom: '0%'
                }, 300);
            }, 300); // Set the threshold for hover time
        }
    },
    function() {
        clearTimeout(hoverTimer); // Clear the timer if leaving before 2 seconds
        if (!contentIsOpen($(this)) && !contentIsHidden($(this))) {
            $(this).find('div.sliding-text-1').animate({
                bottom: '0%'
            }, 300);
            $(this).find('div.sliding-text-2').animate({
                bottom: '-100%'
            }, 300);
        }
    }
);

$(".accordion-title").click(function(){

    const accordionTitle = $(this);
    const accordionContent = $(this).next();
    const accordionSiblingContents = $(this).parent().siblings();

    // show/hide the clicked content
    if (accordionContent.hasClass('slidden-down')) {
        accordionContent.slideUp(350);
        accordionContent.removeClass('slidden-down');
    } else {
        accordionContent.slideDown(350);
        accordionContent.addClass('slidden-down');
    }

    // update borders & arrow
    accordionContent.toggleClass('border-b');
    accordionTitle.toggleClass('border-b');
    accordionTitle.children().children('svg.arrow').toggleClass('rotate-180');

    // hide all other accordion-contents
    accordionSiblingContents.children('.slidden-down').slideUp(350);
    accordionSiblingContents.children('.slidden-down').removeClass('slidden-down');
    accordionSiblingContents.children('.accordion-title').addClass('border-b');
    accordionSiblingContents.children('.accordion-content').removeClass('border-b');
    accordionSiblingContents.children().find('svg.arrow.rotate-180').removeClass('rotate-180');

    if (!$(this).children('.sliding-text-container:hidden').hasClass('hidden')) {
        // for disabling hover animations on click
        accordionTitle.toggleClass('open');
        // put back sliding-text-1
        accordionSiblingContents.children('.accordion-title').removeClass('open');
        if (accordionSiblingContents.find('.sliding-text-1').css('bottom') === '23px') {
            accordionSiblingContents.find('.sliding-text-1').animate({
                bottom: '0%'
            }, 300);
            accordionSiblingContents.find('.sliding-text-2').animate({
                bottom: '-100%'
            }, 300);
        }
    }

})

});