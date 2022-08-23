"use strict";

// Handlbears partial & compiler
Handlebars.registerPartial(
    'skillsBullet',
    '<ul class="icon-carousel-container list-none m-0 p-0">{{#each skills}}<li class="icon-container float-left overflow-hidden"><div class="icon w-[75px] h-[85px] box-border m-0"><i class="block my-0 mx-auto bg-[url("{{icon}}")] bg-contain bg-no-repeat bg-center h-[45px] w-10"></i><span class="block font-sans text-xs text-center mt-2.5">{{name}}</span></div></li>{{/each}}</ul>'
);
$('#skills-container').append(Handlebars.compile($('#skills-template').html())(mySkills));

class IconCarousel {
    constructor(scrollerTarget) {
        this.scrollerTarget = scrollerTarget;
        this._init = () => {
            // set container width
            this._setContainerWidth();
            // listen for click on arrow controls
            this.scrollerTarget.find(" .carousel-control > i").on("click", (e) => {
                this._slide(this._getScrollDirection(e), this._getScrollWidth(1));
            });
            // listen for swipes
            this._swipeControl();
            // listen for window resize and recalculate visible
            jQuery(window).on("resize", (e) => {
                // calculate scroll visible
                this.scrollVisible = this._setScrollVisible();
                // show all
                this._disableScrollIcons([]);
            });
        };
        this._slide = (direction, scrollValue) => {
            // calculate scroll value
            let scrollLeft = this._getScrollValue(direction, scrollValue);
            // prevent overscrolling
            if ((direction === "+" && scrollLeft < this.maxScrollPosition) ||
                (direction === "-" && scrollLeft >= 0)) {
                this.scrollPosition = scrollLeft;
            }
            // toggle scroll icons
            if (this.scrollPosition == 0) {
                this._disableScrollIcons(["left"]);
            }
            else if (scrollLeft >= this.scrollVisible) {
                this._disableScrollIcons(["right"]);
            }
            else {
                // show all
                this._disableScrollIcons([]);
            }
            // move carousel
            this.scroller.animate({ scrollLeft: scrollLeft });
        };
        // disable scroll buttons
        this._disableScrollIcons = (direction) => {
            if (direction.length === 0) {
                this.controlLeft.css("opacity", "1");
                this.controlRight.css("opacity", "1");
            }
            else {
                // disable carousel navigation
                for (let i = 0, len = direction.length; i < len; i++) {
                    if (direction[i] === "left") {
                        this.controlLeft.css("opacity", "0.4");
                    }
                    if (direction[i] === "right") {
                        this.controlRight.css("opacity", "0.4");
                    }
                }
            }
        };
        // get max scroll position
        this._getMaxScroll = () => {
            return this.container.find(".icon-container").length * this.cardWidth;
        };
        // get scroll value by card
        this._getScrollWidth = (scrollCards) => {
            return this.cardWidth * scrollCards;
        };
        // get scroll direction
        this._getScrollDirection = (e) => {
            return e.currentTarget.className.indexOf("right") > -1 ? "+" : "-";
        };
        // get total scroll value
        this._getScrollValue = (direction, scrollValue) => {
            return direction === "+"
                ? scrollValue + this.scrollPosition
                : this.scrollPosition - scrollValue;
        };
        // set container width
        this._setContainerWidth = () => {
            this.container.css("width", this.maxScrollPosition);
        };
        // get visible tiles
        this._setScrollVisible = () => {
            return this.maxScrollPosition - this.scroller.outerWidth(true);
        };
        // controls the touch swipe event
        this._swipeControl = () => {
            let startx = 0;
            let direction = "";
            this.container.on("touchstart", (e) => {
                startx = parseInt(e.originalEvent.changedTouches[0].clientX);
                //e.preventDefault();
            });
            this.container.on("touchmove", (e) => {
                var touchobj = e.originalEvent.changedTouches[0];
                direction = touchobj.clientX < startx ? "left" : "right";
            });
            this.container.on("touchend", (e) => {
                if (direction == "left") {
                    this._slide("+", this._getScrollWidth(1));
                }
                else if (direction == "right") {
                    this._slide("-", this._getScrollWidth(1));
                }
                // clear direction
                direction = "";
            });
        };
        // elements
        this.scrollerTarget = jQuery(scrollerTarget);
        this.scroller = this.scrollerTarget.find(".icon-carousel-outer");
        this.container = this.scrollerTarget.find(".icon-carousel-container");
        this.controlLeft = this.scrollerTarget.find(".carousel-control > i.left");
        this.controlRight = this.scrollerTarget.find(".carousel-control > i.right");
        // scrolling
        this.cardWidth = this.container.find(".icon-container").outerWidth(true);
        this.scrollPosition = 0;
        this.maxScrollPosition = this._getMaxScroll();
        this.scrollVisible = this._setScrollVisible();
        // init
        this._init();
    }
}
var skillsIconCarousel = new IconCarousel("#skills-icon-carousel");