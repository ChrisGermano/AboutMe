$('.list-link').on({
  mouseover: function() {
    $(this).prevAll().removeClass('active');
    $(this).addClass('active');

    var cat = $(this).data().target;

    $('.background').removeClass('active');
    $('[data-'+cat+']').addClass('active');
  },
  mouseleave: function() {
    $('.list-link').removeClass('active');
    $('.background').removeClass('active');
  },
  tap: function() {
    $(this).prevAll().removeClass('active');
    $(this).addClass('active');

    var cat = $(this).data().target;

    $('.background').removeClass('active');
    $('[data-'+cat+']').addClass('active');
  },
  click: function() {
    window.location = $(this).data().url;
  }
})
