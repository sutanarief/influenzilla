$(document).ready(function() {
    const $sliderWrapper = $('.sliderWrapper');
    const $sliderContainer = $('.sliderContainer');
    const $sliderItems = $('.sliderItem');
    const $paginationItems = $('.paginationItem');
    const $menuToggle = $('#menuToggle')
    const $menuList = $('#menuList')
    const $footer = $('#footer')
    const $section01 = $('#sectionContainer01')
    const $section02 = $('#sectionContainer02')
    const $section03 = $('#sectionContainer03')
    const $section04 = $('#sectionContainer04')
    const $section05 = $('#sectionContainer05')
    const $section06 = $('#sectionContainer06')
    const $section07 = $('#sectionContainer07')

    let currentIndex = 0;

    function goToSlide(index) {
      $sliderWrapper.animate({ left: -index * 100 + '%' }, 500);
      $sliderWrapper.removeClass('hide')
      $sliderWrapper.eq($sliderWrapper.length - 1 -index).addClass('hide');
      $sliderWrapper.eq($sliderWrapper.length - 2 - index).addClass('hide');
      $paginationItems.removeClass('currentPage');
      $paginationItems.eq(index).addClass('currentPage');
      currentIndex = index;
    }

    $paginationItems.on('click', function() {
      goToSlide($(this).index());
    });

    function autoAdvance() {
      if (currentIndex < $sliderWrapper.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    }

    const interval = setInterval(autoAdvance, 6000);

    $sliderContainer.mouseenter(function() {
      clearInterval(interval);
    });

    $sliderContainer.mouseleave(function() {
      interval = setInterval(autoAdvance, 6000);
    });

    $menuToggle.on('click', function() {
      console.log($menuToggle.text())
      if($menuToggle.text().includes('MENU')) {
        console.log('MENU')
        $('body,html').css('background', '#111')
        $menuToggle.text('CLOSE')
        $menuList.show()
        $footer.hide()
        $section01.hide()
        $section02.hide()
        $section03.hide()
        $section04.hide()
        $section05.hide()
        $section06.hide()
        $section07.hide()
      } else if($menuToggle.text().includes('CLOSE')) {
        console.log('CLOSE')
        $('body,html').css('background', `url('/images/bg_desktop.png'), lightgray 50% / cover no-repeat`)
        $menuToggle.text('MENU')
        $menuList.hide()
        $footer.show()
        $section01.show()
        $section02.show()
        $section03.show()
        $section04.show()
        $section05.show()
        $section06.show()
        $section07.show()
      }
    })
});