import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: 'delete-task.page.html',
  styleUrls: ['delete-task.page.scss']
})
export class deleteTaskPage implements OnInit {


  currentUser: User;
  currentCourseSemester: Semester;
  _id: string;
  coursedata: any;
  currentCourse: Course;
  taskType: string;
  response: any;
  error: any;
  coursesemesterdata: any;


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
    this.taskType = event.target.value;
  }
  DeleteTask() {
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.deleteCourseSemesterTask(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.taskType).subscribe(res => {
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

    this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      // console.log(this.currentCourse.courseCode)
      this.coursedata = res;
    }, err => {
      this.coursedata = err
    }
    );
    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursesemesterdata = res.semesters[0];

    }, err => {
      this.coursesemesterdata = err
    }
    );

  }

}
