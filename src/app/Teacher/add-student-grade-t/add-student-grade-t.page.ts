import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester, Role } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-add-student-grade-t',
  templateUrl: 'add-student-grade-t.page.html',
  styleUrls: ['add-student-grade-t.page.scss']
})
export class addStudentGradeTPage implements OnInit {



  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  courseStudentsGrades: any;
  coursedata: any;
  gradeType: any;
  studentId: any;
  score: any;
  response: any;
  error: any;
  coursesemesterdata: any;
  coursaSemesterGrades: any;


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
    this.teacherservices.addSemesterStudentGrade(this.currentCourse.courseCode, this.studentId, this.currentCourseSemester.semesters[0].semester_time, this.gradeType, this.score).subscribe(res => {
      this.response = res;
      if (error.classList.contains('d-block')) {
        error.classList.replace('d-block', 'd-none');
      }
      response.classList.replace('d-none', 'd-block');
      response.innerHTML = this.response.msg;

      studentId.value = "";
      score.value = "";
    }, err => {
      this.error = err.error;
      if (response.classList.contains('d-block')) {
        response.classList.replace('d-block', 'd-none');
      }
      error.classList.replace('d-none', 'd-block');
      error.innerHTML = this.error.msg;
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
    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursesemesterdata = res.semesters[0];
      this.coursaSemesterGrades = res.semesters[0];
    }, err => {
      this.coursesemesterdata = err
    }
    );

  }

}
