(function($) {
    "use strict";
    var $body = $("body"),
        $window = $(window),
        $bgBack = $(".bg-screen .bg-back"),
        $bgShop = $(".bg-screen .bg-shop"),
        $document = $(document);
    $window.on("load", function() {
        var $popup = $("#newslettermodal");
        setTimeout(function () {
            $popup.delay(500).modal("show");
        }, 500);
    });
    var ST = {
        init: function() {
            this.handleModal();
            this.loadPage();
            this.headerSticky();
            this.headerMenu();
            this.mobileMenu();
            this.searchField();
            this.quickView();
            this.cartDrawer();
            this.wishList();
            this.qtyAdjust();
            this.shopContent();
            this.productHorizontal();
            this.productVertical();
            this.productFull();
            this.productFullcut();
            this.productSingle();
            this.productDouble();
            this.productSwipe();
            this.productJs();
            this.productFrequent();
            this.productReview();
            this.productRelated();
            this.productCompare();
            this.blogComment();
            this.aboutJs();
            this.contactJs();
            this.cartPage();
            this.checkOut();
            this.invoiceJs();
            this.paymentJs();
            this.storeJs();
            this.accountSettings();
            this.accountProfile();
            this.accountWishlist();
            this.TicketSettings();
            this.comingSoon();
            this.countDown();
            this.dataBgImg();
            this.imgResize();
            this.videoJs();
            this.resizeScreen();
            this.checkboxBtn();
            this.backTop();
        },
        handleModal: function() {
            function handleModalOpen() {
                if($window.width() >= 1200 && $body.hasClass("modal-open")) {
                    $body.addClass("pe-0");
                }
            }
            $(".modal").on("shown.bs.modal", function() {
                handleModalOpen();
            });
            $(".modal").on("hidden.bs.modal", function() {
                $body.removeClass("pe-0");
            });
            $window.on("resize", function() {
                if($window.width() <= 1200) {
                    $body.removeClass("pe-0");
                }
                handleModalOpen();
            });
        },
        loadPage: function() {
            $body.addClass("is-loading");
            setTimeout(function() {
                $body.removeClass("is-loading");
                $body.addClass("is-loaded");
            }, 500);
        },
        headerSticky: function() {
            $.fn.sticyHeader = function(options) {
                var defaults = {
                    HeaderTarget: $(this),
                    showHeaderTop: ".header-top-area",
                    showHeaderFirst: ".header-top-first",
                    showHeaderBottom: ".header-bottom-area",
                    scrollHeader: 300,
                    customClass: "none",
                    mobileHeader: true
                };
                options = $.extend(defaults, options);
                return this.each(function() {
                    var HeaderTarget = options.HeaderTarget;
                    var showHeaderTop = options.showHeaderTop;
                    var showHeaderFirst = options.showHeaderFirst;
                    var showHeaderBottom = options.showHeaderBottom;
                    var scrollHeader = options.scrollHeader;
                    var customClass = options.customClass;
                    var mobileHeader = options.mobileHeader;
                    var isRefreshed = true;
                    var lastScroll = 0;
                    var isMobile = true;
                    var isResizing = false;
                    // Check if the device is mobile
                    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
                        isMobile = true;
                    }
                    var createSticky = function() {
                        var targetHeight = HeaderTarget.outerHeight();
                        var targetShowTop = HeaderTarget.find(showHeaderTop).outerHeight();
                        var targetShowFirst = HeaderTarget.find(showHeaderFirst).outerHeight();
                        var targetShowBottom = HeaderTarget.find(showHeaderBottom).outerHeight();
                        if($(window).width() >= 1200) {
                            HeaderTarget.addClass("position-fixed top-0 start-0 end-0 z-2");
                        } else {
                            HeaderTarget.addClass("position-fixed top-0 start-0 end-0 z-2");
                        }
                        if(customClass != "none") {
                            HeaderTarget.addClass(customClass);
                        }
                        function updatePaddingTop() {
                            $("body").css({"padding-top": targetHeight});
                        }
                        updatePaddingTop();
                        function stickyHeader() {
                            targetHeight = HeaderTarget.outerHeight(); // Recalculate targetHeight on each scroll
                            targetShowTop = HeaderTarget.find(showHeaderTop).outerHeight();
                            targetShowFirst = HeaderTarget.find(showHeaderFirst).outerHeight();
                            targetShowBottom = HeaderTarget.find(showHeaderBottom).outerHeight();
                            if(isResizing) {
                                if(HeaderTarget.hasClass("sticky")) {
                                    HeaderTarget.css({"transition": "none"});
                                }
                                if(HeaderTarget.hasClass("header-sticky")) {
                                    HeaderTarget.find(showHeaderFirst).css({"transition": "none"});
                                    HeaderTarget.find(showHeaderBottom).css({"transition": "none"});
                                }
                            } else {
                                if($(window).scrollTop() >= scrollHeader) {
                                    HeaderTarget.addClass("sticky");
                                    const cssValue = {"transform": "translateY(-" + targetHeight + "px)"};
                                    if(!isRefreshed) {
                                        cssValue.transition = "transform 0.5s ease";
                                    }
                                    HeaderTarget.css(cssValue);
                                    isRefreshed = false;
                                } else {
                                    HeaderTarget.removeClass("sticky");
                                    HeaderTarget.css({"transform": "translateY(0px)","transition": "transform 0.5s ease"});
                                }
                                // Scroll direction check
                                if($(window).scrollTop() > lastScroll) {
                                    $(".sticky").removeClass("header-sticky"); // Scrolling down
                                    if($(window).width() < 1200) {
                                        if($(window).scrollTop() >= 20) {
                                            HeaderTarget.find(showHeaderFirst).addClass("header-border");
                                        } else {
                                            HeaderTarget.find(showHeaderFirst).removeClass("header-border");
                                        }
                                        HeaderTarget.find(showHeaderFirst).css({"transform": "translateY(0px)","transition": "transform 0.5s ease"});
                                    } else if($(window).width() >= 1200) {
                                        if($(window).scrollTop() >= 20) {
                                            HeaderTarget.find(showHeaderBottom).addClass("header-border");
                                        } else {
                                            HeaderTarget.find(showHeaderBottom).removeClass("header-border");
                                        }
                                        HeaderTarget.find(showHeaderBottom).css({"transform": "translateY(0px)","transition": "transform 0.5s ease"});
                                    }
                                } else if($(window).scrollTop() < lastScroll) {
                                    $(".sticky").addClass("header-sticky"); // Scrolling up
                                    if(HeaderTarget.hasClass("header-sticky")) {
                                        if($(window).width() < 1200) {
                                            const cssValue = {"transform": "translateY(" + targetShowFirst + "px)"};
                                            if (!isRefreshed) {
                                                cssValue.transition = "transform 0.5s ease";
                                            }
                                            HeaderTarget.find(showHeaderFirst).css(cssValue);
                                            isRefreshed = false;
                                        } else if($(window).width() >= 1200) {
                                            const cssValue = {"transform": "translateY(" + targetShowBottom + "px)"};
                                            if (!isRefreshed) {
                                                cssValue.transition = "transform 0.5s ease";
                                            }
                                            HeaderTarget.find(showHeaderBottom).css(cssValue);
                                            isRefreshed = false;
                                        }
                                    }
                                }
                                lastScroll = $(window).scrollTop();
                                if(lastScroll <= scrollHeader) {
                                    $("header").removeClass("header-sticky");
                                    if($(window).width() < 1200) {
                                        if($(window).scrollTop() >= 20) {
                                            HeaderTarget.find(showHeaderFirst).addClass("header-border");
                                        } else {
                                            HeaderTarget.find(showHeaderFirst).removeClass("header-border");
                                        }
                                        HeaderTarget.find(showHeaderFirst).css({"transform": "translateY(0px)","transition": "none"});
                                    } else if($(window).width() >= 1200) {
                                        if($(window).scrollTop() >= 20) {
                                            HeaderTarget.find(showHeaderBottom).addClass("header-border");
                                        } else {
                                            HeaderTarget.find(showHeaderBottom).removeClass("header-border");
                                        }
                                        HeaderTarget.find(showHeaderBottom).css({"transform": "translateY(0px)","transition": "none"});
                                    }
                                }
                            }
                        }
                        stickyHeader();
                        window.onscroll = function() {
                            if($(window).scrollTop() >= scrollHeader) {
                                targetHeight = HeaderTarget.outerHeight(); // Recalculate targetHeight on scroll
                                updatePaddingTop();
                            }
                            stickyHeader();
                        };
                        // Resize event: Set `isResizing` flag during resize to disable transition
                        var resizeTimeout;
                        $(window).on("resize", function() {
                            isResizing = true; // Set flag to indicate that the window is being resized
                            // Immediately set transition to none during resize
                            if($(window).width() < 1200) {
                                if($(window).scrollTop() >= 20) {
                                    HeaderTarget.find(showHeaderFirst).addClass("header-border");
                                    HeaderTarget.find(showHeaderBottom).removeClass("header-border");
                                }
                            } else if($(window).width() >= 1200) {
                                if($(window).scrollTop() >= 20) {
                                    HeaderTarget.find(showHeaderFirst).removeClass("header-border");
                                    HeaderTarget.find(showHeaderBottom).addClass("header-border");
                                }
                            }
                            if(HeaderTarget.hasClass("sticky")) {
                                HeaderTarget.css({"transition": "none"});
                            }
                            if(HeaderTarget.hasClass("header-sticky")) {
                                HeaderTarget.find(showHeaderFirst).css({"transition": "none"});
                                HeaderTarget.find(showHeaderBottom).css({"transition": "none"});
                            }
                            // Recalculate targetHeight and other values during resize
                            targetHeight = HeaderTarget.outerHeight(); // Recalculate targetHeight
                            targetShowFirst = HeaderTarget.find(showHeaderFirst).outerHeight();
                            targetShowBottom = HeaderTarget.find(showHeaderBottom).outerHeight();
                            updatePaddingTop();
                            // Reset scroll position when resizing to prevent unwanted "appear" class triggers
                            lastScroll = $(window).scrollTop(); // Preserve the scroll position after resizing
                            // Clear the previous resize timeout if resizing is still ongoing
                            clearTimeout(resizeTimeout);
                            // Apply the transform value during resize
                            if(HeaderTarget.hasClass("sticky")) {
                                HeaderTarget.css({"transform": "translateY(-" + targetHeight + "px)"});
                            } else {
                                HeaderTarget.css({"transform": "translateY(0px)"}); 
                            }
                            if(HeaderTarget.hasClass("header-sticky")) {
                                if($(window).width() >= 1200) {
                                    HeaderTarget.find(showHeaderFirst).css({"transform": "translateY(0px)"});
                                } else {
                                    HeaderTarget.find(showHeaderFirst).css({"transform": "translateY(" + targetShowFirst + "px)"});
                                }
                                if($(window).width() < 1200) {
                                    HeaderTarget.find(showHeaderBottom).css({"transform": "translateY(0px)"});
                                } else {
                                    HeaderTarget.find(showHeaderBottom).css({"transform": "translateY(" + targetShowBottom + "px)"});
                                }
                            }
                            // Reset transition after resizing completes
                            resizeTimeout = setTimeout(function() {
                                isResizing = false; // Reset the resize flag
                                // Restore transition back to normal after resizing is done
                                if(HeaderTarget.hasClass("sticky")) {
                                    HeaderTarget.css({"transition": "transform 0.5s ease"});
                                }
                                if(HeaderTarget.hasClass("header-sticky")) {
                                    HeaderTarget.find(showHeaderFirst).css({"transition": "transform 0.5s ease"});
                                    HeaderTarget.find(targetShowBottom).css({"transition": "transform 0.5s ease"});
                                }
                            }, 200); // Set timeout to allow resizing to settle
                        });
                    };
                    if(isMobile == true) {
                        if(mobileHeader == true) {
                            createSticky();
                        }
                    } else {
                        createSticky();
                    }
                });
            };
            var $header = $("#header");
            $header.sticyHeader({
                showHeaderTop: ".header-top-area",
                showHeaderFirst: ".header-top-first",
                showHeaderBottom: ".header-bottom-area",
                scrollHeader: 300,
                mobileHeader: true
            });
        },
        headerMenu: function() {
            function checkDropdownPosition($dropdown) {
                return $dropdown.offset().left + $dropdown.outerWidth() > $window.width();
            }
            function checkDropdownBottomPosition($dropdown) {
                // Check if the dropdown exists before accessing its properties
                if($dropdown.length) {
                    // Get dropdown's top position relative to the document
                    var dropdownTop = $dropdown.offset().top;
                    // Get dropdown's outer height
                    var dropdownHeight = $dropdown.outerHeight();
                    // Get window height
                    var windowHeight = $(window).height();
                    var scrollTop = $(window).scrollTop();
                    if(dropdownTop + dropdownHeight - scrollTop > windowHeight) {
                        return true; // Open upwards
                    } else {
                        return false; // Open downwards
                    }
                } else {
                    return false; // Return false if the dropdown doesn't exist
                }
            }
            // Track hover states
            var $isHoveringMenuLi = false;
            var $isHoveringMenudropLi = false;
            $(".mainmenu-content").each(function() {
                // Handle menu-li hover
                $(".menu-li").each(function() {
                    $(this).on("mouseenter", function() {
                        $isHoveringMenuLi = true;
                        var $dropdown = $(this).find(".menu-sub");
                        // Check if menu-dropdown is touching the right edge
                        if($dropdown.length && checkDropdownPosition($dropdown)) {
                            $(this).addClass("menu-right"); // Add class if it touches the right edge
                        }
                    }).on("mouseleave", function() {
                        $isHoveringMenuLi = false;
                        // Remove menu-right class if not hovering over menudrop-li
                        if(!$isHoveringMenudropLi) {
                            $(this).removeClass("menu-right");
                        }
                    });
                });
                // Handle hover for menudrop-li
                $(".menudrop-li").each(function() {
                    $(this).on("mouseenter", function() {
                        $isHoveringMenudropLi = true;
                        var $parentMenuLi = $(this).closest(".menu-li");
                        var $subdropdown = $(this).find(".menusub-dropdown");
                        var $parentDropdown = $parentMenuLi.find(".menu-sub");
                        // Check if menusub-dropdown touches the right edge
                        if($subdropdown.length && checkDropdownPosition($subdropdown)) {
                            // Check if parent menu-dropdown is also touching the right edge
                            if (!checkDropdownPosition($parentDropdown)) {
                                $(this).addClass("menu-right");
                            }
                        }
                        // Also check if both dropdowns touch the right edge
                        if(checkDropdownPosition($parentDropdown) && checkDropdownPosition($subdropdown)) {
                            $parentMenuLi.addClass("menu-right");
                            $(this).addClass("menu-right");
                        }
                        // Check if menusub-dropdown touches the bottom edge of the window
                        if(checkDropdownBottomPosition($subdropdown)) {
                            $(this).addClass("menu-bottom"); // Add menu-bottom class
                        }
                    }).on("mouseleave", function() {
                        $isHoveringMenudropLi = false;
                        var $parentMenuLi = $(this).closest(".menu-li");
                        // Remove menu-right class from menudrop-li
                        $(this).removeClass("menu-right menu-bottom");
                        // Remove menu-right class if not hovering over menu-li
                        if(!$isHoveringMenuLi) {
                            $parentMenuLi.removeClass("menu-right");
                        }
                    });
                });
            });
        },
        mobileMenu: function() {
            var $toggler = $("a.toggler-btn"),
                $menu_close = $(".menu-close button.menu-close-btn, .bg-screen .bg-back"),
                $mobile_menu = $("#mobile-menu");
            $toggler.on("click", function() {
                $mobile_menu.removeClass("invisible").addClass("active visible");
                $bgBack.removeClass("opacity-0 invisible").addClass("opacity-50 visible");
            });
            $menu_close.on("click", function() {
                $mobile_menu.addClass("invisible").removeClass("active visible");
                $bgBack.addClass("opacity-0 invisible").removeClass("opacity-50 visible");
            });
        },
        searchField: function() {
            var $searchField = $("form.search-form .search-bar .form-search input.search-input");
            $searchField.each(function() {
                $searchField.on("keyup", function() {
                    var $searchObject = $(this).val().toLowerCase(),
                        $searchInput = $("form.search-form .search-bar .form-search input.search-input[type='search' i]"),
                        $searchBtn = $(this).siblings("button"),
                        $searchResult = $(this).parent().siblings(".search-results"),
                        $searchText = $(this).parent().siblings(".search-results").find(".search-for").children(".search-text"),
                        $searchTextTitle = $(this).parents(".search-bar").siblings().find(".search-text"),
                        $searchUl = $(this).parents().siblings(".search-results").find("ul.search-ul"),
                        $searchLi = $(this).parents().siblings(".search-results").find("ul.search-ul li.search-li"),
                        $searchMore = $(this).parents().siblings(".search-results").find(".search-more"),
                        $searchFail = $(this).parents().siblings(".search-results").find(".search-fail");
                    if($searchObject.length > 0) {
                        $searchBtn.prop("disabled", false);
                        $searchResult.removeClass("d-none");
                    } else {
                        $searchBtn.prop("disabled", true);
                        $searchResult.addClass("d-none");
                    }
                    $searchInput.on("click", function() {
                        $searchBtn.prop("disabled", true);
                        $searchResult.addClass("d-none");
                    });
                    $searchText.text($searchObject);
                    $searchTextTitle.text($searchObject);
                    $searchLi.filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf($searchObject) > -1)
                        $searchFail.hide();
                        var $noResult = true;
                        $searchUl.children("li.search-li").each(function() {
                            if ($(this).children(":visible").length != 0) {
                                $noResult = false;
                                $searchMore.show();
                            }
                        });
                        if ($noResult) {
                            $searchMore.hide();
                            $searchFail.show();
                        }
                    });
                });
            });
        },
        quickView: function() {
            var quickviewSwiperSmall = new Swiper(".swiper#quickview-slider-small", {
                loop: false,
                slidesPerView: 4,
                spaceBetween: 15,
                freeMode: true,
                watchSlidesProgress: true
            });
            var quickviewSwiperBig = new Swiper(".swiper#quickview-slider-big", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".swiper-prev-quickview-big",
                    nextEl: ".swiper-next-quickview-big"
                },
                thumbs: {
                    swiper: quickviewSwiperSmall
                }
            });
        },
        cartDrawer: function() {
            var $cartMenu = $("a.js-cart-drawer, a.bottom-menu-cart"),
                $drawerClose = $(".drawer-close button.drawer-close-btn, .bg-screen .bg-shop"),
                $cartDrawer = $("#cart-drawer");
            $cartMenu.on("click", function() {
                miniCart();
            });
            $drawerClose.on("click", function() {
                $cartDrawer.addClass("invisible").removeClass("active visible");
                $bgShop.addClass("opacity-0 invisible").removeClass("opacity-50 visible");
            });
            var $addToCart = $(".add-to-cart");
            $addToCart.on("click", function(event) {
                event.preventDefault();
                var $this = $(this);
                $this.addClass("loading active disabled");
                setTimeout(function() {
                    $this.removeClass("loading");
                    $this.addClass("done");
                    setTimeout(function() {
                        $this.removeClass("done active disabled");
                        miniCart();
                        $this.parents(".quickview-modal").find(".quickview-modal-header button").click();
                    }, 500);
                }, 500);
            });
            function miniCart() {
                $cartDrawer.removeClass("invisible").addClass("active visible");
                $bgShop.removeClass("opacity-0 invisible").addClass("opacity-50 visible");
            }
        },
        wishList: function() {
            var $wishList = $(".add-to-wishlist");
            $wishList.on("click", function() {
                var $this = $(this);
                $this.addClass("active disabled");
                setTimeout(function() {
                    $this.find("i").removeClass("ri-heart-line").addClass("ri-heart-fill");
                    $this.removeClass("active disabled");
                    $this.attr("href", "wishlist.html");
                }, 500);
            });
        },
        qtyAdjust: function() {
            var $qtyMinus = $("button.js-qty-adjust-minus"),
                $qtyPlus = $("button.js-qty-adjust-plus");
            $qtyMinus.on("click", function() {
                var $input = $(this).parent().find("input.js-qty-num"),
                    $count = parseInt($input.val()) - 1;
                $count = $count < 1 ? 1 : $count;
                $input.val($count);
                $input.change();
                return false;
            });
            $qtyPlus.on("click", function() {
                var $input = $(this).parent().find("input.js-qty-num");
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        },
        shopContent: function() {
            // shop-cat-slider
            var swiper = new Swiper('.swiper#shop-cat-slider', {
                loop: false,
                rewind: true,
                slidesPerView: 6,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-shop-cat',
                    nextEl: '.swiper-next-shop-cat'
                },
                pagination: {
                    el: ".swiper-pagination-shop-cat",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }
            });
            // filterDrawer
            var $shopFilterBtn = $("button.shop-filter-btn"),
                $shopSidebarClose = $("button.shop-sidebar-close, .bg-screen .bg-back"),
                $shopFilterSidebar = $(".shop-filter-sidebar");
            $shopFilterBtn.on("click", function() {
                $shopFilterSidebar.addClass("active");
                $bgBack.removeClass("opacity-0 invisible").addClass("opacity-50 visible");
            });
            $shopSidebarClose.on("click", function() {
                $shopFilterSidebar.removeClass("active");
                $bgBack.addClass("opacity-0 invisible").removeClass("opacity-50 visible");
            });
            // pricerange
            var $rangeValue = $(".price-container .price-slider"),
                $rangeInputValue = $(".range-input input"),
                $priceInputValue = $(".price-input input"),
                $priceInputFirst = $(".price-input input:first"),
                $priceInputLast = $(".price-input input:last"),
                $priceGap = 10;
            $priceInputValue.on("input", function(e) {
                var $minP = parseInt($priceInputFirst.val()),
                    $maxP = parseInt($priceInputLast.val()),
                    $diff = $maxP - $minP;
                if($minP < 0) {
                    alert("minimum price cannot be less than 0");
                    $priceInputFirst.val(0);
                    $minP = 0;
                }
                if($maxP > 89) {
                    alert("maximum price cannot be greater than 89");
                    $priceInputLast.val(89);
                    $maxP = 89;
                }
                if($minP > $maxP - $priceGap) {
                    $priceInputFirst.val($maxP - $priceGap);
                    $minP = $maxP - $priceGap;
                    if($minP < 0) {
                        $priceInputFirst.val(0);
                        $minP = 0;
                    }
                }
                if($diff >= $priceGap && $maxP <= parseInt($rangeInputValue.last().prop("max"))) {
                    if($(e.target).hasClass("min-input")) {
                        $rangeInputValue.first().val($minP);
                        var $value1 = $rangeInputValue.first().prop("max");
                        $rangeValue.css("left", `${($minP / $value1) * 100}%`);
                    } else {
                        $rangeInputValue.last().val($maxP);
                        var $value2 = $rangeInputValue.last().prop("max");
                        $rangeValue.css("right", `${100 - ($maxP / $value2) * 100}%`);
                    }
                }
            });
            $rangeInputValue.on("input", function(e) {
                var $minVal = parseInt($rangeInputValue.first().val()),
                    $maxVal = parseInt($rangeInputValue.last().val()),
                    $diff = $maxVal - $minVal;
                if ($diff < $priceGap) {
                    if ($(e.target).hasClass("min-range")) {
                        $rangeInputValue.first().val($maxVal - $priceGap);
                    } else {
                        $rangeInputValue.last().val($minVal + $priceGap);
                    }
                } else {
                    $priceInputFirst.val($minVal);
                    $priceInputLast.val($maxVal);
                    $rangeValue.css("left", `${($minVal / $rangeInputValue.first().prop("max")) * 100}%`);
                    $rangeValue.css("right", `${100 - ($maxVal / $rangeInputValue.last().prop("max")) * 100}%`);
                }
            });
            // sortby
            var $sortBy = $(".shop-short #sortby"),
                $selectWrap = $(".shop-short ul#select-wrap li"),
                $selectWrapper = $(".shop-short ul#select-wrap li a"),
                $sortTitle = $(".shop-short a.short-title .sort-title");
            $sortBy.on("change", function() {
                var $selectedOption = $(this).val();
                $selectWrap.removeClass("selected");
                $selectWrapper.removeClass("secondary-color extra-bg").addClass("body-dominant-color");
                $("ul#select-wrap li:has([data-value='" + $selectedOption + "'])").addClass("selected");
                $("ul#select-wrap li:has([data-value='" + $selectedOption + "']) a").addClass("secondary-color extra-bg").removeClass("body-dominant-color");
                $sortTitle.text($("ul#select-wrap li.selected a").text());
            });
            $selectWrap.on("click", function() {
                var selectedValue = $(this).find("a").data("value");
                $sortBy.val(selectedValue).trigger("change");
            });
            // shop-grid-list
            var $shopViewBtn = $("button.shop-view-btn");
            $shopViewBtn.on("click", function() {
                $shopViewBtn.removeClass("dominant-color disabled").addClass("body-color");
                $(this).addClass("dominant-color disabled").removeClass("body-color");
                var $shopProductWrap = $(".shop-product-wrap"),
                    $dataView = $(this).attr("data-view");
                if($shopProductWrap.hasClass("data-grid") || $shopProductWrap.hasClass("data-list")) {
                    $shopProductWrap.removeClass("data-grid");
                    $shopProductWrap.removeClass("data-list");
                    $shopProductWrap.addClass("data-"+$dataView);
                } else {
                    $shopProductWrap.addClass("data-"+$dataView);
                }
                var $shopCol = $(".shop-col");
                var $shopColWithout = $(".without-shop-sidebar .shop-col");
                if($shopCol.hasClass("col-6 col-md-4") || $shopColWithout.hasClass("col-6 col-md-4 col-xl-3")) {
                    $shopCol.removeClass("col-6 col-md-4").addClass("col-12");
                    $shopColWithout.removeClass("col-6 col-md-4 col-xl-3").addClass("col-12");
                } else {
                    $shopCol.addClass("col-6 col-md-4").removeClass("col-12");
                    $shopColWithout.addClass("col-6 col-md-4 col-xl-3").removeClass("col-12");
                }
            });
        },
        productHorizontal: function() {
            var swiperSmall = new Swiper(".swiper#slider-small-h", {
                loop: false,
                slidesPerView: 4,
                spaceBetween: 15,
                freeMode: true,
                watchSlidesProgress: true
            });
            var swiperBig = new Swiper(".swiper#slider-big-h", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".swiper-prev-big",
                    nextEl: ".swiper-next-big"
                },
                thumbs: {
                    swiper: swiperSmall
                }
            });
        },
        productVertical: function() {
            function setMaxHeight() {
                if (window.matchMedia("(min-width: 576px)").matches) {
                    var bigSliderHeight = $(".slider-big-v").height();
                    $(".slider-small-v").css("max-height", bigSliderHeight + "px");
                } else {
                    $(".slider-small-v").css("max-height", "");
                }
            }
            setMaxHeight();
            var swiperSmall = new Swiper(".swiper#slider-small-v", {
                loop: false,
                direction: 'vertical',
                slidesPerView: "auto",
                spaceBetween: 15,
                mousewheel: true,
                slideToClickedSlide: true,
                loopedSlides: 50,
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    0: {
                        direction: 'horizontal',
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    320: {
                        direction: 'horizontal',
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    576: {
                        direction: 'vertical',
                        slidesPerView: "auto",
                        spaceBetween: 15
                    }
                },
                on: {
                    init: function() {
                        setMaxHeight();
                    },
                    slideChange: function() {
                        setMaxHeight();
                    },
                    resize: function() {
                        setMaxHeight();
                    }
                }
            });
            var swiperBig = new Swiper(".swiper#slider-big-v", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".swiper-prev-big",
                    nextEl: ".swiper-next-big"
                },
                thumbs: {
                    swiper: swiperSmall
                }
            });
            $window.on('appear resize', function() {
                setMaxHeight();
            });
        },
        productFull: function() {
            var swiperBigFull = new Swiper(".swiper#slider-big-f", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".swiper-prev-big",
                    nextEl: ".swiper-next-big"
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        },
        productFullcut: function() {
            var swiperBigFull = new Swiper(".swiper#slider-big-fc", {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
                navigation: {
                    prevEl: ".swiper-prev-big",
                    nextEl: ".swiper-next-big"
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        },
        productSingle: function() {
            var swiperBig = new Swiper(".swiper#slider-big-s", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".swiper-prev-big",
                    nextEl: ".swiper-next-big"
                },
                pagination: {
                    el: ".swiper-pagination-big",
                    clickable: true
                }
            });
        },
        productDouble: function() {
            var swiperBig = new Swiper(".swiper#slider-big-d", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 15,
                navigation: {
                    prevEl: ".swiper-prev-big",
                    nextEl: ".swiper-next-big"
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }
            });
        },
        productSwipe: function() {
            function productSlide() {
                var $productSwiper = $(".product-swiper");
                if ($productSwiper.length > 0) {
                    var $productSwipe = window.matchMedia("(min-width: 992px)");
                    var $productSwiperWrapper = $productSwiper.find(".product-swiper-wrapper"),
                        $productSwiperSlide = $productSwiperWrapper.find(".product-swiper-slide");
                    var $productSwiperTab = $(".product-swiper-tab"),
                        $productSwiperTabFirst = $(".product-swiper-tab:first"),
                        $productTabNav = $("#product-tab-nav"),
                        $productTabSwiperSlide = $productTabNav.find(".product-swiper-slide"),
                        $productTabSwiperSlideFirst = $productTabNav.find(".product-swiper-slide:first-child");
                    var $productSlider;
                    function productCol() {
                        if ($productSwipe.matches) {
                            if ($productSlider && $productSlider.destroy) {
                                $productSlider.destroy();
                            }
                            $productSwiper.removeClass("swiper");
                            $productSwiperWrapper.removeClass("swiper-wrapper").addClass("row ul-mt15");
                            $productSwiperSlide.removeClass("swiper-slide");
                            $productTabNav.show();
                            $productTabSwiperSlideFirst.addClass("active");
                            $productSwiperTab.hide();
                            $productSwiperTabFirst.show();
                            $productTabSwiperSlide.on("click", function() {
                                $productTabSwiperSlide.removeClass("active");
                                $(this).addClass("active");
                                $productSwiperTab.hide();
                                var $activeTab = $(this).find("a").attr("href");
                                $($activeTab).show();
                                return false;
                            });
                            return;
                        } else {
                            if ($productSlider) {
                                $productSlider.destroy();
                            }
                            $productSwiper.addClass("swiper");
                            $productSwiperWrapper.addClass("swiper-wrapper").removeClass("row ul-mt15");
                            $productSwiperSlide.addClass("swiper-slide");
                            $productSlider = new Swiper(".product-swiper", {
                                loop: true,
                                slidesPerView: 1,
                                spaceBetween: 0,
                                observer: true,
                                observeParents: true,
                                watchSlidesProgress: true,
                                navigation: {
                                    prevEl: '.swiper-prev-big',
                                    nextEl: '.swiper-next-big'
                                },
                                pagination: {
                                    el: ".swiper-pagination-big",
                                    clickable: true
                                },
                                autoplay: {
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                },
                                keyboard: {
                                    enabled: true,
                                    onlyInViewport: true
                                },
                                speed: 500
                            });
                            $productTabNav.hide();
                            $productTabSwiperSlide.removeClass("active");
                            $productSwiperTab.show();
                        }
                    }
                    productCol();
                    $productSwipe.addListener(productCol);
                }
            }
            productSlide();
        },
        productJs: function() {
            // product-img magnificpopup js
            var $magnificBtn = $("a.full-view"),
                $magnificProduct = $(".product-img-big");
            $magnificBtn.on("click", function () {
                $magnificProduct.magnificPopup({
                    delegate: 'a.product-thumbnail',
                    type: 'image',
                    showCloseBtn: true,
                    closeBtnInside: false,
                    midClick: true,
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1]
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    }
                });
            });
            // productzoom js
            var $proZoom = $("img.zoom");
            function initZoom() {
                if (window.matchMedia("(min-width: 1200px)").matches) {
                    $proZoom.each(function() {
                        $(this).wrap('<span class="pro-zoom" style="display:block"></span>').css("display", "block").parent().zoom({
                            url: $(this).attr("data-zoom")
                        });
                    });
                } else {
                    $proZoom.each(function() {
                        var $parent = $(this).parent(".pro-zoom");
                        if ($parent.length) {
                            $parent.find('.zoomImg').unwrap().remove();
                            $parent.remove();
                        }
                    });
                }
            }
            function initZoomOnResize() {
                $window.resize(initZoom);
            }
            initZoom();
            initZoomOnResize();
            // productshare js
            var $currentURL = window.location.href,
                $CopyURL = $("input.copy-url"),
                $CopyBtn = $("button.copy-btn");
            $CopyURL.val($currentURL);
            $CopyBtn.on("click", function() {
                var $copyLink = $("input#copy-link");
                $copyLink.select();
                document.execCommand("copy");
            });
        },
        productFrequent: function() {
            function updateDefaultValues() {
                // Initialize variables
                var $newTotal = 0,
                    $oldTotal = 0,
                    $priceSave = 0,
                    $discountPrice = 0;
                // Update freq-new-price and freq-old-price for each frequent-content
                $(".frequent-content").each(function() {
                    var $freqNewPrice = $(this).find(".freq-new-price"),
                        $freqOldPrice = $(this).find(".freq-old-price"),
                        $newPrice = parseFloat($freqNewPrice.data("new-price").replace(/[^0-9.-]+/g,"")),
                        $oldPrice = parseFloat($freqOldPrice.data("old-price").replace(/[^0-9.-]+/g,""));
                    // Update text with formatted values
                    $freqNewPrice.text("$" + $newPrice.toFixed(2));
                    $freqOldPrice.text("$" + $oldPrice.toFixed(2));
                });
                // Calculate totals and manage active classes
                var $newTotal = 0,
                    $oldTotal = 0;
                $(".frequent-content input[type='checkbox']:checked").each(function() {
                    var $frequentContent = $(this).closest(".frequent-content");
                    var $freqNewPrice = parseFloat($frequentContent.find(".freq-new-price").text().replace(/[^0-9.-]+/g,""));
                    var $freqOldPrice = parseFloat($frequentContent.find(".freq-old-price").text().replace(/[^0-9.-]+/g,""));
                    $newTotal += $freqNewPrice;
                    $oldTotal += $freqOldPrice;
                    // Add active class to corresponding image
                    var $imgId = $(this).data("img-id");
                    $(".freq-img img[data-img-id='" + $imgId + "']").parent().addClass("active");
                });
                // Remove active class from images not checked
                $(".frequent-content input[type='checkbox']").not(":checked").each(function() {
                    var $imgId = $(this).data("img-id");
                    $(".freq-img img[data-img-id='" + $imgId + "']").parent().removeClass("active");
                });
                // Calculate price save and discount
                var $priceSave = $oldTotal - $newTotal;
                var $discountPrice = ($priceSave / $oldTotal * 100).toFixed(0) + "%";
                // Update freq-new-total, freq-old-total, freq-price-save, and freq-discount-price
                $(".freq-new-total").text("$" + $newTotal.toFixed(2)).attr("data-new-total", "$" + $newTotal.toFixed(2));
                $(".freq-old-total").text("$" + $oldTotal.toFixed(2)).attr("data-old-total", "$" + $oldTotal.toFixed(2));
                $(".freq-price-save").text("$" + $priceSave.toFixed(2)).attr("data-price-save", "$" + $priceSave.toFixed(2));
                $(".freq-discount-price").text($discountPrice).attr("data-discount-price", $discountPrice);
                // Show/hide buttons based on checkbox state
                var $freqAllChecked = $(".frequent-content input[type='checkbox']").not(":disabled").length === $(".frequent-content input[type='checkbox']:checked").not(":disabled").length;
                if ($freqAllChecked) {
                    $(".freq-select-btn").addClass("d-none");
                    $(".freq-deselect-btn").removeClass("d-none");
                } else {
                    $(".freq-select-btn").removeClass("d-none");
                    $(".freq-deselect-btn").addClass("d-none");
                }
            }
            // Call the function to initialize values on page load
            updateDefaultValues();
            // Update values whenever a checkbox is changed
            $(".frequent-form input[type='checkbox']").on("change", function() {
                updateDefaultValues();
            });
            // Handle the Select All button click
            $(".freq-select-btn").on("click", function() {
                // Check all checkboxes that are not disabled
                $(".frequent-content input[type='checkbox']").not(":disabled").prop("checked", true);
                // Update active class for all images
                $(".frequent-content input[type='checkbox']").not(":disabled").each(function() {
                    var $imgId = $(this).data("img-id");
                    $(".freq-img img[data-img-id='" + $imgId + "']").parent().addClass("active");
                });
                // Update default values
                updateDefaultValues();
            });
            // Handle the Deselect All button click
            $(".freq-deselect-btn").on("click", function() {
                // Uncheck all checkboxes that are not disabled
                $(".frequent-content input[type='checkbox']").not(":disabled").prop("checked", false);
                // Remove active class from all images
                $(".frequent-content input[type='checkbox']").not(":disabled").each(function() {
                    var $imgId = $(this).data("img-id");
                    $(".freq-img img[data-img-id='" + $imgId + "']").parent().removeClass("active");
                });
                // Update default values
                updateDefaultValues();
            });
        },
        productReview: function() {
            $(".product-review").each(function() {
                var $productReview = $(this);
                $("button.write-review-btn").on("click", function () {
                    $productReview.find("button.write-review-btn").addClass("d-none");
                    $productReview.find("button.close-review-btn").removeClass("d-none");
                    $productReview.find(".product-review-form").removeClass("d-none");
                });
                $("button.close-review-btn").on("click", function () {
                    $productReview.find("button.close-review-btn").addClass("d-none");
                    $productReview.find("button.write-review-btn").removeClass("d-none");
                    $productReview.find(".product-review-form").addClass("d-none");
                });
                function update() {
                    var $totalReviews = 0,
                    $totalScore = 0;
                    $productReview.find(".product-review-count").each(function() {
                        var $numberOfReviews = parseInt($(this).find(".product-review-number").data("number")),
                        $ratingValue = parseInt($(this).find(".product-review-stars").text());
                        $totalReviews += $numberOfReviews;
                        $totalScore += $numberOfReviews * $ratingValue;
                    });
                    // average review
                    var $avgReview = $totalScore / $totalReviews;
                    $productReview.find(".product-review-rating").find("span[data-id]").text($avgReview.toFixed(2));
                    // existing score
                    var $existingScore = $productReview.find(".product-review-rating").find("span[data-score]").data("score");
                    $productReview.find(".product-review-rating").find("span[data-score]").text($existingScore);
                    // total review
                    $productReview.find(".product-review-text").find("span[data-base]").text($totalReviews);
                    $productReview.find(".product-review-count").each(function() {
                        var $numberOfReviews = parseInt($(this).find(".product-review-number").data("number")),
                        $progressBarWidth = ($numberOfReviews / $totalReviews) * 100,
                        $formattedWidth = parseFloat($progressBarWidth.toFixed(2));
                        $(this).find('.product-review-number').text($formattedWidth + '%');
                        $(this).find('.product-review-progress-width').css('width', $formattedWidth + '%');
                    });
                    var $fullStars = Math.floor($avgReview),
                    $halfStar = Math.ceil($avgReview) - $fullStars,
                    $emptyStars = 5 - $fullStars - $halfStar;
                    // Clear existing stars
                    $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i").removeClass("ri-star-fill ri-star-line ri-star-half-line");
                    // Fill full stars
                    for(var i = 0; i < $fullStars; i++) {
                        $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i:eq(" + i + ")").addClass("ri-star-fill");
                    }
                    // Fill half star if necessary
                    if($halfStar > 0) {
                        $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i:eq(" + $fullStars + ")").addClass("ri-star-half-line");
                    }
                    // Fill empty stars
                    for(var j = $fullStars + (($halfStar > 0) ? 1 : 0); j < 5; j++) {
                        $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i:eq(" + j + ")").addClass("ri-star-line");
                    }                    
                }
                update();
                // Rating functionality
                $(".product-review-ratting .product-ratting span.review-ratting span.review-star i").on("click", function() {
                    var clickedIndex = $(this).index();
                    $(this).prevAll("i").addBack().removeClass("ri-star-line");
                    $(this).prevAll("i").addBack().addClass("ri-star-fill");
                    $(this).nextAll("i").removeClass("ri-star-fill");
                    $(this).nextAll("i").addClass("ri-star-line");
                });
                // Function to update attachment count
                function updateAttachmentCount() {
                    var attachmentCount = $(".review-attachment-uploaded li").length;
                    var attachmentCountElement = $(".review-attachment-count");
                    if (attachmentCount > 0) {
                        attachmentCountElement.removeClass("d-none");
                        attachmentCountElement.text(attachmentCount + " attachment" + (attachmentCount > 1 ? "s" : ""));
                    } else {
                        attachmentCountElement.addClass("d-none").text(attachmentCount + " attachment" + (attachmentCount > 1 ? "s" : "")); // Clear text when attachment count is 0
                    }
                }
                // Function to update uploaded images
                function updateUploadedImages(input) {
                    var attachmentUploaded = $(".review-attachment-uploaded");
                    var uploadedImages = input.files;
                    var attachmentCount = uploadedImages.length;
                    var attachmentCountElement = $(".review-attachment-count");
                    if (attachmentCount > 0) {
                        attachmentUploaded.closest(".field-attached").removeClass("d-none"); // Show attached files section
                        Array.from(uploadedImages).forEach(file => {
                            // Append uploaded image HTML to review-attachment-uploaded section
                            var uploadedImageHTML = `
                                <li class="review-attachment-item">
                                    <div class="position-relative">
                                        <button type="button" class="attachmentremove-btn extra-color position-absolute secondary-bg rounded-circle" aria-label="Remove"><i class="ri-close-line d-block lh-1"></i></button>
                                        <a href="javascript:void(0)" class="d-block ptb-4 plr-4 body-bg border-full br-hidden">
                                            <img src="${URL.createObjectURL(file)}" class="img-fluid" alt="${file.name}">
                                        </a>
                                    </div>
                                </li>`;
                            attachmentUploaded.append(uploadedImageHTML);
                        });
                    }
                    updateAttachmentCount(); // Update attachment count after uploading images
                }
                // Event listener for removing attachments
                $(document).on("click", ".attachmentremove-btn", function() {
                    $(this).closest(".review-attachment-item").remove();
                    updateAttachmentCount(); // Update attachment count after removing an attachment
                });
                // Event listener for file input change
                $("#review-img").on("change", function() {
                    updateUploadedImages(this);
                });
                // Function to reset form fields
                function resetFormFields() {
                    $(".product-review-form input[type=text], .product-review-form input[type=email], .product-review-form textarea").val('');
                    $(".product-review-form .product-review-ratting .product-ratting span.review-ratting span.review-star i").removeClass("ri-star-fill").addClass("ri-star-line");
                }
                // Function to reset uploaded images
                function resetUploadedImages() {
                    $("#review-img").val(''); // Clear the file input value
                    $(".review-attachment-uploaded").empty(); // Remove uploaded image previews
                    $(".review-attachment-count").addClass("d-none").text("0 attachments"); // Hide attachment count
                }
                // Submit review functionality
                $(".review-submit").on("click", function() {
                    // New code to print values
                    var reviewStars = $(".product-review-form .ri-star-fill").length; // Count filled stars from the form
                    var reviewName = $("#review-name").val();
                    var reviewEmail = $("#review-email").val();
                    var reviewTitle = $("#review-title").val();
                    var reviewMessage = $("#review-message").val();
                    var uploadedImages = $("#review-img")[0].files; // Get the uploaded files
                    // Check if any field is empty
                    if (reviewName === "") {
                        alert("Please enter your name.");
                        return;
                    } else if (reviewEmail === "") {
                        alert("Please enter your email.");
                        return;
                    } else if (reviewStars === "") {
                        alert("Please select a rating.");
                        return;
                    } else if (reviewTitle === "") {
                        alert("Please enter a review title.");
                        return;
                    } else if (reviewMessage === "") {
                        alert("Please enter your review message.");
                        return;
                    }
                    // Get current date
                    var currentDate = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
                    // Generate review star HTML
                    var reviewStarHTML = '';
                    for (var i = 0; i < reviewStars; i++) {
                        reviewStarHTML += '<i class="ri-star-fill"></i>';
                    }
                    for (var j = reviewStars; j < 5; j++) {
                        reviewStarHTML += '<i class="ri-star-line"></i>';
                    }
                    // Create new product-review-detail structure and prepend
                    var newReviewDetail = `
                        <div class="product-review-detail">
                            <div class="product-reviewer-info d-flex flex-wrap align-items-center">
                                <span class="width-48 height-48 icon-16 d-flex align-items-center justify-content-center overflow-hidden rounded-circle"><i class="ri-user-line d-block lh-1"></i></span>
                                <h6 class="product-reviewer-name width-calc-48 font-16 psl-15">${reviewName}</h6>
                            </div>
                            <div class="product-reviewer-date mst-10">Reviwed on ${currentDate}</div>
                            <div class="product-review-love mst-9">
                                <div class="product-ratting">
                                    <span class="review-ratting">
                                        <span class="review-star icon-16">
                                            ${reviewStarHTML}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <h6 class="product-reviewer-subject mst-8">${reviewTitle}</h6>
                            <p class="product-reviewer-review mst-1">${reviewMessage}</p>
                            <div class="product-reviewer-attachment mst-7">
                                <ul class="ul-mt5">
                                    ${Array.from(uploadedImages).map(file => `<li><img src="${URL.createObjectURL(file)}" class="width-56 img-fluid ptb-4 plr-4 body-bg border-full br-hidden" alt="${file.name}"></li>`).join('')}
                                </ul>
                            </div>
                        </div>`;
                    $(".product-review-comment .row").prepend(newReviewDetail);
                    // Log review email value
                    console.log("Review Email:", reviewEmail);
                    // Update total reviews count
                    var $totalReviews = parseInt($productReview.find(".product-review-text span[data-base]").text());
                    $totalReviews++; // Increment the count
                    $productReview.find(".product-review-text span[data-base]").text($totalReviews);
                    var ratingValue = $(".product-review-form .ri-star-fill").length;
                    // Update the data-number attribute of the corresponding rating count with the new count
                    var ratingCountIndex = 5 - ratingValue; // Calculate the index of the rating count
                    var $ratingCount = $productReview.find(".product-review-count").eq(ratingCountIndex).find(".product-review-number");
                    var newRatingCount = parseInt($ratingCount.attr("data-number")) + 1;
                    $ratingCount.attr("data-number", newRatingCount);
                    // Calculate average review score
                    var $totalScore = 0;
                    $productReview.find(".product-review-count").each(function() {
                        var $numberOfReviews = parseInt($(this).find(".product-review-number").attr("data-number"));
                        var $ratingValue = parseInt($(this).find(".product-review-stars").text());
                        $totalScore += $numberOfReviews * $ratingValue;
                    });
                    var $avgReview = $totalScore / $totalReviews;
                    $productReview.find(".product-review-rating").find("span[data-id]").text($avgReview.toFixed(2));
                    // Calculate the number of full stars, half star, and empty stars
                    var $fullStars = Math.floor($avgReview);
                    var $halfStar = Math.ceil($avgReview) - $fullStars;
                    var $emptyStars = 5 - $fullStars - $halfStar;
                    // Clear existing stars
                    $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i").removeClass("ri-star-fill ri-star-line ri-star-half-line");
                    // Fill full stars
                    for(var i = 0; i < $fullStars; i++) {
                        $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i:eq(" + i + ")").addClass("ri-star-fill");
                    }
                    // Fill half star if necessary
                    if($halfStar > 0) {
                        $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i:eq(" + $fullStars + ")").addClass("ri-star-half-line");
                    }
                    // Fill empty stars
                    for(var j = $fullStars + (($halfStar > 0) ? 1 : 0); j < 5; j++) {
                        $productReview.find(".product-star .product-ratting span.review-ratting span.review-star i:eq(" + j + ")").addClass("ri-star-line");
                    }
                    // Update the width of product-review-progress-width based on each review count
                    $productReview.find(".product-review-count").each(function() {
                        var $numberOfReviews = parseInt($(this).find(".product-review-number").attr("data-number"));
                        var $progressBarWidth = ($numberOfReviews / $totalReviews) * 100;
                        var $formattedWidth = parseFloat($progressBarWidth.toFixed(2));
                        $(this).find('.product-review-number').text($formattedWidth + '%');
                        $(this).find('.product-review-progress-width').css('width', $formattedWidth + '%');
                    });
                    // Reset form fields and uploaded images
                    resetFormFields();
                    resetUploadedImages();
                });
                // Cancel review functionality
                $(".review-cancel").on("click", function() {
                    // Reset form fields and uploaded images
                    resetFormFields();
                    resetUploadedImages();
                    $productReview.find("button.close-review-btn").addClass("d-none");
                    $productReview.find("button.write-review-btn").removeClass("d-none");
                    $productReview.find(".product-review-form").addClass("d-none");
                });
            });
        },
        productRelated: function() {
            // related-slider default id
            var $relatedSlider = ".swiper#related-slider",
                $breakPoints = {
                0: {
                    slidesPerView: 2,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 15
                },
                320: {
                    slidesPerView: 2,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 15
                },
                360: {
                    slidesPerView: 2,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 15
                },
                576: {
                    slidesPerView: 2,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 4,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 30
                }
            };
            // check #related-slider-full exists
            if($(".swiper#related-slider-full").length) {
                $relatedSlider = "#related-slider-full";
                $breakPoints[1400] = {
                    slidesPerView: 5,
                    grid: {
                        rows: 1,
                        fill: 'row' | 'column',
                    },
                    spaceBetween: 30
                };
            }
            // related-slider js
            var swiper = new Swiper($relatedSlider, {
                loop: false,
                rewind: true,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-related',
                    nextEl: '.swiper-next-related'
                },
                pagination: {
                    el: ".swiper-pagination-related",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: $breakPoints
            });
        },
        productCompare: function() {
            $(".compare-search").each(function() {
                var $compareSearch = $(this);
                $compareSearch.find(".compare-search-input").on("keyup", function(){
                    var $compareSearchQuery = $(this).val().toLowerCase(),
                    $compareSearchFound = false;
                    $compareSearch.find("ul li").each(function(){
                        var $compareProductName = $(this).data("name").toLowerCase();
                        if($compareProductName.includes($compareSearchQuery)) {
                            $(this).show();
                            $compareSearchFound = true;
                        } else {
                            $(this).hide();
                        }
                    });
                    if(!$compareSearchFound) {
                        $compareSearch.find(".compare-product-results-fail").removeClass("d-none");
                    } else {
                        $compareSearch.find(".compare-product-results-fail").addClass("d-none");
                    }
                });
                $compareSearch.find(".compare-search-input").on("input", function() {
                  if ($(this).val() === "") {
                    $compareSearch.find("ul li").show();
                    $compareSearch.find(".compare-product-results-fail").addClass("d-none");
                  }
                });
            });
        },
        blogComment: function() {
            $(".article-cmt-edit").on("click", function() {
                var $articleCmtEdit = $(this);
                if($articleCmtEdit.parents(".article-cmt-red").siblings(".article-cmt-text").hasClass("d-none")) {
                    $(this).parent().parent().addClass("d-none");
                    $(this).parents(".article-cmt-red").siblings(".article-cmt-text").removeClass("d-none");
                    $(this).parents(".article-cmt-red").siblings(".article-cmt-desc").addClass("d-none");
                }
            });
            $(".article-edit-post, .article-edit-cancel").on("click", function() {
                var $articleEditPost = $(this);
                if($articleEditPost.parents(".article-cmt-text").siblings(".article-cmt-desc").hasClass("d-none")) {
                    $(this).parents(".article-cmt-text").addClass("d-none");
                    $(this).parents(".article-cmt-text").siblings(".article-cmt-desc").removeClass("d-none");
                    $(this).parents(".article-cmt-text").siblings(".article-cmt-red").find(".article-edit-reply").parent().removeClass("d-none");
                }
            });
            $(".article-reply-btn").on("click", function() {
                var $articleReplyBtn = $(this);
                if($articleReplyBtn.parents(".article-cmt-red").siblings(".article-reply-form").hasClass("d-none")) {
                    $(this).parent().addClass("d-none");
                    $(this).parents(".article-cmt-red").siblings(".article-reply-form").removeClass("d-none");
                }
            });
            $(".article-reply-post, .article-cancel-post").on("click", function() {
                var $articleReplyPost = $(this);
                if($articleReplyPost.parents(".article-reply-form").siblings(".article-cmt-red").find(".article-reply-btn").parent().hasClass("d-none")) {
                    $(this).parents(".article-reply-form").addClass("d-none");
                    $(this).parents(".article-reply-form").siblings(".article-cmt-red").find(".article-reply-btn").parent().removeClass("d-none");
                }
            });
        },
        aboutJs: function() {
            // abt-counter js
            $window.scroll(function() {
                var $count_number = $(".count-number");
                $count_number.each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
            });
            // about-testislider js
            var swiper = new Swiper(".swiper#about-testislider", {
                loop: false,
                rewind: true,
                slidesPerView: 1,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-about-testi',
                    nextEl: '.swiper-next-about-testi'
                },
                pagination: {
                    el: ".swiper-pagination-about-testi",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    }
                }
            });
            // about-locationslider js
            var swiper = new Swiper(".swiper#about-locationslider", {
                loop: false,
                rewind: true,
                slidesPerView: 3,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-about-location',
                    nextEl: '.swiper-next-about-location'
                },
                pagination: {
                    el: ".swiper-pagination-about-location",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        },
        contactJs: function() {
            function sectionOverlay() {
                $(".section-overlay").css("margin-top", "");
                if (window.matchMedia("(min-width: 768px)").matches) {
                    $(".section-overlay").each(function() {
                        var $contactLocationWrapHeight = $(this).outerHeight();
                        $(this).css("margin-top", -($contactLocationWrapHeight / 2) + "px");
                    });
                }
            }
            sectionOverlay();
            var swiper = new Swiper(".swiper#contact-locationslider", {
                loop: false,
                rewind: true,
                slidesPerView: 3,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-contact-location',
                    nextEl: '.swiper-next-contact-location'
                },
                pagination: {
                    el: ".swiper-pagination-contact-location",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                },
                on: {
                    init: function() {
                        sectionOverlay();
                    },
                    slideChange: function() {
                        sectionOverlay();
                    },
                    resize: function() {
                        sectionOverlay();
                    }
                }
            });
            $window.resize(function() {
                sectionOverlay();
            });
            // contact-banner-wrap js
            function contactBannerPosition() {
                $(".contact-banner-wrap").css("margin-left", "");
                if (window.matchMedia("(min-width: 992px)").matches) {
                    $(".contact-banner-wrap").each(function() {
                        var $contactBannerWrapOffset = $(this).offset().left;
                        var $htmlOffset = $("html").offset().left;
                        var $offsetFromHtml = $contactBannerWrapOffset - $htmlOffset;
                        $(this).css("margin-left", -$offsetFromHtml + "px");
                        $(this).css("visibility", "visible");
                    });
                }
            }
            contactBannerPosition();
            $window.resize(function() {
                contactBannerPosition();
            });
        },
        cartPage: function() {
            // account-edit-close-cancel
            var $cartInfo = $(".cart-info");
            $cartInfo.each(function() {
                var $cartCodeEditBtn = $("form button.cart-code-edit"),
                    $cartCodeCloseBtn = $("form button.cart-code-close");
                $cartCodeEditBtn.on("click", function() {
                    $(this).addClass("d-none");
                    $(this).siblings(".cart-code-close").removeClass("d-none");
                    $(this).parent().siblings().find(".cart-detail-info").addClass("d-none");
                    $(this).parent().siblings().find(".cart-detail-form").removeClass("d-none");
                });
                $cartCodeCloseBtn.on("click", function() {
                    $(this).addClass("d-none");
                    $(this).siblings(".cart-code-edit").removeClass("d-none");
                    $(this).parent().siblings().find(".cart-detail-info").removeClass("d-none");
                    $(this).parent().siblings().find(".cart-detail-form").addClass("d-none");
                });
            });
            // cart-slider
            var swiper = new Swiper(".swiper#cart-slider", {
                loop: false,
                rewind: true,
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-cart',
                    nextEl: '.swiper-next-cart'
                },
                pagination: {
                    el: ".swiper-pagination-cart",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        grid: {
                            rows: 1,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    }
                }
            });
        },
        checkOut: function() {
            // checkoutTab
            $(".checktab-overview").each(function() {
                var $checktabContent = $(this).find(".checktab-content");
                $checktabContent.each(function() {
                    var $checktabProgress = $(this).closest(".checktab-overview").find(".checktab-progress"),
                        $checktabNextBtn = $(this).find("button.checktab-next"),
                        $checktabBackBtn = $(this).find("button.checktab-back"),
                        $checktabData = $(this).find(".checktab-data"),
                        $checktabLi = $(this).closest(".checktab-overview").find(".checkout-tab ul.checktab-ul li.checktab-li");
                    var $checktabActive = 1;
                    $checktabNextBtn.on("click", function() {
                        var $checktabDataCurrent = $(this).closest(".checktab-data"),
                            $checktabDataNext = $checktabDataCurrent.next(".checktab-data"),
                            $checktabDataCurrentLi = $checktabDataCurrent.index() + 1,
                            $checktabDataNextLi = $checktabDataCurrentLi + 1;
                        if($checktabDataNext.length > 0) {
                            $checktabDataCurrent.addClass("d-none");
                            $checktabDataNext.removeClass("d-none");
                            $checktabLi.removeClass("active");
                            $checktabLi.eq($checktabDataNextLi - 1).addClass("active");
                            $checktabLi.eq($checktabDataCurrentLi - 1).addClass("done");
                            $checktabActive++;
                            checktabUpdate();
                        }
                    });
                    $checktabBackBtn.on("click", function() {
                        var $checktabDataCurrent = $(this).closest(".checktab-data"),
                            $checktabDataPrev = $checktabDataCurrent.prev(".checktab-data"),
                            $checktabDataCurrentLi = $checktabDataCurrent.index() + 1,
                            $checktabDataPrevLi = $checktabDataCurrentLi - 1;
                        if($checktabDataPrev.length > 0) {
                            $checktabDataCurrent.addClass("d-none");
                            $checktabDataPrev.removeClass("d-none");
                            $checktabLi.eq($checktabDataPrevLi - 1).removeClass("done");
                            $checktabLi.removeClass("active");
                            $checktabLi.eq($checktabDataPrevLi - 1).addClass("active");
                            $checktabActive--;
                            checktabUpdate();
                        }
                    });
                    function checktabUpdate() {
                        $checktabProgress.css("width", (($checktabActive - 1) / ($checktabData.length - 1)) * 100 + "%");
                    }
                });
            });
            // method-radio
            $(".check-method-radio label.cust-radio-label input[name]").on("click", function() {
                var $checkMethod = $(this).closest(".check-method");
                $checkMethod.find(".check-method-info").addClass("d-none");
                $(this).closest(".check-method-option").find(".check-method-info").removeClass("d-none");
                $checkMethod.find(".check-method-radio label.cust-radio-label input[name]").not(this).prop("checked", false);
            });
            // card-payment
            var $checkout_form = $(".check-method-card");
            $checkout_form.card({
                container: '.card-wrapper',
                formatting: true,
                formSelectors: {
                    numberInput: 'input[name="cardnumber"]',
                    expiryInput: 'input[name="exp-date"]',
                    cvcInput: 'input[name="cvc"]',
                    nameInput: 'input[name="ccname"]'
                },
                cardSelectors: {
                    cardContainer: '.jp-card-container',
                    card: '.jp-card',
                    numberDisplay: '.jp-card-number',
                    expiryDisplay: '.jp-card-expiry',
                    cvcDisplay: '.jp-card-cvc',
                    nameDisplay: '.jp-card-name'
                },
                messages: {
                    validDate: 'valid\nthru',
                    monthYear: 'mm / yy'
                },
                placeholders: {
                    number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
                    cvc: '&bull;&bull;&bull;',
                    expiry: '&bull;&bull;/&bull;&bull;',
                    name: 'Full name'
                },
                masks: {
                    cardNumber: false
                },
                classes: {
                    valid: 'jp-card-valid',
                    invalid: 'jp-card-invalid'
                },
                debug: false
            });
        },
        invoiceJs: function() {
            function loadImages($invoiceContent, $callBack) {
                var $invoiceImage = $invoiceContent.find("img"),
                    $imageLoaded = 0,
                    $totalImages = $invoiceImage.length;
                if($totalImages === 0) {
                    $callBack();
                    return;
                }
                $invoiceImage.each(function() {
                    var $invoiceImg = new Image();
                    $invoiceImg.src = $(this).attr("src");
                    $invoiceImg.onload = $invoiceImg.onerror = function() {
                        $imageLoaded++;
                        if ($imageLoaded === $totalImages) {
                            $callBack();
                        }
                    };
                });
            }
            $(".invoice-download").each(function() {
                $(this).on("click", function() {
                    var $invoiceContent = $(this).closest(".invoice").find(".invoice-content");
                    if(!$invoiceContent.length) {
                        console.error("No invoice content found.");
                        return;
                    }
                    loadImages($invoiceContent, function() {
                        var { jsPDF } = window.jspdf,
                            $clone = $invoiceContent.clone();
                        $clone.css({
                            position: "absolute",
                            left: "auto",
                            top: "auto",
                            width: "210mm",
                            height: "auto", // '297mm' if fix A4 hieght
                            boxShadow: "none",
                            overflow: "visible",
                            margin: "0",
                            padding: "30px",
                            zIndex: "-1"
                        });
                        $body.append($clone);
                        html2canvas($clone[0], {
                            scale: 2,
                            useCORS: true,
                            logging: true,
                            backgroundColor: "#FFFFFF"
                        }).then(function($canvas) {
                            $clone.remove();
                            if ($canvas.width === 0 || $canvas.height === 0) {
                                console.error("Canvas is empty or not rendered correctly.");
                                return;
                            }
                            var $invoiceImgData = $canvas.toDataURL("image/png", 1.0);
                            var $invoicePdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
                            var $invoiceImgWidth = 210;
                            var $invoicePageHeight = 295;
                            var $invoiceImgHeight = $canvas.height * $invoiceImgWidth / $canvas.width;
                            var $invoiceHeightLeft = $invoiceImgHeight;
                            var $invoicePosition = 0;
                            $invoicePdf.addImage($invoiceImgData, "PNG", 0, $invoicePosition, $invoiceImgWidth, $invoiceImgHeight);
                            $invoiceHeightLeft -= $invoicePageHeight;
                            while ($invoiceHeightLeft >= 0) {
                                $invoicePosition = $invoiceHeightLeft - $invoiceImgHeight;
                                $invoicePdf.addPage();
                                $invoicePdf.addImage($invoiceImgData, "PNG", 0, $invoicePosition, $invoiceImgWidth, $invoiceImgHeight);
                                $invoiceHeightLeft -= $invoicePageHeight;
                            }
                            $invoicePdf.save("invoice.pdf");
                        }).catch(function($err) {
                            console.error("Error generating PDF:", $err);
                        });
                    });
                });
            });
        },
        paymentJs: function() {
            var swiper = new Swiper(".swiper#payment-methodslider", {
                loop: true,
                rewind: true,
                slidesPerView: 5,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-payment',
                    nextEl: '.swiper-next-payment'
                },
                pagination: {
                    el: ".swiper-pagination-payment",
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar-payment',
                    draggable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                }
            });
        },
        storeJs: function() {
            $(".store-state option").hide();
            $document.on("change", ".store-country", function() {
                var $storeForm = $(this).closest(".store-form"),
                    $selectedCountry = $(this).val();
                $storeForm.find(".store-state option").each(function () {
                    var $country = $(this).data("country");
                    if ($country === $selectedCountry) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
                $storeForm.find(".store-country option:first").hide();
                $storeForm.find(".store-state").val("");
                $storeForm.find(".store-state").prop("selectedIndex", 0);
            });
            $document.on("click", ".store-find-btn", function() {
                var $storeForm = $(this).closest(".store-form"),
                    $storeCountry = $storeForm.find(".store-country").val(),
                    $storeState = $storeForm.find(".store-state").val();
                if (!$storeCountry || !$storeState) {
                    $storeForm.find(".store-alert-msg").addClass("active").text("Please select both field.");
                    $storeForm.find(".store-data").removeClass("active");
                    return;
                }
                $storeForm.find(".store-alert-msg").removeClass("active").text("");
                $storeForm.find(".store-data").addClass("active");
                $storeForm.find(".countryselect").text($storeCountry.charAt(0).toUpperCase() + $storeCountry.slice(1));
                $storeForm.find(".stateselect").text($storeState.charAt(0).toUpperCase() + $storeState.slice(1));
                $storeForm.find(".store-data .row.store-data-row>*").each(function() {
                    var $state = $(this).data("state"),
                        $country = $(this).data("country");
                    if ($state === $storeState && $country === $storeCountry) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });
            $document.on("click", ".store-reset-btn", function() {
                var $storeForm = $(this).closest(".store-form");
                $storeForm.find(".store-country").val("");
                $storeForm.find(".store-country option:first").show();
                $storeForm.find(".store-country").prop("selectedIndex", 0);
                $storeForm.find(".store-state").val("");
                $storeForm.find(".store-state option").hide();
                $storeForm.find(".store-state").prop("selectedIndex", 0);
                $storeForm.find(".store-data").removeClass("active");
                $storeForm.find(".store-alert-msg").text("");
                $storeForm.find(".countryselect").text("");
                $storeForm.find(".stateselect").text("");
            });
        },
        accountSettings: function() {
            // account-edit-close-cancel
            var $accInfo = $(".acc-info");
            $accInfo.each(function() {
                var $accEditBtn = $("form button.acc-edit"),
                    $accSaveCancelBtn = $("form button.acc-save, form button.acc-cancel");
                $accEditBtn.on("click", function() {
                    $(this).addClass("d-none");
                    $(this).parent().siblings().find(".acc-detail-info").addClass("d-none");
                    $(this).parent().siblings().find(".acc-detail-form").removeClass("d-none");
                });
                $accSaveCancelBtn.on("click", function() {
                    $(this).parents(".acc-detail-form").addClass("d-none");
                    $(this).parents(".acc-detail-form").siblings(".acc-detail-info").removeClass("d-none");
                    $(this).parents(".acc-detail").siblings().find(".acc-edit").removeClass("d-none");
                });
            });
            $(".acc-detail-form").each(function() {
                var $accDetailForm = $(this),
                    $accDetailField = $accDetailForm.find(".acc-detail-field"),
                    $maxInputField = 5,
                    $accAddField = $accDetailForm.find(".acc-add-field"),
                    $x = 1,
                    $i = 0;
                // account-field
                $accAddField.on("click", function () {
                    if($x < $maxInputField || $i < $maxInputField) {
                        $x++;
                        // email
                        if($(this).hasClass("acc-email-field")) {
                            var $dup_email_html = '<div class="acc-field-box"><h6 class="font-18 meb-18">Add a new email</h6><label class="cust-checkbox-label meb-19"><input type="checkbox" id="default-email-' + $i + '" name="default-email-' + $i + '" class="cust-checkbox"><span class="d-block cust-check"></span><span class="cust-text">Set as default mail</span></label><div class="acc-detail-hide"><div class="row field-row"><div class="col-12 col-md-6 field-col"><label for="email-' + $i + '" class="field-label">Email</label><input type="email" id="email-' + $i + '" name="email" class="w-100" placeholder="Email address" autocomplete="email"></div></div></div><button type="button" class="st-field-btn acc-remove-field body-color d-flex align-items-center mst-30"><span class="st-field-icon float-start icon-16 d-flex align-items-center justify-content-center extra-bg mer-5 border-full border-radius"><i class="ri-subtract-line d-block lh-1"></i></span>Remove email</button></div>';
                            $(this).siblings().append($dup_email_html);
                        }
                        // shipping-address
                        if($(this).hasClass("acc-ship-field")) {                        
                            var $dup_ship_html = '<div class="acc-field-box"><h6 class="font-18 meb-18">Add a new address</h6><label class="cust-checkbox-label meb-19"><input type="checkbox" id="default-address-' + $i + '" name="default-address-' + $i + '" class="cust-checkbox"><span class="d-block cust-check"></span><span class="cust-text">Set as default address</span></label><div class="acc-detail-hide"><div class="row field-row"><div class="col-12 field-col"><label for="organization-' + $i + '" class="field-label">Company (optional)</label><input type="text" id="organization-' + $i + '" name="organization-' + $i + '" class="w-100" placeholder="Company name" autocomplete="organization"></div><div class="col-12 col-md-6 field-col"><label for="address-' + $i + '" class="field-label">Address</label><input type="text" id="address-' + $i + '" name="address" class="w-100" placeholder="Address line1" autocomplete="address-line1"></div><div class="col-12 col-md-6 field-col"><label for="address2-' + $i + '" class="field-label">Address2</label><input type="text" id="address2-' + $i + '" name="address2" class="w-100" placeholder="Address line2" autocomplete="address-line2"></div><div class="col-12 field-col"><label for="house-no-' + $i + '" class="field-label">Apartment, suite, etc</label><input type="text" id="house-no-' + $i + '" name="address3" class="w-100" placeholder="Apartment, suite, etc." autocomplete="address-line3"></div><div class="col-12 col-md-6 field-col"><label for="country-' + $i + '" class="field-label">Country</label><select id="country-' + $i + '" name="country" class="w-100" autocomplete="country"><option selected disabled>--Select your country--</option><option>India</option><option>Uk</option><option>Usa</option><option>Uae</option><option>Bangladesh</option></select></div><div class="col-12 col-md-6 field-col"><label for="province-' + $i + '" class="field-label">State</label><input type="text" id="province-' + $i + '" name="province" class="w-100" placeholder="State" autocomplete="address-level1"></div><div class="col-12 col-md-6 field-col"><label for="city-' + $i + '" class="field-label">City</label><input type="text" id="city-' + $i + '" name="city" class="w-100" placeholder="City" autocomplete="address-level2"></div><div class="col-12 col-md-6 field-col"><label for="pincode-' + $i + '" class="field-label">Pincode</label><input type="text" id="pincode-' + $i + '" name="pincode" class="w-100" placeholder="Pincode" autocomplete="postal-code"></div></div><div class="acc-radio-field mst-30"><ul class="acc-radio-ul ul-mt30"><li class="acc-radio-li"><label class="cust-radio-label"><input type="radio" id="ship-home-' + $i + '" name="ship-' + $i + '" class="cust-checkbox" checked="checked"><span class="d-block cust-check"></span><span class="cust-text">Home<span class="cust-other-text">(All day delivery)</span></span></label></li><li class="acc-radio-li"><label class="cust-radio-label"><input type="radio" id="ship-work-' + $i + '" name="ship-' + $i + '" class="cust-checkbox"><span class="d-block cust-check"></span><span class="cust-text">Work<span class="cust-other-text">(Delivery 10:00 AM - 05:00 PM)</span></span></label></li></ul></div></div><button type="button" class="st-field-btn acc-remove-field body-color d-flex align-items-center mst-30"><span class="st-field-icon float-start icon-16 d-flex align-items-center justify-content-center extra-bg mer-5 border-full border-radius"><i class="ri-subtract-line d-block lh-1"></i></span>Remove address</button></div>';
                            $(this).siblings().append($dup_ship_html);
                        }
                        // billing-address
                        if($(this).hasClass("acc-bill-field")) {
                            var $dup_bill_html = '<div class="acc-field-box"><h6 class="font-18 meb-18">Add a new address</h6><label class="cust-checkbox-label meb-19"><input type="checkbox" id="ship-address-' + $i + '" name="ship-address-' + $i + '" class="cust-checkbox"><span class="d-block cust-check"></span><span class="cust-text">Same as shipping address</span></label><div class="acc-detail-hide"><div class="row field-row"><div class="col-12 field-col"><label for="bill-organization-' + $i + '" class="field-label">Company (optional)</label><input type="text" id="bill-organization-' + $i + '" name="bill-organization-' + $i + '" class="w-100" placeholder="Company name" autocomplete="organization"></div><div class="col-12 col-md-6 field-col"><label for="bill-address-' + $i + '" class="field-label">Address</label><input type="text" id="bill-address-' + $i + '" name="bill-address" class="w-100" placeholder="Address line1" autocomplete="address-line1"></div><div class="col-12 col-md-6 field-col"><label for="bill-address2-' + $i + '" class="field-label">Address2</label><input type="text" id="bill-address2-' + $i + '" name="bill-address2" class="w-100" placeholder="Address line2" autocomplete="address-line2"></div><div class="col-12 field-col"><label for="bill-house-no-' + $i + '" class="field-label">Apartment, suite, etc</label><input type="text" id="bill-house-no-' + $i + '" name="bill-address3" class="w-100" placeholder="Apartment, suite, etc." autocomplete="address-line3"></div><div class="col-12 col-md-6 field-col"><label for="bill-country-' + $i + '" class="field-label">Country</label><select id="bill-country-' + $i + '" name="bill-country" class="w-100" autocomplete="country"><option selected disabled>--Select your country--</option><option>India</option><option>Uk</option><option>Usa</option><option>Uae</option><option>Bangladesh</option></select></div><div class="col-12 col-md-6 field-col"><label for="bill-province-' + $i + '" class="field-label">State</label><input type="text" id="bill-province-' + $i + '" name="bill-province" class="w-100" placeholder="State" autocomplete="address-level1"></div><div class="col-12 col-md-6 field-col"><label for="bill-city-' + $i + '" class="field-label">City</label><input type="text" id="bill-city-' + $i + '" name="bill-city" class="w-100" placeholder="City" autocomplete="address-level2"></div><div class="col-12 col-md-6 field-col"><label for="bill-pincode-' + $i + '" class="field-label">Pincode</label><input type="text" id="bill-pincode-' + $i + '" name="bill-pincode" class="w-100" placeholder="Pincode" autocomplete="postal-code"></div></div><div class="acc-radio-field mst-30"><ul class="acc-radio-ul ul-mt30"><li class="acc-radio-li"><label class="cust-radio-label"><input type="radio" id="bill-home-' + $i + '" name="bill-' + $i + '" class="cust-checkbox" checked="checked"><span class="d-block cust-check"></span><span class="cust-text">Home<span class="cust-other-text">(All day delivery)</span></span></label></li><li class="acc-radio-li"><label class="cust-radio-label"><input type="radio" id="bill-work-' + $i + '" name="bill-' + $i + '" class="cust-checkbox"><span class="d-block cust-check"></span><span class="cust-text">Work<span class="cust-other-text">(Delivery 10:00 AM - 05:00 PM)</span></span></label></li></ul></div></div><button type="button" class="st-field-btn acc-remove-field body-color d-flex align-items-center mst-30"><span class="st-field-icon float-start icon-16 d-flex align-items-center justify-content-center extra-bg mer-5 border-full border-radius"><i class="ri-subtract-line d-block lh-1"></i></span>Remove address</button></div>';
                            $(this).siblings().append($dup_bill_html);
                        }
                        $i++;
                    } else {
                        alert("You have reached a limit for adding fields note more than " + $maxInputField);
                    }
                });
                // account-field-remove
                $accDetailField.on("click", ".acc-remove-field", function(e) {
                    e.preventDefault();
                    var $accFieldBox = $(this).parent(".acc-field-box"),
                        $fieldDeletemodal = $("#field-deletemodal");
                    $fieldDeletemodal.modal("show");
                    $fieldDeletemodal.on("click", "#fieldremove", function() {
                        $accFieldBox.remove();
                        $x--;
                        $fieldDeletemodal.modal("hide");
                    });
                });
                // account-field-checkbox
                $accDetailField.on("click", ".acc-field-box label.cust-checkbox-label input[name]", function() {
                    var $accFieldInput = $accDetailForm.find(".acc-field-box label.cust-checkbox-label input[name]"),
                    $accdetailHide = $(this).parent().siblings(".acc-detail-hide");
                    $accFieldInput.not(this).prop("checked", false);
                    if($accFieldInput.not(this).prop("checked", false)) {
                        $accDetailForm.find(".acc-detail-hide").removeClass("d-none");
                        $accdetailHide.addClass("d-none");
                    }
                    if($(this).prop("checked") == true) {
                        $accdetailHide.addClass("d-none");
                    }
                    if($(this).prop("checked") == false) {
                        $accdetailHide.removeClass("d-none");
                    }
                });
            });
        },
        accountProfile: function() {
            // account-profile-img          
            $(".img-upload").each(function() {
                var $imgUpload = $(this),
                    $imgFile = $imgUpload.find(".img-file");
                $imgFile.on("change", function() {
                    var $file = this.files[0];
                    if($file) {
                        var $reader = new FileReader();
                        var $imgPreview = $imgUpload.find(".img-preview");
                        $reader.onload = function(event) {
                            $imgPreview.attr("src", event.target.result);
                        }
                        $reader.readAsDataURL($file);
                    }
                });
            });
            // change paswword
            var $fieldPwdBtn = $("button.field-pwd-btn");
            $fieldPwdBtn.on("click", function() {
                var $fieldPwdChild = $(this).children();
                if($fieldPwdChild.toggleClass("ri-eye-line")) {
                    $fieldPwdChild.toggleClass("ri-eye-off-line");
                }
                else {
                    $fieldPwdChild.toggleClass("ri-eye-line");
                }
                var $fieldPwdParent = $(this).prev();
                $fieldPwdParent.attr("type", $fieldPwdParent.attr("type") === "password" ? "text" : "password");
            });
        },
        accountWishlist: function() {
            var $wishNoteContent = $(".wish-note-content");
            $wishNoteContent.each(function() {
                var $wishAddNote = $("form button.wish-add-note"),
                    $wishTextareaFocus = $("form .wish-textarea textarea[name]"),
                    $wishSaveCancelBtn = $("form button.wish-save, form button.wish-cancel");
                $wishAddNote.on("click", function() {
                    $(this).parent().addClass("d-none");
                    $(this).parent().siblings(".wish-textarea").removeClass("d-none");
                });
                $wishTextareaFocus.on("click", function() {
                    $(this).addClass("focus");
                    var $wishBtn = $(this).parents(".wish-textarea").siblings(".wish-btn");
                    if($wishBtn.hasClass("d-none")) {
                        $wishBtn.removeClass("d-none");
                    } else {
                        $wishBtn.addClass("d-none");
                    }
                });
                $wishSaveCancelBtn.on("click", function() {
                    $(this).parents(".wish-btn").siblings(".wish-textarea").find("textarea[name]").removeClass("focus");
                    var $wishBtn = $(this).parents(".wish-btn");
                    if($wishBtn.hasClass("d-none")) {
                        $wishBtn.removeClass("d-none");
                    } else {
                        $wishBtn.addClass("d-none");
                    }
                });
            });
        },
        TicketSettings: function() {
            // ticket-select js
            var $ids = {
                'status': $(`#status`).val(),
                'priority': $(`#priority`).val()
            }
            for(const $id of Object.keys($ids)) {
                $(`#${$id}`).on("change", function() {
                    onSelectChange($id, $ids[$id]);
                });
            }
            function onSelectChange($id, $defaultValue) {
                var $selectValue = $(`#${$id} option:selected`).text();
                if ($(`#${$id}`).val()) {
                    $("#ticket-edit-adminmodal").modal("show");
                    $("button[data-bs-target]").attr("change", `${$id}`)
                }
                $("#ticket-edit-adminmodal button").on("click", function(event) {
                    if($(this).attr("data-bs-target")) {
                        $("#ticket-edit-adminmodal").on("hidden.bs.modal", function() {
                            if($("button[data-bs-target]").attr("change") !== $id) {
                                return
                            }
                            $(`#${$id}`).val($selectValue);
                        });
                        $("#ticket-edit-adminmodal2").on("hidden.bs.modal", function() {
                            if($("button[data-bs-target]").attr("change") !== $id) {
                                return
                            }
                            $(`#${$id}`).val($defaultValue);
                        });
                    } else {
                        $("#ticket-edit-adminmodal").on("hidden.bs.modal", function() {
                            if($("button[data-bs-target]").attr("change") !== $id) {
                                return
                            }
                            $(`#${$id}`).val($defaultValue);
                        });
                    }
                });
            }
            // ticket-magnificpopup js
            var $magnificTicket = $("a.ti-img");
            $magnificTicket.magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1]
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 500
                }
            });
            // ticket-reply js
            var $tiPostBtn = $("form button.ti-post-btn"),
                $tiReplyCancelBtn = $("form button.ti-reply-btn, form button.ti-cancel-btn"),
                $tiReplyEdit = $("form button.ti-reply-edit:not([data-bs-target='#ticket-error-editmodal'])"),
                $tiEditDeleteBtn = $("form button.ti-edit-btn, form button.ti-delete-btn");
            $tiPostBtn.on("click", function() {
                $(this).addClass("d-none");
                $(this).parent().siblings().removeClass("d-none");
            });
            $tiReplyCancelBtn.on("click", function() {
                $(this).parents("#ti-reply-form").addClass("d-none").siblings().find("button.ti-post-btn").removeClass("d-none");
            });
            $tiReplyEdit.on("click", function() {
                $(this).addClass("d-none");
                $(this).parents(".ti-user-chat").siblings(".ti-content-info").find(".ti-content").addClass("d-none").siblings(".ti-edit-content").removeClass("d-none");
            });
            $tiEditDeleteBtn.on("click", function() {
                $(this).parents(".ti-edit-content").addClass("d-none").siblings(".ti-content").removeClass("d-none");
                $(this).parents(".ti-content-info").siblings(".ti-user-chat").find(".ti-reply-edit").removeClass("d-none");
            });
            // ticket-editor js
            var $editorCreator = $(".editor-creator");
            $editorCreator.each(function() {
                var $editor = $(this).find(".editor");
                if ($editor.length) {
                    ClassicEditor.create($editor[0])
                    .then(editor => {})
                    .catch(error => {});
                }
            });
            // file-attachment js
            $(".attachment-upload").each(function() {
                updateAttachmentImage($(this));
            });
            $(".attachment-file-upload").on("click", function() {
                var $attachmentUpload = $(this).closest(".attachment-upload"),
                    $attachmentFile = $attachmentUpload.find(".attachment-file");
            });
            $(".attachment-file").on("change", function(e) {
                var $attachmentUpload = $(this).closest(".attachment-upload");
                updateAttachmentImage($attachmentUpload);
            });
            function updateAttachmentImage($attachmentUpload) {
                var $attachmentFile = $attachmentUpload.find(".attachment-file"),
                    $attachmentUploaded = $attachmentUpload.find(".attachment-uploaded"),
                    $files = $attachmentFile.get(0).files;
                if($files.length > 0) {
                    $.each($files, function(index, $file) {
                        var $reader = new FileReader();
                        $reader.onload = function(e) {
                            var $html = '<li class="attachment-item">';
                            $html += '<div class="position-relative">';
                            $html += '<button type="button" class="attachmentremove-btn extra-color position-absolute secondary-bg rounded-circle" aria-label="Remove"><i class="ri-close-line d-block lh-1"></i></button>';
                            $html += '<a href="javascript:void(0)" class="d-block ptb-4 plr-4 body-bg border-full br-hidden">';
                            $html += '<img src="' + e.target.result + '" class="img-fluid">';
                            $html += '</a>';
                            $html += '</div>';
                            $html += '</li>';
                            $attachmentUploaded.append($html);
                            updateAttachmentCount($attachmentUpload);
                        }
                        $reader.readAsDataURL($file);
                    });
                }
            }
            function updateAttachmentCount($attachmentUpload) {
                var $fileCount = $attachmentUpload.find(".attachment-item").length,
                    $attachmentCount = $attachmentUpload.find(".attachment-count");
                $attachmentCount.text($fileCount + " attachments");
                if($fileCount == 0) {
                    $attachmentCount.addClass("d-none");
                } else {                    
                    $attachmentCount.removeClass("d-none");
                }
            }
            $document.on("click", ".attachmentremove-btn", function() {
                var $attachmentDeletemodal = $("#attachment-deletemodal"),
                    $attachmentRemove = $("#attachmentremove");
                $attachmentDeletemodal.modal("show");
                var $currentAttachment = $(this).closest(".attachment-item");
                var $attachmentUpload = $currentAttachment.closest(".attachment-upload");
                $attachmentRemove.off().on("click", function() {
                    $currentAttachment.remove();
                    $attachmentDeletemodal.modal("hide");
                    updateAttachmentCount($attachmentUpload);
                });
            });
        },
        comingSoon: function() {
            var $comingBgimage = $(".coming-bgimg>*"),
                $comingBgindex = 0,
                $comingTotalimages = $comingBgimage.length;
            function showNextImage() {
                $comingBgimage.eq($comingBgindex).fadeOut(1500);
                $comingBgindex = ($comingBgindex + 1) % $comingTotalimages;
                $comingBgimage.eq($comingBgindex).fadeIn(1500);
            }
            $comingBgimage.hide().eq($comingBgindex).show();
            setInterval(showNextImage, 3000);
        },
        countDown: function() {
            var $count_down = $(".countdown");
            $count_down.each(function() {
                var $timer = $(this).attr("data-time"),
                    $countDownDate = new Date($timer).getTime(),
                    $this = $(this);
                var $x = setInterval(function() {
                    var $now = new Date().getTime(),
                        $distance = $countDownDate - $now,
                        $days = Math.floor($distance / (1000 * 60 * 60 * 24)),
                        $hours = Math.floor(($distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        $minutes = Math.floor(($distance % (1000 * 60 * 60)) / (1000 * 60)),
                        $seconds = Math.floor(($distance % (1000 * 60)) / 1000);
                        $this.find('.day').html($days);
                        $this.find('.hrs').html($hours);
                        $this.find('.min').html($minutes);
                        $this.find('.sec').html($seconds);
                        // $this.text($days + "d " + $hours + "h " +  $minutes + "m " + $seconds + "s ");
                    if($distance < 0) {
                        clearInterval($x);
                        $this.find('.day').html('0');
                        $this.find('.hrs').html('0');
                        $this.find('.min').html('0');
                        $this.find('.sec').html('0');
                        // $this.text("EXPIRED");
                    }
                }, 1000);
            });
        },
        dataBgImg: function() {
            var $dataBgImg = $("[data-bgimg]");
            $dataBgImg.each(function() {
                var url = $(this).data("bgimg");
                $(this).css("background-image","url("+ url +")");
            });
        },
        imgResize: function() {
            $window.bind("load resize", function() {
                $("img").each(function(index) {
                    var $width = $(this).width(),
                        $height = $(this).height();
                    $(this).attr("width", $width);
                    $(this).attr("height", $height);
                });
            });
        },
        videoJs: function() {
            var $videoBtn = $(".video-btn");
            $videoBtn.on("click", function() {
                var $videoId = $(this).data("video-id"),
                    $this = $(this),
                    $video = $this.closest(".video"),
                    $iframe = '<iframe src="https://www.youtube.com/embed/' + $videoId + '?autoplay=1" class="d-block" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                $this.hide();
                $video.find(".video-loader").fadeIn();
                setTimeout(function() {
                    setTimeout(function() {
                        $video.find(".video-loader").fadeOut();
                    }, 1000);
                    $video.find(".video-frame").html($iframe).fadeIn();
                }, 1000);
            });
            var $videoBtnTag = $(".video-btn-tag");
            $videoBtnTag.on("click", function() {
                var $videoTag = $(this).closest(".video").find(".video-tag");
                var $video = $videoTag.find("video");
                var $videoGet = $video.get(0);
                var $videoBtn = $(this);
                if ($videoGet.paused) {
                    $videoGet.play();
                    $videoBtn.removeClass("paused").addClass("playing");
                    $videoBtn.find("i").removeClass("ri-play-large-fill").addClass("ri-pause-fill");
                    $videoTag.show();
                    $videoBtn.parent().hide();
                } else {
                    $videoGet.pause();
                    $videoBtn.removeClass('playing').addClass('paused');
                    $videoBtn.find("i").removeClass("ri-pause-fill").addClass("ri-play-large-fill");
                }
            });
        },
        resizeScreen: function() {
            function resizefullscreen() {
                var $minHeight = $window.height(),
                    $fullScreen = $(".fullscreen");
                $fullScreen.css("min-height", $minHeight);
            }
            resizefullscreen();
            $window.resize(function () {
                resizefullscreen();
            });
            // resizefullscreen2
            function resizefullscreen2() {
                if (window.matchMedia("(min-width: 992px)").matches) {
                    var $minHeight = $window.height(),
                        $fullScreen2 = $(".fullscreen2");
                    $fullScreen2.css("min-height", $minHeight);
                }
            }
            resizefullscreen2();
            $window.resize(function () {
                resizefullscreen2();
            });
        },
        checkboxBtn: function() {
            var $checkboxAgree = $("label.checkbox-agree");
            $checkboxAgree.on("click", function() {
                var $checkboxAgreeCheck = $(this).children(".checkboxbtn").is(":checked"),
                    $hideBtn = $(this).parent().siblings().find(".hide-btn");
                if($checkboxAgreeCheck) {
                    $hideBtn.removeClass("opacity-50 disabled pe-none");
                }
                else {
                    $hideBtn.addClass("opacity-50 disabled pe-none");
                }
            });
        },
        backTop: function() {
            var $backTop = $("#top"),
                $htmlBody = $("html, body");
            $window.scroll(function() {
                if($(this).scrollTop() > 600) {
                    $backTop.removeClass("opacity-0 invisible").addClass("opacity-100 visible");
                } else {
                    $backTop.addClass("opacity-0 invisible").removeClass("opacity-100 visible");
                }
            });
            $backTop.on("click", function() {
                $htmlBody.animate({
                    scrollTop: 0
                }, 100);
                return false;
            });
        }
    };
    ST.animateTemplate = {
        aDelay: 50,
        aQueue: [],
        aTimer: null,
        aBody: null,
        init: function() {
            var $at = this;
                $at.aBody = $body;
                $at.aQueue = [];
                $at.aTimer = null;
            if(typeof aDelay !== 'undefined') {
                $at.aDelay = aDelay;
            }
            $at.aQueue["animate__animated_0"] = [];
            $body.find("#main").find(">div, >section").each(function(index) {
                $(this).attr("data-animated-id", (index + 1));
                $at.aQueue["animate__animated_" + (index + 1)] = [];
            });
            setTimeout(function() {
                $at.registerAnimation();
            }, 100);
        },
        registerAnimation: function() {
            var $at = this;
            $("[data-animate]:not(.animate__animated)", $at.aBody).waypoint(function() {
                var $at_el = this.element ? this.element : this,
                    $this = $($at_el);
                if($this.is(":visible")) {
                    var $at_animated_wrap = $this.closest("[data-animated-id]"),
                        $at_animated_id = '0';
                    if($at_animated_wrap.length) {
                        $at_animated_id = $at_animated_wrap.data("animated-id");
                    }
                    $at.aQueue["animate__animated_" + $at_animated_id].push($at_el);
                    $at.processItemQueue();
                } else {
                    $this.addClass($this.data("animate")).addClass("animate__animated");
                }
            }, {
                offset: "90%",
                triggerOnce: true
            });
        },
        processItemQueue: function() {
            var $at = this;
            if($at.aTimer) {
                return;
            }
            $at.aTimer = window.setInterval(function() {
                var $at_queue = false;
                for(var $at_animated_id in $at.aQueue) {
                    if($at.aQueue[$at_animated_id].length) {
                        $at_queue = true;
                        break;
                    }
                }
                if($at_queue) {
                    for(var $at_animated_id in $at.aQueue) {
                        var $at_item = $($at.aQueue[$at_animated_id].shift());
                        $at_item.addClass($at_item.data("animate")).addClass("animate__animated");
                    }
                    $at.processItemQueue();
                } else {
                    window.clearInterval($at.aTimer);
                    $at.aTimer = null
                }
            }, $at.aDelay);
        }
    };
    ST.mainSlider = {
        init: function() {
            var homeslider = new Swiper('.swiper#home-slider', {
                loop: false,
                rewind: true,
                slidesPerView: 1,
                spaceBetween: 0,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-homeslider',
                    nextEl: '.swiper-next-homeslider'
                },
                pagination: {
                    el: ".swiper-pagination-homeslider",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }
            });
        }
    };
    ST.categorySlider = {
        init: function() {
            var swiper = new Swiper('.swiper#cat-slider', {
                loop: false,
                rewind: true,
                slidesPerView: 6,
                spaceBetween: 0,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-cat',
                    nextEl: '.swiper-next-cat'
                },
                pagination: {
                    el: ".swiper-pagination-cat",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2
                    },
                    320: {
                        slidesPerView: 2
                    },
                    360: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 5
                    },
                    1200: {
                        slidesPerView: 6
                    }
                }
            });
        }
    };
    ST.tabSlider = {
        init: function() {
            this.tab1();
            this.tab2();
            this.tab3();
        },
        tab1: function() {
            var swiper = new Swiper('.swiper#tab1-product', {
                loop: false,
                rewind: true,
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-tab1',
                    nextEl: '.swiper-next-tab1'
                },
                pagination: {
                    el: ".swiper-pagination-tab1",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    }
                }
            });
        },
        tab2: function() {
            var swiper = new Swiper('.swiper#tab2-product', {
                loop: false,
                rewind: true,
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-tab2',
                    nextEl: '.swiper-next-tab2'
                },
                pagination: {
                    el: ".swiper-pagination-tab2",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    }
                }
            });
        },
        tab3: function() {
            var swiper = new Swiper('.swiper#tab3-product', {
                loop: false,
                rewind: true,
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-tab3',
                    nextEl: '.swiper-next-tab3'
                },
                pagination: {
                    el: ".swiper-pagination-tab3",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        grid: {
                            rows: 2,
                            fill: 'row' | 'column',
                        },
                        spaceBetween: 30
                    }
                }
            });
        }
    };
    ST.blogSlider = {
        init: function() {
            var swiper = new Swiper('.swiper#blog-slider', {
                loop: false,
                rewind: true,
                slidesPerView: 3,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-blog',
                    nextEl: '.swiper-next-blog'
                },
                pagination: {
                    el: ".swiper-pagination-blog",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        }
    };
    ST.brandSlider = {
        init: function() {
            var swiper = new Swiper('.swiper#brand-slider', {
                loop: false,
                rewind: true,
                slidesPerView: 6,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.swiper-prev-brand',
                    nextEl: '.swiper-next-brand'
                },
                pagination: {
                    el: ".swiper-pagination-brand",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1400: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }
            });
        }
    };
    $document.ready(function() {
        ST.init();
        ST.animateTemplate.init();
        ST.mainSlider.init();
        ST.categorySlider.init();
        ST.tabSlider.init();
        ST.blogSlider.init();
        ST.brandSlider.init();
    });
})(jQuery);
