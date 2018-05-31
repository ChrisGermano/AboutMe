$('.list-link').on({
  mouseover: function() {
    $(this).prevAll().removeClass('active');
    $(this).addClass('active');

    var cat = $(this).data().target;

    $('.background').removeClass('active');
    $('[data-'+cat+']').addClass('active');
  },
  mouseleave: function() {
    $('.background').removeClass('active');
  },
  tap: function() {
    $(this).prevAll().removeClass('active');
    $(this).addClass('active');

    var cat = $(this).data().target;

    $('.background').removeClass('active');
    $('[data-'+cat+']').addClass('active');
  }
})

$('.background.active').on('tap, touchstart, touchend',function() {
  alert($(this).parent().data());
});
