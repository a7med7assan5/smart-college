import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import * as $ from 'jquery';
import * as dt from 'datatables.net';

@Component({
  selector: 'app-students-grade',
  templateUrl: 'students-grade.page.html',
  styleUrls: ['students-grade.page.scss']
})

export class studentsGradePage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  courseStudentsGrades: any;
  GradeTypeGrade: any;
  gradetype: any;
  courseGradeData: any;
  courseGrades: any;
  x: any;
  things: any[][];
  coursedata: any;
  useragrade: any;
  courseusers: any;
  userdata: any;
  usertotalgrades: any;
  arrayofusersdata: Array<object> = [];
  usertotalgradestotal: Array<object> = [];
  fakedata: any;
  courseTotalGrades: any;
  courseDataCode: any;
  semester_time: string;
  courseSemesterDataCode: any;
  selectedLanguage:string;
  public columns: any;
  public rows: any;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userserviceService: UserserviceService,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private translateConfigService: TranslateConfigService,
    private http: HttpClient, public navCtrl: NavController,
  ) {
    this.currentClickedUser = this.userserviceService.currentClickedUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.things = [];
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.columns = [
      { name: '_id' },
      { name: 'name' },
      { name: '{{grades.type}}({{grades.grade}})' },
      { name: 'Total({{courseTotalGrades.totalGrades}})' }
    ];
    
  }

  sub: any;

  getcoursedata(x, y) {

    this.adminservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursedata = res.semesters[0].grades
      this.courseDataCode = res;
      this.courseSemesterDataCode = res.semesters[0];
      // this.courseTotalGrades = this.coursedata.length;
      for (let i = 0; i < this.coursedata.length; i++) {
        this.adminservices.semesterStudentsGradesheet(x, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.coursedata[i].type).subscribe(res => {
          // this.fakedata = { "_id": "5eba5bb7900576e5c44f34b2", "studentId": x, "courseId": this.currentCourse.courseCode, "gradeType": this.coursedata[i].type, "score": 100, "__v": 0 }
          this.useragrade = res.score;
          this.things[y][i] = this.useragrade;

        }, err => {
          this.useragrade = err
          this.rows = res;
        });

      }
    }, err => {
      this.coursedata = err
      this.rows = err;
    });
  }

  ngOnInit(): void {
    $(document).ready( function () {
      dt.$('#table_id').DataTable();
  } );

  //   this.adminservices.totalCourseSemesterGrades(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
  //     this.courseTotalGrades = res
  //     this.rows = res;
  //   }, err => {
  //     this.courseTotalGrades = err
  //     this.rows = err;
  //   });
  //   this.adminservices.getCourseSemesterStudentsSheet(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
  //     this.courseusers = res;
  //     this.rows = res;
  //     for (let y = 0; y < this.courseusers.length; y++) {
  //       this.adminservices.profile(this.courseusers[y]._id).subscribe(res => {
  //         this.userdata = res
  //         this.rows = res;
  //         this.adminservices.semesterStudentTotalGrades(this.courseusers[y]._id, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
  //           this.usertotalgrades = res
  //           this.usertotalgradestotal[y] = this.usertotalgrades;
  //         }, err => {
  //           this.usertotalgrades = err
  //           this.rows = err;
  //         });

  //         this.arrayofusersdata[y] = this.userdata;
  //         this.things[y] = [];
  //         this.getcoursedata(this.userdata._id, y);
  //       }, err => {
  //         this.userdata = err
  //         this.rows = err;
  //       });

  //     }
  //   }, err => {
  //     this.courseusers = err;
  //     this.rows = err;
  //   });
  }
}
