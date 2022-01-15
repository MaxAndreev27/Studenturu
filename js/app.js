jQuery(document).ready(function () {
    /*Преобразование img в svg*/
    function imgToSvgConvert(element) {
        var img = jQuery(element);
        var imgID = img.attr('id');
        var imgClass = img.attr('class');
        var imgURL = img.attr('src');
        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                svg = svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                svg = svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            svg = svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            img.replaceWith(svg);
        }, 'xml');
    }

    jQuery('img.svg').each(function () {
        imgToSvgConvert(jQuery(this));
    });

    /*Фиксированное главное меню при прокрутке*/
    /*Проверка сразу*/
    checkMenuPosition();
    /*Проверка при скролле*/
    jQuery(window).on('scroll', checkMenuPosition);
    /*Ф-ция проверки*/
    function checkMenuPosition() {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        /*var headerTopHeight = parseFloat(jQuery('#header-top').css('height'));*/
        if (top >= 10) {
            jQuery('#header-top').addClass('sticky');
        } else {
            jQuery('#header-top').removeClass('sticky');
        }
    }

    /*Открыть/закрыть список предметов*/
    jQuery('.show-more').on('click', function () {
        if (!jQuery(this).closest('.item').find('.content').hasClass('open')) {
            jQuery(this).closest('.item').find('.content').addClass('open');
        } else {
            jQuery(this).closest('.item').find('.content').removeClass('open');
        }
    });

    /*Слайдер круги на лендинге на мобилке*/
    if (jQuery(window).width() < 768) {
        if (jQuery('.circle-items-wrapper').length) {
            let $status = jQuery('.paging-info-sm');
            let $slickElement = jQuery('.circle-items-wrapper');

            $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                let i = (currentSlide ? currentSlide : 0) + 1;
                $status.html('<span class="current">' + i + '</span>' + ' из ' + '<span class="total">' + slick.slideCount  + '</span>');
            });

            $slickElement.on('init', function () {
                jQuery(this).css('visibility', 'visible');
            });

            $slickElement.slick({
                arrows: false, /*Стрелки навигации*/
                dots: false, /*Точки навигации*/
                autoplay: false, /*Автопрокрутка*/
                infinite: false,
                variableWidth: false,
                autoplaySpeed: 5000, /*Интервал смены слайдов*/
                speed: 1000, /*Скорость анимации*/
                lazyLoad: 'progressive', /*Ленивая загрузка 'ondemand' or 'progressive'*/
                waitForAnimate: true, /*Ждать окончания анимации*/
                slidesPerRow: 1,
                rows: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '15%',
            });
        }
        /*Слайдер на странице Ready на mobile*/
        if (jQuery('.comment-row').length) {
            jQuery('.comment-row').slick({
                arrows: false, /*Стрелки навигации*/
                dots: true, /*Точки навигации*/
                autoplay: false, /*Автопрокрутка*/
                infinite: false,
                variableWidth: false,
                autoplaySpeed: 5000, /*Интервал смены слайдов*/
                speed: 1000, /*Скорость анимации*/
                lazyLoad: 'progressive', /*Ленивая загрузка 'ondemand' or 'progressive'*/
                waitForAnimate: true, /*Ждать окончания анимации*/
                slidesPerRow: 1,
                rows: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '5%',
            });
        }
    }

    /*Кнопка для вызова формы "Заказать звонок"*/
    if (jQuery('.btn-call').length) {
        jQuery('.btn-call').on('click', function () {
            //var height = $('.formCall').outerHeight();
            //var top = ($(window).height() - height) / 2 - 60;
            var top = window.pageYOffset || document.documentElement.scrollTop;
            var width = jQuery('.form-popup').outerWidth();
            var left = (jQuery(window).width() - width) / 2;
            var formName = jQuery(this).data('target');
            jQuery('.' + formName).css("top", top + 40 + "px");
            jQuery('.' + formName).css("left", left + "px");
            jQuery('.inner-div').addClass('blur');
            jQuery('.bg-gray-popup').fadeIn(400);
            jQuery('.' + formName).fadeIn(400);
        });

        jQuery('.close-form-btn').on('click', function () {
            jQuery('.bg-gray-popup').fadeOut(400);
            jQuery(this).closest('.form-popup').fadeOut(400);
            jQuery('.inner-div').removeClass('blur');
        });
    }

    /*Закрытие форм, если нажать на серый фон, т.е мимо формы*/
    if (jQuery('.bg-gray-popup').length) {
        jQuery('.bg-gray-popup').on('click', function () {
            jQuery('.bg-gray-popup').fadeOut(400);
            jQuery('.form-popup').fadeOut(400);
            jQuery('.inner-div').removeClass('blur');
        });
    }
});