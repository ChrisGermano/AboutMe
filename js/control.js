$('.list-link').on({
  mouseover: function() {

    $('.cursor').addClass('cursor-lg');

    $(this).prevAll().removeClass('active');
    $(this).addClass('active');

    var cat = $(this).data().target;

    $('.background').removeClass('active');
    $('[data-'+cat+']').addClass('active');
  },
  mouseleave: function() {

    $('.cursor').removeClass('cursor-lg');

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

$(document).ready(function() {
  $('*').css('cursor','none');
  $(this).mousemove();
})

$(document).on('mousemove', function(e) {
  $('.cursor').css({'top':e.pageY,'left':e.pageX});
})
