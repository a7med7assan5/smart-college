import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-grades',
  templateUrl: 'grades-teacher.page.html',
  styleUrls: ['grades-teacher.page.scss']
})
export class teacherGradesPage implements OnInit {



  currentUser: User;
  currentCourseSemester: Semester;
  _id: any;
  currentCourse: any;
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
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.things = [];
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

  getcoursedata(x, y) {

    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursedata = res.semesters[0].grades
      this.courseDataCode = res;
      this.courseSemesterDataCode = res.semesters[0];
      // this.courseTotalGrades = this.coursedata.length;
      for (let i = 0; i < this.coursedata.length; i++) {
        this.teacherservices.semesterStudentsGradesheet(x, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.coursedata[i].type).subscribe(res => {
          // this.fakedata = { "_id": "5eba5bb7900576e5c44f34b2", "studentId": x, "courseId": this.currentCourse.courseCode, "gradeType": this.coursedata[i].type, "score": 100, "__v": 0 }
          this.useragrade = res;
          this.things[y][i] = this.useragrade;

        }, err => {
          this.useragrade = err
        });

      }
    }, err => {
      this.coursedata = err
    });
  }

  ngOnInit(): void {



    this.teacherservices.totalCourseSemesterGrades(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.courseTotalGrades = res
    }, err => {
      this.courseTotalGrades = err
    });
    this.teacherservices.getCourseSemesterStudentsSheet(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.courseusers = res;
      for (let y = 0; y < this.courseusers.length; y++) {
        this.teacherservices.profile(this.courseusers[y]._id).subscribe(res => {
          this.userdata = res

          this.teacherservices.semesterStudentTotalGrades(this.courseusers[y]._id, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
            this.usertotalgrades = res
            this.usertotalgradestotal[y] = this.usertotalgrades;
          }, err => {
            this.usertotalgrades = err
          });

          this.arrayofusersdata[y] = this.userdata;
          this.things[y] = [];
          this.getcoursedata(this.userdata._id, y);
        }, err => {
          this.userdata = err
        });

      }
    }, err => {
      this.courseusers = err;
    });


  }
}