import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-add-lecture',
  templateUrl: 'add-lecture.page.html',
  styleUrls: ['add-lecture.page.scss']
})
export class addLecturePage implements OnInit {
  currentCourseSemester: Semester;
  currentUser: User;
  currentCourse: Course;
  _id: string;
  coursesdata: any;

  lectureNumber: string;
  lectureLocation: string;
  beaconId: string;
  response: any;
  error: any;
  response2: any;
  error2: any;


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
  AddLeacture(lectureNumber: HTMLInputElement, lectureLocation: HTMLInputElement, beaconId: HTMLInputElement) {
    this.lectureNumber = lectureNumber.value, this.lectureLocation = lectureLocation.value, this.beaconId = beaconId.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.addCourseSemesterLecture(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.lectureNumber, this.lectureLocation, this.beaconId).subscribe(res => {
      this.response = res;
      this.teacherservices.addCourseSemesterAttendance(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.lectureNumber, this.beaconId).subscribe(res => {
        this.response2 = res;
      }, err => {
        this.error2 = err.error;
      }
      );
      if (error.classList.contains('d-block')) {
        error.classList.replace('d-block', 'd-none');
      }
      response.classList.replace('d-none', 'd-block');
      response.innerHTML = this.response.msg;

      lectureNumber.value = "";
      lectureLocation.value = "";
      beaconId.value = "";
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
