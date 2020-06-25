import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-assignments',
  templateUrl: 'assignments.page.html',
  styleUrls: ['assignments.page.scss']
})
export class assignmentsPage implements OnInit {
  currentUser: User;

  _id: string;
  coursesdata: any;
  currentCourse: any;
  currentCourseSemester: Semester;
  coursesemesterdata: any;
  noTasks: string;
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
  ngOnInit(): void {

    this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      this.coursesdata = res;
    }, err => {
      this.coursesdata = err
    }
    );
    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursesemesterdata = res.semesters[0].tasks;
      if (this.coursesemesterdata.length == 0) {
        this.noTasks = "No Tasks Yet!"
      }
    }, err => {
      this.coursesemesterdata = err
    }
    );

  }
}
