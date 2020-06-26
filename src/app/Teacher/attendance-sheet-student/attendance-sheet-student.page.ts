import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-sheet-student',
  templateUrl: 'attendance-sheet-student.page.html',
  styleUrls: ['attendance-sheet-student.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class teacherAttendanceSheetStudentPage implements OnInit {
  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  coursedata: any;
  courseusers: any;


  arrayofuserdata: Array<any> = [];
  arrayofstudentattendance: Array<any> = [];
  arrayofstudentattendance2: Array<object> = [];
  lecturesnumber: any;
  data: any;
  lectureattendance: any;

  arrayofusersdata: Array<any> = [];
  attendata: any;
  userdata: any;

  arrofdata: any;
  userattendance: any;


  things: any[][];
  usertotalattendance: any;
  usertotalattendancetotal: Array<object> = [];
  coursesdata: any;
  selectedLanguage:string;
  public columns: any;
  public rows: any;


  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private translateConfigService: TranslateConfigService,
    private http: HttpClient, public navCtrl: NavController

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.things = [];
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.columns = [
      { name: '_id' },
      { name: 'name' },
      { name: 'Week {{lectures.lectureNumber}}' },
      { name: 'Total ({{lecturesnumber}})' }
    ];
  }
  get isStudent() {
    return this.currentUser && this.currentUser.role === Role.Student;
  }
  get isTeacher() {
    return this.currentUser && this.currentUser.role === Role.Teacher;
  }

  get isTeacherOrStudent() {
    return this.currentUser && (this.currentUser.role === Role.Teacher || this.currentUser.role === Role.Student);
  }
  //   getcoursedata(x, y) {
  //     this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
  //       this.coursedata = res.lectures
  //       this.lecturesnumber = this.coursedata.length;
  //       for (let i = 0; i < this.coursedata.length; i++) {
  //         this.teacherservices.studentsAttendancesheet(x, this.currentCourse.courseCode, this.coursedata[i].lectureNumber).subscribe(res => {
  //           this.userattendance = res;
  //           this.things[y][i] = this.userattendance;
  //         }, err => {
  //           this.userattendance = err
  //         });

  //       }
  //     }, err => {
  //       this.coursedata = err
  //     });
  //   }

  //   ngOnInit(): void {
  //     this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
  //       // console.log(this.currentCourse.courseCode)
  //       this.coursesdata = res;
  //     }, err => {
  //       this.coursesdata = err
  //     }
  //     );

  //     this.teacherservices.getCourseStudentsSheet(this.currentCourse.courseCode).subscribe(res => {
  //       this.courseusers = res;
  //       for (let y = 0; y < this.courseusers.length; y++) {
  //         this.teacherservices.profile(this.courseusers[y]._id).subscribe(res => {
  //           this.userdata = res

  //           this.teacherservices.studentTotalAttendance(this.courseusers[y]._id, this.currentCourse.courseCode).subscribe(res => {
  //             this.usertotalattendance = res
  //             this.usertotalattendancetotal[y] = this.usertotalattendance;
  //           }, err => {
  //             this.usertotalattendance = err
  //           });
  //           this.arrayofusersdata[y] = this.userdata;
  //           this.things[y] = [];
  //           this.getcoursedata(this.arrayofusersdata[y]._id, y);
  //         }, err => {
  //           this.userdata = err
  //         });

  //       }
  //     }, err => {
  //       this.courseusers = err;
  //     });


  //   }

  // }


  getcoursedata(x, y) {
    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursedata = res.semesters[0].lectures
      this.lecturesnumber = this.coursedata.length;
      for (let i = 0; i < this.coursedata.length; i++) {
        this.teacherservices.studentsSemesterAttendancesheet(x, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.coursedata[i].lectureNumber).subscribe(res => {
          this.userattendance = res;
          this.things[y][i] = this.userattendance;
        }, err => {
          this.userattendance = err
        });

      }
    }, err => {
      this.coursedata = err
    });
  }

  
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      // console.log(this.currentCourse.courseCode)
      this.coursesdata = res;
    }, err => {
      this.coursesdata = err
    }
    );

    this.teacherservices.getCourseSemesterStudentsSheet(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.courseusers = res;
      for (let y = 0; y < this.courseusers.length; y++) {
        this.teacherservices.profile(this.courseusers[y]._id).subscribe(res => {
          this.userdata = res

          this.teacherservices.semesterStudentTotalAttendance(this.courseusers[y]._id, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
            this.usertotalattendance = res
            this.usertotalattendancetotal[y] = this.usertotalattendance;
          }, err => {
            this.usertotalattendance = err
          });
          this.arrayofusersdata[y] = this.userdata;
          this.things[y] = [];
          this.getcoursedata(this.arrayofusersdata[y]._id, y);
        }, err => {
          this.userdata = err
        });

      }
    }, err => {
      this.courseusers = err;
    });


  }

}

