import { Component, OnInit } from '@angular/core';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-delete-course-grade',
  templateUrl: 'delete-course-grade.page.html',
  styleUrls: ['delete-course-grade.page.scss']
})
export class teacherDeleteCourseGradePage implements OnInit {
  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: any;
  gradetype: any;
  grade: any;
  response: any;
  coursedata: any;
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

  selectChangeHandler(event: any) {
    //update the ui
    this.gradetype = event.target.value;
  }
  deleteCourseGrade() {


    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.deleteCourseSemesterGrade(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.gradetype).subscribe(res => {
      this.response = res;
      if (error.classList.contains('d-block')) {
        error.classList.replace('d-block', 'd-none');
      }
      response.classList.replace('d-none', 'd-block');
      response.innerHTML = this.response.msg;
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

    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursedata = res.semesters[0];
    }, err => {
      this.coursedata = err
    }
    );

  }

}
