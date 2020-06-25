import { Component, OnInit } from '@angular/core';
import { User, Role } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course-student-grade',
  templateUrl: 'add-course-student-grade.page.html',
  styleUrls: ['add-course-student-grade.page.scss']
})
export class addCourseStudentGradePage implements OnInit {



  currentUser: User;

  _id: string;
  coursedata: any;
  currentCourse: any;
  taskType: string;
  gradeType: any;
  studentId: string;
  score: string;
  response: any;
  error: any;


  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentCourse = this.courseService.currentCourseValue;
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
  selectChangeHandler(event: any) {
    //update the ui
    this.gradeType = event.target.value;
  }
  addStudentGrade(studentId: HTMLInputElement, score: HTMLInputElement) {

    this.studentId = studentId.value, this.score = score.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.addStudentGradeId(this.currentCourse.courseCode, this.studentId, this.gradeType, this.score).subscribe(res => {
      this.response = res;

      studentId.value = "";
      score.value = "";
    }, err => {
      this.error = err.error;
    }
    );
  };
  ngOnInit(): void {

    this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      this.coursedata = res;
    }, err => {
      this.coursedata = err
    }
    );

  }
}
