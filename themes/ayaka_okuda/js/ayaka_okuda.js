(function ($) {

  "use strict";
  
  Drupal.behaviors.ayakaScheduleMapBehavior = {
    attach: function (context, settings) {
      $(document).ready(function($) {
        var $openBtn = $('div.sc-map-btn');
        var $closebtn = $('div.sc-map-overlay');
        $openBtn.on('click', function(){
          $(this).parent('li').addClass('is-show-map');
          $('body').css({
            overflow: 'hidden',
            height: '100%'
          })
          $closebtn.attr('aria-hidden', 'false');
        });
        $openBtn.on('touchend', function(){
          $(this).parent('li').addClass('is-show-map');
          $('body').css({
            overflow: 'hidden',
            height: '100%'
          })
          $closebtn.attr('aria-hidden', 'false');
        });
        $closebtn.on('click', function(){
          $(this).parent('li').removeClass('is-show-map').attr('aria-hidden', 'true');
          $('body').css({
            overflow: '',
            height: ''
          });
        });
        $closebtn.on('touchend', function(){
          $(this).parent('li').removeClass('is-show-map').attr('aria-hidden', 'true');
          $('body').css({
            overflow: '',
            height: ''
          });
        });
      });
    }	
  };

  Drupal.behaviors.ayakaScheduleImgBehavior = {
    attach: function (context, settings) {
      $(document).ready(function($) {
        var $openBtn = $('div.sc-img-btn');
        var $closebtn = $('div.sc-img-overlay');
        $openBtn.on('click', function(){
          $(this).parent().parent('li').addClass('is-show-img');
          $('body').css({
            overflow: 'hidden',
            height: '100%'
          })
          $closebtn.attr('aria-hidden', 'false');
        });
        $openBtn.on('touchend', function(){
          $(this).parent().parent('li').addClass('is-show-img');
          $('body').css({
            overflow: 'hidden',
            height: '100%'
          })
          $closebtn.attr('aria-hidden', 'false');
        });
        $closebtn.on('click', function(){
          $(this).parent().parent('li').removeClass('is-show-img').attr('aria-hidden', 'true');
          $('body').css({
            overflow: '',
            height: ''
          });
        });
        $closebtn.on('touchend', function(){
          $(this).parent().parent('li').removeClass('is-show-img').attr('aria-hidden', 'true');
          $('body').css({
            overflow: '',
            height: ''
          });
        });
      });
    } 
  };

  Drupal.behaviors.ayakaSmoothScroll = {
    attach: function (context, settings) {
      $(document).ready(function($) {
        $('a[href^="#"]').click(function(){
          var speed = 400;
          var href = $(this).attr('href');
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body, html').stop().animate({ scrollTop:position }, speed, 'swing');
          return false;
        });
      });  
    }
  };

  Drupal.behaviors.ayakaGlobalNavigation = {
    attach: function (context, settings) {
      var $navi = $('.nav');
      var naviT = $navi.offset().top;
      var scrT;
      function naviPosition() {
        scrT = $(window).scrollTop();
        if (scrT > naviT) {
          $navi.addClass('navi-position');
        }
        else {
          $navi.removeClass('navi-position');
        }
      };
      $(window).on('scroll', naviPosition);
    }
  };

  Drupal.behaviors.ayakaSpOnlyGlobalNavigation = {
    attach: function (context, settings) {
      var $openBtn = $('.menu-open-btn');
      var $closeBtn = $('.menu-close-btn');
      $openBtn.on('click', function() {
        $('body').addClass('is-show-menu');
      });
      $closeBtn.on('click', function() {
        $('body').removeClass('is-show-menu');
      });
    }
  }

  Drupal.behaviors.ayakaScheduleTabMenu = {
    attach: function (context, settings) {
      //tab-menu -> close(nav check)
      $('.tab-label').on('click', function(){
        if ($('#nav-ctrl').prop('checked', true)) {
          $('#nav-ctrl').prop('checked', false);
        }
      });
    }
  };

  Drupal.behaviors.ayakaScheduleTabMenuHeight = {
    attach: function (context, settings) {
      //schedule -> setting height of #tab-content
      var scListCount = 0;
      var scTabListH, scTabWrapH;
      $('ul.tab-items').each(function() {
        var count = $(this).find('li').length;
        if (scListCount < count) {
          scListCount = count;
        }
      });
      scTabListH = $('.tab-items li').outerHeight(true);
      scTabWrapH = scListCount * scTabListH;
      $('.tab-content').css('height', scTabWrapH + 'px');
    }
  };
})(jQuery);
