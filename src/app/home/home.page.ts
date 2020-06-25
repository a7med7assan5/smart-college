import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AuthService } from '../services/auth.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class homePage implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthService) { this.currentUser = this.authenticationService.currentUserValue; }




  ngOnInit(): void {

    /*==================================================================
     [ Focus input ]*/
    $('.input100').each(function () {
      $(this).on('blur', function () {
        if ($(this).val().trim() != "") {
          $(this).addClass('has-val');
        }
        else {
          $(this).removeClass('has-val');
        }
      })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
      var check = true;

      for (var i = 0; i < input.length; i++) {
        if (validate(input[i]) == false) {
          showValidate(input[i]);
          check = false;
        }
      }

      return check;
    });


    $('.validate-form .input100').each(function () {
      $(this).focus(function () {
        hideValidate(this);
      });
    });

    function validate(input) {
      if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          return false;
        }
      }
      else {
        if ($(input).val().trim() == '') {
          return false;
        }
      }
    }

    function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function () {
      if (showPass == 0) {
        $(this).next('input').attr('type', 'text');
        $(this).addClass('active');
        showPass = 1;
      }
      else {
        $(this).next('input').attr('type', 'password');
        $(this).removeClass('active');
        showPass = 0;
      }

    });














    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
    var siteMenuClone = function () {
      $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
      });
      setTimeout(function () {
        var counter = 0;
        $('.site-mobile-menu .has-children').each(function () {
          var $this = $(this);
          $this.prepend('<span class="arrow-collapse collapsed">');
          $this.find('.arrow-collapse').attr({
            'data-toggle': 'collapse',
            'data-target': '#collapseItem' + counter,
          });
          $this.find('> ul').attr({
            'class': 'collapse',
            'id': 'collapseItem' + counter,
          });
          counter++;
        });
      }, 1000);
      $('body').on('click', '.arrow-collapse', function (e) {
        var $this = $(this);
        if ($this.closest('li').find('.collapse').hasClass('show')) {
          $this.removeClass('active');
        } else {
          $this.addClass('active');
        }
        e.preventDefault();
      });
      $(window).resize(function () {
        var $this = $(this),
          w = $this.width();
        if (w > 768) {
          if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
          }
        }
      })
      $('body').on('click', '.js-menu-toggle', function (e) {
        var $this = $(this);
        e.preventDefault();
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
          $('body').find('.js-menu-toggle').removeClass('active');
        } else {
          $('body').addClass('offcanvas-menu');
          $('body').find('.js-menu-toggle').addClass('active');
        }
      })
      // click outisde offcanvas
      $(document).mouseup(function (e) {
        var container = $(".site-mobile-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
            $('body').find('.js-menu-toggle').removeClass('active');
          }
        }
      });
    };
    siteMenuClone();
    var siteScroll = function () {
      $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 100) {
          $('.js-sticky-header').addClass('shrink');
        } else {
          $('.js-sticky-header').removeClass('shrink');
        }
      })
    };
    siteScroll();
    var siteSticky = function () {
      $(".js-sticky-header").sticky({
        topSpacing: 0
      });
    };
    siteSticky();
    var siteOwlCarousel = function () {
      $('.testimonial-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1000,
      });
    };
    siteOwlCarousel();
    // if (location.search.indexOf('r') < 0) {
    //   var hash = window.location.hash;
    //   var loc = window.location.href.replace(hash, '/home');
    //   loc += (loc.indexOf('?') < 0 ? '?' : '&') + 'r';
    //   setTimeout(function () { window.location.href = loc + hash; }, 1);
    // }
  }

}
