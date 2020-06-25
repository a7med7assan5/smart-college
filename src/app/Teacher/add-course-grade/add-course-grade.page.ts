import { Component, OnInit } from '@angular/core';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-add-course-grade',
  templateUrl: 'add-course-grade.page.html',
  styleUrls: ['add-course-grade.page.scss']
})
export class teacherAddCourseGradePage implements OnInit {
  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: any;
  gradetype: any;
  grade: any;
  response: any;
  error: any;
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
  sub: any;

  addCourseGrade(type: HTMLInputElement, grade: HTMLInputElement) {
    this.gradetype = type.value, this.grade = grade.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');


    this.teacherservices.addCourseSemesterGrade(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.gradetype, this.grade).subscribe(res => {
      this.response = res;
      if (error.classList.contains('d-block')) {
        error.classList.replace('d-block', 'd-none');
      }
      response.classList.replace('d-none', 'd-block');
      response.innerHTML = this.response.msg;

      type.value = '';
      grade.value = "";
    }, err => {
      this.error = err.error;
      if (response.classList.contains('d-block')) {
        response.classList.replace('d-block', 'd-none');
      }
      error.classList.replace('d-none', 'd-block');
      error.innerHTML = this.error.msg;
    }
    );


  }
  ngOnInit(): void {

  }

}
