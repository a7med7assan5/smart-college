import { Component, OnInit } from '@angular/core';
import { User, Role } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: 'add-assignment.page.html',
  styleUrls: ['add-assignment.page.scss']
})
export class addAssignmentPage implements OnInit {

  currentUser: User;
  currentCourse: Course;
  _id: string;
  coursesdata: any;

  taskType: string;
  taskPath: string;
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
  AddTask(taskType: HTMLInputElement, taskPath: HTMLInputElement) {
    this.taskType = taskType.value, this.taskPath = taskPath.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    // this.teacherservices.addCourseTask(this.currentCourse.courseCode, this.taskType, this.taskPath).subscribe(res => {
    //   this.response = res;
    //   if (error.classList.contains('d-block')) {
    //     error.classList.replace('d-block', 'd-none');
    //   }
    //   response.classList.replace('d-none', 'd-block');
    //   response.innerHTML = this.response.msg;

    //   taskType.value = "";
    //   taskPath.value = "";
    // }, err => {
    //   this.error = err.error;
    //   if (response.classList.contains('d-block')) {
    //     response.classList.replace('d-block', 'd-none');
    //   }
    //   error.classList.replace('d-none', 'd-block');
    //   error.innerHTML = this.error.msg;
    // }
    // );
  }
  ngOnInit(): void {



  }
}
