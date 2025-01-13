/* --------------------------------------------------
    * projects carousel
    * --------------------------------------------------*/
var projectsCarousel = function ($scope, $) {
    $scope.find('.project-slider').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $center   = $this.data('center'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 2,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 2,
            $gaps     = $this.data('gaps') !== '' ? $this.data('gaps') : 60,
            $tgaps    = $this.data('tgaps') !== '' ? $this.data('tgaps') : 40,
            $mgaps    = $this.data('mgaps') !== '' ? $this.data('mgaps') : 20,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            rtl: rtl_owl(),
            autoplay:$auto,
            autoplayTimeout: $time,
            center:$center,
            loop:$loop,
            responsiveClass:true,
            dots:$dots,
            nav:$nav,
            navText:['<i class="xp-webicon-left-arrow-2"></i>', '<i class="xp-webicon-trajectory"></i>'],
            responsive : {
                0 : {
                    margin:$mgaps,
                    items:$mitems,
                },
                768 : {
                    margin:$tgaps,
                    items:$titems,
                },
                1024 : {
                    margin:$gaps,
                    items:$items,
                }
            }
        });
    });
};
