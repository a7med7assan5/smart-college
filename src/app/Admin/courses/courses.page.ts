import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { first } from 'rxjs/operators';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

declare var $: any;
@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class adminCoursesPage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  coursedata: any[];
  department: any;
  selectedLanguage:string;
  public columns: any;
  public rows: any;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userserviceService: UserserviceService,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private translateConfigService: TranslateConfigService,
    private http: HttpClient, public navCtrl: NavController
  ) {
    this.currentClickedUser = this.userserviceService.currentClickedUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.columns = [
      { name: 'courseCode' },
      { name: 'courseName' },
      { name: 'creaditHours' },
      { name: 'status' }
    ];
  }
  onSelectChange(event: any) {
    //update the ui
    this.department = event.target.value;
    if (this.department == '') {
      this.adminservices.getCourses().subscribe(res => {
        this.coursedata = res;
        this.rows = res;
      }, err => {
        this.coursedata = err;
        this.rows = err;
      });
    }
    else {
      this.adminservices.getDepartmentCourses(this.department).subscribe(res => {
        this.coursedata = res;
        this.rows = res;
      }, err => {
        this.coursedata = err;
        this.rows = err;
      });
    }

  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.adminservices.getCourses().subscribe(res => {
      this.coursedata = res;
      this.rows = res;
    }, err => {
      this.coursedata = err;
      this.rows = err;
    });

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

    this.closCourse();

  }
  // closClickedUser() {
  //   this.userserviceService.closeClickedUser();
  // }
  // openClickedUser(id) {
  //   this.userserviceService.getClickedUser(id).pipe(first()).subscribe(res => {
  //   }, err => {
  //     console.log('Fail to get Course');
  //   }
  //   );
  // }
  closCourse() {
    this.courseService.closeCourse();
  }
  openCourse(courseCode) {
    this.courseService.getCourse(courseCode).pipe(first()).subscribe(res => {
      if(res){
        this._router.navigate(['/course/semesters'])
      }
      console.log(res);
    }, err => {
      console.log('Fail to get Course');
    }
    );

  }

  closSemester() {
    this.semesterserviceService.closeSemester();
  }
  openSemester(courseCode, semester_time) {
    this.semesterserviceService.getCourseSemesterData(courseCode, semester_time).pipe(first()).subscribe(res => {
    }, err => {
      console.log('Fail to get Course Semester');
    }
    );
  }
}
