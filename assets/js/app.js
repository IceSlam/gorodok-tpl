$(function () {
    var fx = function fx() {
        $(".capt").each(function (i, el) {
            var data = parseInt(this.dataset.n, 10);
            var props = {
                "from": {
                    "count": 0
                },
                "to": {
                    "count": data
                }
            };
            $(props.from).animate(props.to, {
                duration: 1000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete:function() {
                    if (el.dataset.sym !== undefined) {
                        el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
        });
    };

    var reset = function reset() {
        //console.log($(this).scrollTop())
        if ($(this).scrollTop() > 1300) {
            $(this).off("scroll");
            fx()
        }
    };

    $(window).on("scroll", reset);
});

$('.is-reviews__slider-slide__more').click(function(eventObject){
    $(this).toggleClass('rotate');
    $(this).parent().find('.is-reviews__slider-slide__review').toggleClass('show');

    if ($(this).parent().find('.is-reviews__slider-slide__review').hasClass('show')) {
        $(this).html('Скрыть <img src="./assets/img/about_page_reviews_more.svg" alt="Скрыть">');
    } else {
        $(this).html('Подробнее <img src="./assets/img/about_page_reviews_more.svg" alt="Больше">');
    }
    return false;
});