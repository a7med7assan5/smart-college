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
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-course-info',
  templateUrl: 'user-course-info.page.html',
  styleUrls: ['user-course-info.page.scss']
})
export class userCourseInfoPage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  private _id: string;
  semester_time: string;
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
      { name: '_id' },
      { name: 'name' },
      { name: '{{grade.type}}({{grade.grade}})' },
      { name: 'Total({{courseTotalGrades.totalGrades}})' }

    ];
  }
  GradeTypeGrade: any;
  studentgrades: any;
  gradetype: any;
  arrofdata: Array<any> = [];
  x: any;
  mydata: any;
  courseTotalGrades: any;
  usertotalgrades: any;
  sub: any;
  ngOnInit(): void {
    this.adminservices.totalCourseSemesterGrades(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.courseTotalGrades = res;
      this.rows = res;

    }, err => {
      this.courseTotalGrades = err;
      this.rows = err;

    });

    this.adminservices.semesterStudentTotalGrades(this.currentClickedUser._id, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.usertotalgrades = res;
      this.rows = res;

    }, err => {
      this.usertotalgrades = err;
      this.rows = err;
    });

    this.adminservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.GradeTypeGrade = res.semesters[0].grades;
      for (let i = 0; i < this.GradeTypeGrade.length; i++) {
        this.adminservices.getMyCourseSemesterGrades(this.currentClickedUser._id, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.GradeTypeGrade[i].type).subscribe(res => {
          this.studentgrades = res;
          this.rows = res;
          if (this.studentgrades) {
            this.arrofdata.push(this.studentgrades);
          }
        }, err => {
          this.studentgrades = err;
        });

      }


    }, err => {
      this.GradeTypeGrade = err;
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
