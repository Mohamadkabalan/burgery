import 'bootstrap';



function ShowHideArrows(e, i) {
    let widthSum = 0;
    $(e + ' .swiper-slide').each(function () {
        widthSum += $(this).outerWidth(!0)
    }),
        widthSum > $(e).width()
            ? $(i).removeClass('hidden')
            : $(i).addClass('hidden')
}
function InitializeSlideshow(e) {
    $('.mainslideshow .swiper-slide').length > 1 &&
    (void 0 == e && (e = $(window).width() > 750 ? 'vertical' : 'horizontal'),
        (homeslideshowswiper = new Swiper('.mainslideshow', {
            speed: 1e3,
            slidesPerView: 1,
            loop: !0,
            autoplay: 5e3,
            preload: !0,
            direction: e,
            preventClicks: !0,
            preventClicksPropagation: !1,
            pagination: '.swiper-pagination',
            paginationClickable: !0,
            observer: !0,
            keyboardControl: !0,
            observeParents: !0,
            onInit: function (e) {},
            onSlideChangeStart: function (e) {
                var i = $('.mainslideshow .slide.swiper-slide-active').attr(
                    'data-swiper-slide-index'
                )
                hometitleswiper.slideTo(i), e.startAutoplay()
            },
            onSlideChangeEnd: function (e) {
                e.startAutoplay()
            },
        }))),
    $('.slideshowinfo .swiper-slide').length > 1 &&
    ((slideshowinfoswiper = new Swiper('.slideshowinfo', {
        effect: 'fade',
        simulateTouch: !1,
        loop: !0,
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
        (homeslideshowswiper.params.control = slideshowinfoswiper),
        (slideshowinfoswiper.params.control = homeslideshowswiper))
}
function CloseContactAside() {
    $('.contactinfo').removeClass('open'),
        ToggleFormMessage('.messageus', 0),
        ResetContainerInputs('.messageus #contactForm')
}
function CloseMessageUs() {
    $('.contactinfo').removeClass('open'),
        ResetContainerInputs('.applypopup #contactForm')
}
function ToggleMessageUs() {
    $('.contactinfo').hasClass('open')
        ? CloseMessageUs()
        : ($('.contactinfo').addClass('open'),
            AniamteToElement('.messageus', 50, 500))
}
function ToggleFormMessage(e, i) {
    $(e).hasClass('displaymessage')
        ? 0 == i && $(e).removeClass('displaymessage')
        : ($(e).addClass('displaymessage'),
            setTimeout(function () {
                $(e).removeClass('displaymessage')
            }, i))
}
function CloseCareersPopup() {
    $('.applypopup .careersform .title').html(),
        $('.applypopup').removeClass('open'),
        ResetContainerInputs('.applypopup #careersForm'),
        ToggleFormMessage('.applypopup', 0)
    var e = window.location.hash.substr(1)
    '' != e &&
    void 0 != e &&
    ((currenthash = ''),
        history.pushState(null, null, window.location.pathname))
}
function OpenCareersPopup(e, i) {
    let jobTitle = e.find('.text').text();
    $('.applypopup .careersform .title').html(jobTitle),
        $('.applypopup').addClass('open'),
        $('#positionId').val(i),
        history.pushState(null, null, window.location.pathname + '#' + i)
}
function ToggleFranchiseForm() {
    $('.franchiseinfo').hasClass('open')
        ? ($('.franchiseinfo').removeClass('open'),
            setTimeout(function () {
                ResetContainerInputs('#franchiseForm'),
                    $('.inputfield').removeClass('missing')
            }, 400))
        : $('.franchiseinfo').addClass('open')
}
function ActivateCountry(e) {
    let containerHeight = 0;
    $(window).width() > 750 &&
    (brancheswiper.slideTo(e),
        $('.brancheslisting .countries li').removeClass('active'),
        $('.brancheslisting .brancheswiper .slide').removeClass('open'),
        $('.brancheslisting .countries li').eq(e).addClass('active'),
        $('.brancheslisting .brancheswiper .slide')
            .eq(e)
            .find('.regions li')
            .each(function () {
                containerHeight += $(this).outerHeight(!0)
            }),
        console.log(containerHeight),
        $('.brancheslisting .brancheswiper .slide')
            .eq(e)
            .find('.regions')
            .css('height', containerHeight),
        $('.brancheslisting .brancheswiper .slide').eq(e).addClass('open'))
}
function OpenCountry(e) {
    let containerHeight=0;
    $(window).width() <= 750 &&
    (brancheswiper.slideTo(e),
        $('.brancheslisting .brancheswiper .slide').eq(e).hasClass('open')
            ? $('.brancheslisting .brancheswiper .slide').removeClass('open')
            : ($('.brancheslisting .countries li').removeClass('active'),
                $('.brancheslisting .brancheswiper .slide').removeClass('open'),
                $('.brancheslisting .countries li').eq(e).addClass('active'),
                $('.brancheslisting .brancheswiper .slide')
                    .eq(e)
                    .find('.regions li')
                    .each(function () {
                        containerHeight += $(this).outerHeight(!0)
                    }),
                console.log(containerHeight),
                $('.brancheslisting .brancheswiper .slide')
                    .eq(e)
                    .find('.regions')
                    .css('height', containerHeight),
                $('.brancheslisting .brancheswiper .slide').eq(e).addClass('open')))
}
function BackToTop() {
    $('html,body').animate({ scrollTop: 0 }, $(document).height() / 7)
}
function AniamteToElement(e, i, o) {
    var s = $(e).offset().top + i
    $('html,body').animate({ scrollTop: s }, o)
}
function ToggleActive(e) {
    $(e).hasClass('active') ? $(e).removeClass('active') : $(e).addClass('active')
}
function ToggleOpen(e) {
    alert("hello");
    $(e).hasClass('open') ? $(e).removeClass('open') : $(e).addClass('open')
}
function ToggleCustomClass(e, i) {
    $(e).hasClass(i) ? $(e).removeClass(i) : $(e).addClass(i)
}
function ResetContainerInputs(e) {
    $(e + ' input')
        .not('#positionId')
        .val(''),
        $(e + ' input:checkbox')
            .not('#positionId')
            .removeAttr('checked'),
        $(e + ' input:radio')
            .not('#positionId')
            .removeAttr('checked'),
        $(e + ' textarea')
            .not('#positionId')
            .val(''),
        $(e + ' select')
            .not('#positionId')
            .val('')
}
function isInteger(e) {
    return parseInt(e, 10) === e
}
function isVisible(e) {
    let windowHeight=$(window).height();
    let distanceFromTop = $(document).scrollTop();
    let minVisibleArea = distanceFromTop;
    let maxVisibleArea = distanceFromTop + windowHeight;
    let elementTopPosition = $(e).offset().top;
    let elementBottomPosition = elementTopPosition + e.height();
    return (
        (windowHeight ),
            (distanceFromTop),
            (minVisibleArea),
            (maxVisibleArea),
            (elementTopPosition),
            (elementBottomPosition),
            (elementTopPosition > minVisibleArea &&
                elementTopPosition < maxVisibleArea) ||
            (elementBottomPosition > minVisibleArea &&
                elementBottomPosition < maxVisibleArea) ||
            (elementTopPosition < minVisibleArea &&
                elementBottomPosition > maxVisibleArea)
                ? !0
                : !1
    )
}
function LoadSocialMedia() {
    $('.fb-like').length > 0 &&
    ('undefined' != typeof FB
        ? FB.init({ status: !0, cookie: !0, xfbml: !0 })
        : $.getScript(
            'http://connect.facebook.net/en_US/all.js#xfbml=1',
            function () {
                FB.init({ status: !0, cookie: !0, xfbml: !0 })
            }
        )),
        $.getScript('http://platform.twitter.com/widgets.js'),
        $('.twitter-share-button').show()
    var e = $('.g-plusone')
    if (
        (e.length > 0 &&
        ('undefined' != typeof gapi
            ? e.each(function () {
                gapi.plusone.render($(this).get(0))
            })
            : $.getScript('https://apis.google.com/js/plusone.js')),
        $('.sharethis').length > 0)
    ) {
        $.getScript(
            'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-506c30621d49b039'
        )
    }
}

var pageId = '',
    pageClass = '',
    routeUrl = '',
    url = '',
    currenthash = '',
    ismobile = !1,
    menuswiper = null,
    homeslideshowswiper = null,
    slideshowinfoswiper = null,
    stripephoneswiper = null,
    hometitleswiper = null,
    phoneswiper = null,
    foodswiper = null,
    menucategoriesswiper = null,
    brancheswiper = null,
    footerbrancheswiper = null
$(document).ready(function () {
    let initialslide=0;
    let containerHeight=0;
    let containerWidth = $('.menucategories').outerWidth(!0);
    let itemsWidthSum = 0;
    (url = window.location.href),
        (currenthash = window.location.hash.substr(1)),
        (pageId = $('body').attr('id')),
        (pageClass = $('body').attr('class')),
        (routeUrl = $('#routeUrl').val()),
    void 0 == pageClass && (pageClass = ''),
    'careers' == pageId &&
    '' != currenthash &&
    void 0 != currenthash &&
    OpenCareersPopup($('#careerid_' + currenthash), currenthash),
    $('.menucontainer .swiper-slide').length > 1 &&
    (menuswiper = new Swiper('.menucontainer', {
        speed: 800,
        slidesPerView: 'auto',
        noSwipingClass: 'do_not_swipe',
        loop: !1,
        preload: !0,
        direction: 'vertical',
        preventClicks: !0,
        preventClicksPropagation: !1,
        onInit: function (e) {
            $('.menucontainer').removeClass('faded'),
                $('.menucontainer').outerHeight(!0) < 433
                    ? $('.menucontainer .swiper-wrapper').removeClass('do_not_swipe')
                    : $('.menucontainer .swiper-wrapper').addClass('do_not_swipe')
        },
    })),
    $('.hometitleswiper .swiper-slide').length > 1 &&
    (hometitleswiper = new Swiper('.hometitleswiper', {
        speed: 800,
        effect: 'fade',
        simulateTouch: !1,
        loop: !1,
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
        InitializeSlideshow(),
    $('.phoneswiper .swiper-slide').length > 1 &&
    (phoneswiper = new Swiper('.phoneswiper', {
        speed: 1e3,
        autoplay: 5e3,
        effect: 'fade',
        loop: !0,
        preload: !0,
        simulateTouch: !1,
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
    $('.stripephoneswiper .swiper-slide').length > 1 &&
    (stripephoneswiper = new Swiper('.stripephoneswiper', {
        speed: 1e3,
        autoplay: 5e3,
        effect: 'fade',
        loop: !0,
        preload: !0,
        simulateTouch: !1,
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
    $('.foodswiper .swiper-slide').length > 1 &&
    ((foodswiper = new Swiper('.foodswiper', {
        speed: 1e3,
        loop: !1,
        slidesPerView: 'auto',
        preload: !0,
        keyboardControl: !0,
        onInit: function (e) {
            $(window).width() > 750
                ? $('.foodswiper .swiper-wrapper').removeClass('do_not_swipe')
                : $('.foodswiper .swiper-wrapper').addClass('do_not_swipe'),
                ShowHideArrows('.foodswiper', '.foodcontainer .arrows')
        },
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
        $('.foodcontainer .rightarrow').click(function () {
            foodswiper.slideNext()
        }),
        $('.foodcontainer .leftarrow').click(function () {
            foodswiper.slidePrev()
        })),
    $('.menucategories .swiper-slide').length > 1 &&
    (
        $('#categoryinitialslide').length > 0 &&
        (initialslide = $('#categoryinitialslide').val()),
            (menucategoriesswiper = new Swiper('.menucategories', {
                speed: 1e3,
                loop: !1,
                slidesPerView: 'auto',
                preload: !0,
                noSwipingClass: 'do_not_swipe',
                initialSlide: initialslide,
                preventClicks: !0,
                preventClicksPropagation: !1,
                onSlideChangeStart: function (e) {
                    e.startAutoplay()
                },
                onSlideChangeEnd: function (e) {
                    e.startAutoplay()
                },
            }))),
    $('.brancheswiper .swiper-slide').length > 1 &&
    (brancheswiper = new Swiper('.brancheswiper', {
        speed: 1e3,
        loop: !1,
        slidesPerView: 1,
        preload: !0,
        noSwipingClass: 'do_not_swipe',
        simulateTouch: !1,
        onInit: function (e) {
            $(window).width() > 750
                ? $('.brancheswiper .swiper-wrapper').removeClass('do_not_swipe')
                : ($('.brancheswiper .swiper-wrapper').addClass('do_not_swipe'),
                    $('.brancheslisting .brancheswiper .slide.open .regions li').each(
                        function () {
                            containerHeight += $(this).outerHeight(!0)
                        }
                    ),
                    $('.brancheslisting .brancheswiper .slide.open .regions').css(
                        'height',
                        containerHeight
                    ))
        },
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
    $('.footerbranches .swiper-slide').length > 1 &&
    ((footerbrancheswiper = new Swiper('.footerbranches ', {
        speed: 800,
        autoplay: 4e3,
        loop: !0,
        slidesPerView: 1,
        preload: !0,
        onInit: function (e) {},
        onSlideChangeStart: function (e) {
            e.startAutoplay()
        },
        onSlideChangeEnd: function (e) {
            e.startAutoplay()
        },
    })),
        $('.branchesarrow.rightarrow').click(function () {
            footerbrancheswiper.slideNext()
        }),
        $('.branchesarrow.leftarrow').click(function () {
            footerbrancheswiper.slidePrev()
        })),
        $('html').click(function (e) {}),
        $(window).resize(function () {
            $('.menucontainer').outerHeight(!0) < 433
                ? $('.menucontainer .swiper-wrapper').removeClass('do_not_swipe')
                : $('.menucontainer .swiper-wrapper').addClass('do_not_swipe'),
                $(window).width() > 750
                    ? (ismobile &&
                    ($('#container').addClass('notransitions'),
                        setTimeout(function () {
                            $('#container').removeClass('notransitions')
                        }, 100)),
                        (ismobile = !1),
                        ShowHideArrows('.foodswiper', '.foodcontainer .arrows'))
                    : (ismobile = !0),
            'home' == pageId &&
            ($(window).width() > 750
                ? (homeslideshowswiper !== null &&
                homeslideshowswiper.destroy(!1, !0),
                    InitializeSlideshow('vertical'))
                : (homeslideshowswiper !== null &&
                homeslideshowswiper.destroy(!1, !0),
                    InitializeSlideshow('horizontal'))),
            'menu' == pageId &&
            ($(window).width() > 750
                ? ($('.foodswiper .swiper-wrapper').removeClass('do_not_swipe'),
                    $('.menucategories .swiper-slide').each(function () {
                        itemsWidthSum += $(this).outerWidth(!0)
                    }),
                    itemsWidthSum > containerWidth
                        ? $('.menucategories .swiper-wrapper').removeClass(
                            'do_not_swipe'
                        )
                        : $('.menucategories .swiper-wrapper').addClass('do_not_swipe'))
                : ($('.foodswiper .swiper-wrapper').addClass('do_not_swipe'),
                    $('.menucategories .swiper-wrapper').removeClass(
                        'do_not_swipe'
                    ))),
            'branches' == pageId &&
            ($(window).width() > 750
                ? $('.brancheswiper .swiper-wrapper').removeClass('do_not_swipe')
                : ($('.brancheswiper .swiper-wrapper').addClass('do_not_swipe'),
                    (containerHeight = 0),
                    $('.brancheslisting .brancheswiper .slide.open .regions li').each(
                        function () {
                            containerHeight += $(this).outerHeight(!0)
                        }
                    ),
                    $('.brancheslisting .brancheswiper .slide.open .regions').css(
                        'height',
                        containerHeight
                    )))
        }),
        $(document).keydown(function (e) {
            27 == e.keyCode,
            37 == e.keyCode,
            39 == e.keyCode,
            13 == e.which &&
            ($('#contactForm input, #contactForm textarea').is(':focus') &&
            $('#contactForm').submit(),
            $('#careersForm input, #careersForm textarea').is(':focus') &&
            $('#careersForm').submit(),
            $(
                '#franchiseForm input, #franchiseForm textarea, #franchiseForm select'
            ).is(':focus') && $('#franchiseForm').submit())
        }),
        $('input.numbersonly').keydown(function (e) {
            13 == e.keyCode ||
            9 == e.keyCode ||
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            (8 != e.keyCode &&
                46 != e.keyCode &&
                37 != e.keyCode &&
                39 != e.keyCode &&
                e.preventDefault())
        }),
        $(window).scroll(function () {}),
        $('#franchiseForm').validate({
            errorClass: 'missing',
            rules: {
                fullname: 'required',
                phone: 'required',
                country: 'required',
                email: { required: !0, email: !0 },
            },
            messages: {
                fullname: '',
                phone: '',
                country: '',
                email: { required: '', email: '' },
            },
            highlight: function (e, i) {
                $(e).parents('.inputfield').addClass(i)
            },
            unhighlight: function (e, i) {
                $(e).parents('.inputfield').removeClass(i)
            },
            submitHandler: function (e) {
                if ($(e).valid()) {
                    var i = $(e).serialize(),
                        o = $(e).attr('action')
                    $('.loaderbtn').addClass('loading'),
                        $.ajax({
                            type: 'POST',
                            url: o,
                            data: i,
                            success: function (e, i) {
                                'success' == i
                                    ? (ToggleFormMessage('.franchiseinfo', 3200),
                                        setTimeout(function () {
                                            $('.loaderbtn').removeClass('loading'),
                                                ResetContainerInputs('#franchiseForm'),
                                                ToggleFranchiseForm()
                                        }, 3e3))
                                    : ($('.loaderbtn').removeClass('loading'), console.log(i))
                            },
                        })
                }
            },
        }),
        $('#careersForm').validate({
            errorClass: 'missing',
            rules: {
                fullname: 'required',
                phone: 'required',
                education: 'required',
                email: { required: !0, email: !0 },
            },
            messages: {
                fullname: '',
                phone: '',
                education: '',
                cv: '',
                email: { required: '', email: '' },
            },
            highlight: function (e, i) {
                $(e).parents('.inputfield').addClass(i)
            },
            unhighlight: function (e, i) {
                $(e).parents('.inputfield').removeClass(i)
            },
            submitHandler: function (e) {
                if ($(e).valid()) {
                    var i = $(e).serialize(),
                        o = $(e).attr('action')
                    $('.loaderbtn').addClass('loading'),
                        $.ajax({
                            type: 'POST',
                            url: o,
                            data: i,
                            success: function (e, i) {
                                'success' == i
                                    ? (ToggleFormMessage('.applypopup', 4300),
                                        setTimeout(function () {
                                            $('.loaderbtn').removeClass('loading'),
                                                ResetContainerInputs('#careersForm'),
                                                $('.delete .btn').click(),
                                                CloseCareersPopup()
                                        }, 3900))
                                    : (console.log(i), $('.loaderbtn').removeClass('loading'))
                            },
                        })
                }
            },
        }),
        $('#contactForm').validate({
            errorClass: 'missing',
            rules: {
                fullname: 'required',
                message: 'required',
                email: { required: !0, email: !0 },
            },
            messages: {
                fullname: '',
                message: '',
                email: { required: '', email: '' },
            },
            highlight: function (e, i) {
                $(e).parents('.inputfield').addClass(i)
            },
            unhighlight: function (e, i) {
                $(e).parents('.inputfield').removeClass(i)
            },
        })
})