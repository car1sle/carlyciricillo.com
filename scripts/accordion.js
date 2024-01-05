$(document).ready(function(){

const contentIsOpen = (that) => {
    return that.hasClass('open') === true ? true : false;
}

const contentIsHidden = (that) => {
    return that.children('.sliding-text-container').is(':visible') ?  false : true;
}

$('.accordion-title').hover(
    function() {
        if (!contentIsOpen($(this)) && !contentIsHidden($(this))) {
            $(this).find('div.sliding-text-1').animate({
                bottom: '100%'
            }, 350);
        }
    },function() {
        if (!contentIsOpen($(this)) && !contentIsHidden($(this))) {
            $(this).find('div.sliding-text-1').animate({
                bottom: '0%'
            }, 350);
        }
    }
    );
    $('.accordion-title').hover(
    function() {
        if (!contentIsOpen($(this)) && !contentIsHidden($(this))) {
            $(this).find('div.sliding-text-2').animate({
                bottom: '0%'
            }, 350);
        }
    },function() {
        if (!contentIsOpen($(this)) && !contentIsHidden($(this))) {
            $(this).find('div.sliding-text-2').animate({
                bottom: '-100%'
            }, 350);
        }
    }
);

$(".accordion-title").click(function(){

    const accordionTitle = $(this);
    const accordionContent = $(this).next();
    const accordionSiblingContents = $(this).parent().siblings();

    // show/hide the clicked content
    if (accordionContent.hasClass('slidden-down')) {
        accordionContent.slideUp(250);
        accordionContent.removeClass('slidden-down');
    } else {
        accordionContent.slideDown(250);
        accordionContent.addClass('slidden-down');
    }

    // update borders & arrow
    accordionContent.toggleClass('border-b');
    accordionTitle.toggleClass('border-b');
    accordionTitle.children().children('svg.arrow').toggleClass('rotate-180');

    // hide all other accordion-contents
    accordionSiblingContents.children('.slidden-down').slideUp(250);
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
            }, 350);
            accordionSiblingContents.find('.sliding-text-2').animate({
                bottom: '-100%'
            }, 350);
        }
    }

})

});