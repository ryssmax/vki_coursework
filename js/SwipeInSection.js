$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // Получаем нужный слайд
  var current = $('.flex--active').data('slide'),
    // Берём онформацию из data slide для сенмы
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');     // Убираем старый, добавляем новый
  $(this).addClass('active'); 

  if (current === next) {     // короче, проверка на то, чтобы слайд не менялся каждый раз при нажатии на кнопку. Он не будет обновлятся, только при переключении на другой
    return false;
  } else { 
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');     // Находим следующий слайд и начинаем проигрывание анимации 
    $('.flex--active').addClass('animate--end');     // Добавляем вторую часть анимации и заканчиваем её 
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');      // Это 3 часть анимации, тут мы задаём команды для старта аинимаци ии заканчивания + добавление элементов \ удаление
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});