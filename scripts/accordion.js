$(document).ready(function(){

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
            }, 500); // Set the threshold for hover time
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