import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { first } from 'rxjs/operators';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-courses',
  templateUrl: 'user-courses.page.html',
  styleUrls: ['user-courses.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class userCoursesPage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  userdata: any;
  usercoursesdata: any;
  usercoursesdata2: any;
  data: any[];
  coursedata: Array<any> = [];
  coursedataarr: Array<any> = [];
  x: any;


  arr: any[];
  coursesdata: any;
  semesterdata: any;
  status: any;
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
  sub: any;
  onSelectChange(event: any) {
    //update the ui
    this.status = event.target.value;
    this.adminservices.myCoursesByStatus(this.currentClickedUser._id, this.status).subscribe(res => {
      this.usercoursesdata = res;
      this.rows = res;
      this.arr = []
      if (res) {
        for (let i = 0; i < res.length; i++) {
          this.adminservices.getCourseSemesterData(this.usercoursesdata[i].Id, this.usercoursesdata[i].semester_time).subscribe(res => {
            this.coursesdata = res;
            this.rows = res;
            this.semesterdata = this.coursesdata.semesters[0]
            var objectC = { ...this.usercoursesdata[i], ...this.coursesdata };
            this.arr[i] = objectC
          }, err => {
            this.coursesdata = err
            this.rows = err;
          }
          );
        }
      }

    }, err => {
      this.usercoursesdata = err;
      this.rows = err;
    }
    );
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {

    this.adminservices.myCourses(this.currentClickedUser._id).subscribe(res => {
      this.usercoursesdata = res;
      this.rows = res;
      this.arr = []
      if (res) {
        for (let i = 0; i < res.length; i++) {
          this.adminservices.getCourseSemesterData(this.usercoursesdata[i].Id, this.usercoursesdata[i].semester_time).subscribe(res => {
            this.coursesdata = res;
            this.semesterdata = this.coursesdata.semesters[0]
            var objectC = { ...this.usercoursesdata[i], ...this.coursesdata };
            this.arr[i] = objectC
          }, err => {
            this.coursesdata = err;
            this.rows = err;
          }
          );
        }
      }
    }, err => {
      this.usercoursesdata = err;
      this.rows = err;
    }
    );

  }
  closClickedUser() {
    this.userserviceService.closeClickedUser();
  }
  openClickedUser(id) {
    this.userserviceService.getClickedUser(id).pipe(first()).subscribe(res => {
    }, err => {
      console.log('Fail to get Course');
    }
    );
  }
  closCourse() {
    this.courseService.closeCourse();
  }
  openCourse(courseCode) {
    this.courseService.getCourse(courseCode).pipe(first()).subscribe(res => {
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
